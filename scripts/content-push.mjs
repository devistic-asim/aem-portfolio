#!/usr/bin/env node
/**
 * Upload content/ HTML to da.live and preview/publish via Helix Admin API.
 *
 * Usage:
 *   node scripts/content-push.mjs upload [file.html]
 *   node scripts/content-push.mjs preview
 *   node scripts/content-push.mjs publish
 *   node scripts/content-push.mjs push      # upload + preview
 *   node scripts/content-push.mjs live      # upload + preview + publish
 *
 * Env (.env):
 *   AEM_IMS_TOKEN   — Bearer token for admin.da.live (upload)
 *   HLX_AUTH_TOKEN  — x-auth-token for admin.hlx.page (preview/publish)
 */

import {
  readFileSync, existsSync, readdirSync,
} from 'fs';
import { join, basename } from 'path';

const ORG = 'devistic-asim';
const SITE = 'aem-portfolio';
const BRANCH = 'main';
const CONTENT_DIR = 'content';

const DEFAULT_FILES = ['index.html', 'nav.html', 'footer.html'];

const PATH_MAP = {
  'index.html': '/',
  'nav.html': '/nav',
  'footer.html': '/footer',
};

function loadEnv() {
  const envPath = join(process.cwd(), '.env');
  if (!existsSync(envPath)) return;
  readFileSync(envPath, 'utf8').split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const eq = trimmed.indexOf('=');
    if (eq === -1) return;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = val;
  });
}

function getImsToken() {
  const token = process.env.AEM_IMS_TOKEN;
  if (!token) {
    throw new Error(
      'Missing AEM_IMS_TOKEN. Copy .env.example to .env and add your token.\n'
      + 'See docs/content-workflow.md for how to get it from da.live.',
    );
  }
  return token;
}

function getHlxToken() {
  const token = process.env.HLX_AUTH_TOKEN;
  if (!token) {
    throw new Error(
      'Missing HLX_AUTH_TOKEN. Copy .env.example to .env and add your API key.\n'
      + 'Get one at https://tools.aem.live/ (Site Admin → API keys).',
    );
  }
  return token;
}

function listContentFiles(specific) {
  if (specific) {
    const name = basename(specific);
    const path = join(CONTENT_DIR, name);
    if (!existsSync(path)) throw new Error(`File not found: ${path}`);
    return [name];
  }
  return readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.html'));
}

async function uploadFile(filename) {
  const token = getImsToken();
  const filePath = join(CONTENT_DIR, filename);
  const data = readFileSync(filePath);
  const form = new FormData();
  form.append('data', new Blob([data], { type: 'text/html' }), filename);

  const url = `https://admin.da.live/source/${ORG}/${SITE}/${filename}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });

  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = { raw: text };
  }

  if (!res.ok) {
    throw new Error(`Upload failed ${filename} (${res.status}): ${text.slice(0, 500)}`);
  }

  const webPath = PATH_MAP[filename] || `/${filename}`;
  console.log(`✓ uploaded ${filename} → ${webPath}`);
  if (json.aem?.previewUrl) console.log(`  preview: ${json.aem.previewUrl}`);
  return json;
}

async function uploadAll(specific) {
  const files = listContentFiles(specific);
  console.log(`Uploading ${files.length} file(s) to da.live…`);
  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    // sequential to avoid rate limits
    // eslint-disable-next-line no-await-in-loop
    await uploadFile(file);
  }
}

async function helixAction(action, paths) {
  const token = getHlxToken();
  const url = paths.length === 1 && !paths[0].includes('*')
    ? `https://admin.hlx.page/${action}/${ORG}/${SITE}/${BRANCH}${paths[0] === '/' ? '' : paths[0]}`
    : `https://admin.hlx.page/${action}/${ORG}/${SITE}/${BRANCH}/*`;

  const options = {
    method: 'POST',
    headers: {
      'x-auth-token': token,
      ...(paths.length > 1 ? { 'Content-Type': 'application/json' } : {}),
    },
    ...(paths.length > 1 ? { body: JSON.stringify({ paths }) } : {}),
  };

  const res = await fetch(url, options);
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`${action} failed (${res.status}): ${text.slice(0, 500)}`);
  }
  console.log(`✓ ${action} OK for: ${paths.join(', ')}`);
  if (text) console.log(text.slice(0, 300));
}

const WEB_PATHS = ['/', '/nav', '/footer'];

async function main() {
  loadEnv();
  const [command, arg] = process.argv.slice(2);

  if (!command || command === 'help' || command === '--help') {
    console.log(`
Content push — ${ORG}/${SITE}

  npm run content:upload   Upload content/*.html to da.live
  npm run content:preview  Preview on *.aem.page
  npm run content:publish  Publish to *.aem.live
  npm run content:push     Upload + preview
  npm run content:live     Upload + preview + publish

Single file:  node scripts/content-push.mjs upload nav.html
`);
    return;
  }

  switch (command) {
    case 'upload':
      await uploadAll(arg);
      break;
    case 'preview':
      await helixAction('preview', WEB_PATHS);
      console.log(`\nPreview: https://main--${SITE}--${ORG}.aem.page/`);
      break;
    case 'publish':
      await helixAction('live', WEB_PATHS);
      console.log(`\nLive: https://main--${SITE}--${ORG}.aem.live/`);
      break;
    case 'push':
      await uploadAll(arg);
      await helixAction('preview', WEB_PATHS);
      console.log(`\nPreview: https://main--${SITE}--${ORG}.aem.page/`);
      break;
    case 'live':
      await uploadAll(arg);
      await helixAction('preview', WEB_PATHS);
      await helixAction('live', WEB_PATHS);
      console.log(`\nLive: https://main--${SITE}--${ORG}.aem.live/`);
      break;
    default:
      throw new Error(`Unknown command: ${command}. Run with --help.`);
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
