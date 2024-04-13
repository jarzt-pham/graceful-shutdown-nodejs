import * as http from "http";

export const endpoint = (req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the API!");
  } else if (req.url === "/api/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const users = JSON.stringify([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ]);
    setTimeout(() => {
      res.end(users);
    }, 5000);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
};
