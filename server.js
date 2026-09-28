import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = resolve('dist');
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

export function resolveStaticPath(pathname, baseDir = distDir, fs = { existsSync, statSync }) {
  let requestedPath = '/';

  try {
    requestedPath = decodeURIComponent(pathname);
  } catch {
    requestedPath = '/';
  }

  const safeBase = resolve(baseDir);
  const appShell = join(safeBase, 'index.html');
  const candidate = resolve(safeBase, requestedPath === '/' ? 'index.html' : `.${requestedPath}`);
  const isInsideBase = candidate === safeBase || candidate.startsWith(`${safeBase}${sep}`);

  if (!isInsideBase) {
    return appShell;
  }

  return fs.existsSync(candidate) && fs.statSync(candidate).isFile() ? candidate : appShell;
}

export function createPreviewServer() {
  return createServer((request, response) => {
    const url = new URL(request.url || '/', `http://localhost:${port}`);
    const filePath = resolveStaticPath(url.pathname);

    if (!existsSync(filePath)) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Run npm run build before npm run preview.');
      return;
    }

    response.writeHead(200, {
      'Content-Type': mimeTypes[extname(filePath)] || 'application/octet-stream',
    });
    createReadStream(filePath).pipe(response);
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  createPreviewServer().listen(port, () => {
    console.log(`Preview server: http://localhost:${port}`);
  });
}
