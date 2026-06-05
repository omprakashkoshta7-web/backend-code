const http = require('http');
const https = require('https');

const url = process.argv[2];
const method = process.argv[3] || 'GET';
const body = process.argv[4] || '';

const isHttps = url.startsWith('https');
const parsed = new URL(url);
const mod = isHttps ? https : http;

const opts = {
  hostname: parsed.hostname,
  port: parsed.port || (isHttps ? 443 : 80),
  path: parsed.pathname + parsed.search,
  method,
  headers: { 'Content-Type': 'application/json' },
};

const req = mod.request(opts, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => process.stdout.write(data));
});
req.on('error', (e) => process.stderr.write(e.message));
if (body) req.write(body);
req.end();
