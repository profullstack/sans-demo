/**
 * Simple script to test the web components demo
 * This script will open the web components demo in the default browser
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Serve the web components demo
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'web-components', 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }

  // Handle 404
  res.writeHead(404);
  res.end('Not found');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  
  // Open the demo in the default browser
  const openCommand = process.platform === 'win32' ? 'start' :
                      process.platform === 'darwin' ? 'open' : 'xdg-open';
  
  exec(`${openCommand} http://localhost:${PORT}/`);
  
  console.log('Press Ctrl+C to stop the server');
});