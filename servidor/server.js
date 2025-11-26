const https = require("https");
const fs = require("fs");
const path = require("path");

const options = {
  key: fs.readFileSync(path.join(__dirname, "../certificados/key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "../certificados/cert.pem")),
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ mensaje: "Conexión segura HTTPS establecida ⚡" }));
});

server.listen(3001, () => {
  console.log("Servidor HTTPS corriendo en:");
  console.log("  👉 https://localhost:3001");
});
