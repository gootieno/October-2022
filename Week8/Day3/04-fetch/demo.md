```html
<button>get products</button>
```

```js
const getProducts = async () => {
  const response = await fetch("/products");
  const products = await response.text();

  //do something
  // if list of products
  // iterate and create <div>{product}</div> for each product in products
  // log the products
};
```


```js

const input = document.getElementById('button')

let inputData = ""
input.addEventListener('input', () => {
    inputData = input.value
})
```

```js
const products = ["some product"];

if (req.method === "GET" && req.url === "/products") {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  return res.end(product);
}
```
