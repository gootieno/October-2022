/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here

/*
Fetch returns the response body to us as a promise, which we then use .then chaining
to be able to key into and console.log the status code
*/
// .then chaining
fetch('/products')
  .then(response => console.log(response.status))

// async function
async function getStatus() {
  let response = await fetch('/products');
  console.log(response.status);
}

// async iife
(async function () {
  const res = await fetch("/products");
  console.log(res.status);
})();

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here

/*
Fetch returns the response body to us as a promise, which we then use .then chaining
to be able to key into and console.log the status code
*/
// .then chaining
fetch('/products')
  .then(response => console.log(response.ok))

// async function
async function getSuccess() {
  let response = await fetch('/products');
  console.log(response.ok);
}

// async iife
(async function () {
  const res = await fetch("/products");
  console.log(res.ok);
})();
/* =================== 3. Print the Content-Type Header =================== */

// Your code here

// The response body has a nested object called headers, which has a function "get" to get any of the headers you're looking for
// .then chaining
fetch('/products')
  .then(response => console.log(response.headers.get('Content-Type')))

// async function
async function getHeaders() {
  let response = await fetch('/products');
  console.log(response.headers.get('Content-Type'));
}

// async iife
(async function () {
  const res = await fetch("/products");
  res.headers.get('Content-Type');
})();

/* ============== 4. Print the body of the response as text =============== */

// Your code here

/*
Same as above, but .text() also returns a promise, so we need to use another .then to resolve .text()'s promise
*/

// .then chaining
fetch('/products')
  .then(res => res.text())
  .then(text => console.log(text))

// async function
async function getBody() {
  let response = await fetch('/products');
  let responseBody = await response.text();
  console.log(responseBody)
}
// async iife
(async function () {
  const res = await fetch("/products");
  const resBody = await res.text();
  console.log(resBody);
})();



// EXTRA

fetch('/products')
  .then(res => console.log({
    status: res.status,
    success: res.ok,
    headers: res.headers.get('Content-Type')
  }))
