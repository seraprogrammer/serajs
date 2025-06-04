# Understanding `setSignal` and State Management in SeraJS

SeraJS is a modern JavaScript UI framework that provides a reactive way of
building user interfaces. One of its core features is the use of `setSignal` for
state management. Here's a breakdown of how it works using an example.

## What is `setSignal`?

`setSignal` is a reactive state primitive in SeraJS. It returns a tuple:

- The **signal getter function** that gives access to the current state.
- The **signal setter function** to update the state.

```js
const [state, setState] = setSignal(initialValue);
```

## Example Component

Here's a full component illustrating `setSignal` usage:

```js
import { h, Fragment, setSignal } from "serajs";

export default function App() {
  const [count, setCount] = setSignal(0);
  const increment = () => setCount(count() + 1);
  const decrement = () => setCount(count() - 1);

  const [users, setUsers] = setSignal([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);

  return (
    <>
      <p>Count: {() => count()}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        <ul>
          {() =>
            users().map((user) => (
              <li key={user.id}>
                {user.name}{" "}
                <button
                  onClick={() =>
                    setUsers(users().filter((u) => u.id !== user.id))
                  }
                >
                  Delete
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}
```

## How It Works

- **Primitive state (`count`)**:

  - Initialized with `0` using `setSignal(0)`.
  - `count()` accesses the current value.
  - `setCount(newVal)` updates the value and triggers reactive updates.

- **Array state (`users`)**:

  - `setSignal([...])` initializes the list.
  - You can update it by calling `setUsers()` with a new array (e.g., filtered
    list).
  - Reactivity is maintained via `() => users().map(...)`.

## Reactive Rendering

Note that all dynamic content must be wrapped in functions like `() => count()`
or `() => users()`. This ensures SeraJS tracks dependencies and re-renders
efficiently.

## Summary

- `setSignal` is SeraJS's way to manage local state.
- It provides fine-grained reactivity with simple syntax.
- Signals return getter/setter pairs to access and modify state.
- Reactivity requires accessing signals via `()` and wrapping dynamic
  expressions in functions.

This approach allows SeraJS to efficiently track dependencies and update only
the parts of the DOM that change.
