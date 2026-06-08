const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'font/eot'
};

const server = http.createServer((req, res) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    // Parse the URL
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;

    // Handle root /
    if (pathname === '/') {
        const isRsc = req.headers['rsc'] || req.headers['next-router-state-tree'] || parsedUrl.query['_rsc'];
        if (isRsc) {
            pathname = '/index.html';
        } else {
            // Otherwise serve the HTML boot shell
            pathname = '/contacts.html';
        }
    }

    // Determine if it's a Next.js route request (without extension)
    const ext = path.extname(pathname);
    if (!ext) {
        // It's a route like /crm, /analytics, /todo, etc.
        const isRsc = req.headers['rsc'] || req.headers['next-router-state-tree'] || parsedUrl.query['_rsc'] || (req.headers['accept'] && req.headers['accept'].includes('text/x-component'));
        
        if (isRsc) {
            const possibleRscFile = pathname + '.html';
            if (fs.existsSync(path.join(PUBLIC_DIR, possibleRscFile))) {
                pathname = possibleRscFile;
            }
        } else {
            // Direct browser request for page: boot with the HTML shell
            pathname = '/contacts.html';
        }
    }

    // Resolve file path
    let filePath = path.join(PUBLIC_DIR, pathname);

    // Check if file exists
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            console.log(`File not found: ${filePath}. Falling back to contacts.html`);
            filePath = path.join(PUBLIC_DIR, 'contacts.html');
        }

        // Determine content type
        const fileExt = path.extname(filePath);
        const contentType = MIME_TYPES[fileExt] || 'application/octet-stream';

        // Read and serve file
        fs.readFile(filePath, (error, content) => {
            if (error) {
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Next.js Static Mirror Server running at http://localhost:${PORT}/`);
    console.log(`Main Entrypoint: http://localhost:${PORT}/contacts.html`);
    console.log(`Standalone Mockup: http://localhost:${PORT}/contacts-standalone.html`);
});
