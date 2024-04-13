import { endpoint } from "./endpoint";
import * as http from "http";

const PORT = process.env.PORT || 3000;

export const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  endpoint(req, res);
});

export const startServer = (server: http.Server) => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
