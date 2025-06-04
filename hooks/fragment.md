# 🔹 Fragment in SeraJS JSX

📦 **What is `<Fragment>`?** In **SeraJS**, `<Fragment>` is used when you want
to return multiple elements without wrapping them in an extra DOM node like a
`<div>`.

---

## ✅ Example

```jsx
import { h, Fragment } from "serajs";

export default function App() {
  return (
    <Fragment>
      <h1>Hello</h1>
      <p>Welcome to SeraJS</p>
    </Fragment>
  );
}
```

This returns both the `<h1>` and `<p>` without adding an extra parent node in
the DOM.

---

## ✅ Short Syntax Now Supported 🎉

As of the latest version, SeraJS **now supports** JSX fragment shorthand:

```jsx
<>
  <h1>Hello</h1>
  <p>Welcome</p>
</>
```

✅ This will now work correctly and **no longer throws an error**.

You can use either:

- `<Fragment> ... </Fragment>`
- `<> ... </>`

Both are fully supported.

---

## 💡 Why use fragments?

- To avoid unnecessary wrapper `<div>`s
- To return multiple sibling nodes from a component

---

### ✅ Good

```jsx
<Fragment>
  <div>One</div>
  <div>Two</div>
</Fragment>
```

### ✅ Also Good

```jsx
<>
  <div>One</div>
  <div>Two</div>
</>
```

---

SeraJS now supports **both forms** of fragments in JSX! 🧩
