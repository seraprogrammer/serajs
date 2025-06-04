# Fetching Data in SeraJS - Full Breakdown

This document explains how data fetching works in **SeraJS**, using the given
code snippet as an example. We will go through all parts of the code, including
the small details.

## 📦 Imports

```js
import { h, setSignal, setEffect } from "serajs";
```

- `h`: This is the hyperscript function, similar to JSX in React. It's used to
  create UI elements.
- `setSignal`: Creates reactive state variables.
- `setEffect`: Registers a side effect that runs when dependencies change. It's
  similar to `useEffect` in React.

---

## 🚀 Component Definition

```js
export default function App() {
```

This defines the default exported component named `App`, which SeraJS will
render as the main UI.

---

## 🔁 Creating Reactive State

```js
const [users, setUsers] = setSignal([]);
```

- `users` is a reactive signal holding the user data (initially an empty array).
- `setUsers` is a function to update the `users` signal.
- `setSignal([])` initializes the signal with an empty list.

---

## ⚡ Data Fetching Using setEffect

```js
setEffect(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  setUsers(await res.json());
  console.log("Users fetched:", users());
});
```

- `setEffect` registers an effect that runs **once**, right after the component
  is rendered.
- Inside it:

  - `fetch(...)`: Calls a fake API to retrieve user data.
  - `await res.json()`: Parses the JSON response.
  - `setUsers(...)`: Updates the signal with the fetched data.
  - `console.log(...)`: Logs the user data **after fetch but before it's
    reactive**. Note: due to the async nature, `users()` here might still return
    the initial empty array unless you re-observe after state update.

---

## 🖼️ Rendering the UI

```js
return (
  <div>
    <h1>Users</h1>
    {() =>
      users().map((u) => <p key={u.id}>{u.name}</p>) || <p>No users found</p>
    }
  </div>
);
```

- The component returns a virtual DOM structure:

  - `<h1>Users</h1>`: A simple header.
  - The block `{() => ...}`: This is a reactive expression.

    - It maps over `users()` to create `<p>` elements for each user name.
    - If `users()` is empty, it falls back to rendering `<p>No users found</p>`.

### 🔍 Important Notes:

- `users()` is called like a function because it's a signal.
- The entire map is wrapped in a function `() => ...` to make it reactive.

---

## 🧠 Summary: How Data Fetching Works in SeraJS

1. **Initialize state** with `setSignal([])`.
2. **Use `setEffect`** to run a side-effect like `fetch()`.
3. **Update signal** using `setUsers()` after the async call.
4. **Reactively render UI** by using the signal inside a reactive wrapper.

---

## ✅ Final Thoughts

SeraJS combines the simplicity of signals with a JSX-like syntax to make
reactivity straightforward. It makes it easy to write reactive components with
fine-grained control without needing a virtual DOM diffing system like React.

This example showed how to fetch data on component mount and render it
reactively with just a few lines of code!

## Fetch Example

```jsx
import { h, setSignal, setEffect } from "serajs";

export default function App() {
  const [users, setUsers] = setSignal([]);

  setEffect(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers(await res.json());
    console.log("Users fetched:", users());
  });

  return (
    <div>
      <h1>Users</h1>
      {() =>
        users().map((u) => <p key={u.id}>{u.name}</p>) || <p>No users found</p>
      }
    </div>
  );
}
```
