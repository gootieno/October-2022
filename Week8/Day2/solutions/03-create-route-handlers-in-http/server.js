const http = require("http");

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&") // [affiliate=nasa,query=Mars+Rover%21]
        .map((keyValuePair) => keyValuePair.split("=")) // [[affiliate,nasa],[query,Mars+Rover%21]]
        .map(([key, value]) => [key, value.replace(/\+/g, " ")]) // [[affiliate,nasa],[query,Mars Rover%21]]
        .map(([key, value]) => [key, decodeURIComponent(value)]) // [[affiliate,nasa],[query,Mars Rover!]]
        .reduce((acc, [key, value]) => {
          // [[affiliate,nasa],[query,Mars Rover!]]
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
      /*
      {affiliate: nasa, query: Mars Rover!}
        */
    }
    // Do not edit above this line

    // define route handlers here
    if (req.method === "GET" && req.url === "/") {
      const resBody = "Dog Club";

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(resBody);
    }

    if (req.method === "GET" && req.url === "/dogs") {
      const resBody = "Dog Index";
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(resBody);
    }

    if (req.method === "POST" && req.url === "/dogs") {
      res.statusCode = 302;

      const dogId = getNewDogId();
      res.setHeader("Location", `/dogs/${dogId}`);
      return res.end();
    }

    if (req.method === "GET" && req.url.startsWith("/dogs")) {
      const urlParts = req.url.split("/");

      console.log("url parts ", urlParts);
      if (urlParts[urlParts.length - 1] !== "new") {
        const dogId = urlParts[urlParts.length - 1];
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        return res.end(`Dog details for dogId: ${dogId}`);
      }
    }
    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    return res.end("No matching route handler found for this endpoint");
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
