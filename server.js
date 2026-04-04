const { createServer } = require("http");
const next = require("next");

const app = next({ dev: false, conf: { /* your config */ } });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(4173, (err) => {
    if (err) throw err;
    console.log("Server running on http://localhost:4173");
  });
});
