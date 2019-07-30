import express from "express";
import compression from "compression";
import {Server} from 'http';
import ssr from "./routes/ssr";

const app = express();
const server = new Server(app);

app.use(compression());
app.use(express.static("public"));
app.use("/", ssr);

const port = process.env.PORT || 3030;


server.listen(port, err => {
  if (err) {
    return console.error(err)
  }

  return console.info(
    `Server running on http://localhost:${port}`
  )
})