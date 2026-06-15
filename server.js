// Minimal dependency-free web service for trying out Willy's Dockerfile deploy path.
const http = require("node:http");
const os = require("node:os");

const PORT = Number(process.env.PORT ?? 3000);

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("ok");
    return;
  }

  res.writeHead(200, { "content-type": "text/plain" });
  res.end(
    [
      "Hello from Willy-Test-Dockerfile 🐋",
      `host: ${os.hostname()}`,
      `GREETING env: ${process.env.GREETING ?? "(unset)"}`,
      `time: ${new Date().toISOString()}`,
    ].join("\n"),
  );
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`willy-test-dockerfile listening on :${PORT}`);
});
