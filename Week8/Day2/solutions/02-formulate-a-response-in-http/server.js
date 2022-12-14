// Your code here
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("request object ", request);

  const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  return response.end(responseBody);
});

const port = 5000;

server.listen(port, () => console.log(`listening on port...${5000}`));
