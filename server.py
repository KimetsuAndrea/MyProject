import http.server
import socketserver

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Redirect root requests to login.html
        if self.path == '/':
            self.path = '/login.html'
        return super().do_GET()

PORT = 8000
DIRECTORY = "."

handler = CustomHandler
handler.directory = DIRECTORY

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
