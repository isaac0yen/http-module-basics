// api/server.js

import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { url } = req;
  let filePath;

  switch (url) {
    case '/dashboard':
      filePath = 'dashboard.html';
      break;
    case '/settings':
      filePath = 'settings.html';
      break;
    case '/':
      filePath = 'home.html';
      break;
    case '/user':
      filePath = 'user.html';
      break;
    default:
      filePath = '404.html';
  }

  try {
    const content = readFileSync(path.join(process.cwd(), 'public', filePath), 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(content);
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).send('Error reading file: ' + error.message);
  }
}