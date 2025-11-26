const https = require("https");

const options = {
  hostname: "localhost",
  port: 3001,
  method: "GET",

  // Permitimos certificado autofirmado SOLO para pruebas
  rejectUnauthorized: false,
};

const req = https.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    console.log("Respuesta del servidor:", data);
  });
});

req.on("error", (error) => {
  console.error("Error:", error);
});

req.end();
