import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveStaticPath } from '../server.js';

test('encoded traversal requests fall back to the app shell', () => {
  const distDir = 'C:\\site\\dist';
  const result = resolveStaticPath('/%2e%2e%2fserver.js', distDir, {
    existsSync: (path) => path === 'C:\\site\\dist\\index.html',
    statSync: () => ({ isFile: () => true }),
  });

  assert.equal(result, 'C:\\site\\dist\\index.html');
});
