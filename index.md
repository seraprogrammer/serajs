# SeraJS

![Logo](/logo.png)

## 📖 Introduction

**SeraJS** is a lightweight, signal-based reactive JavaScript library for
building dynamic user interfaces.

At just **969 bytes gzipped**, it's an incredibly compact reactive UI library
offering powerful reactivity with minimal overhead.

⚡️ _SeraJS focuses on minimalism and performance without sacrificing developer
experience. Now with full IDE support and fragment syntax (`<>...</>`)._

---

## 📆 Bundle Size Comparison (Minified + Gzipped)

| Library    | Size (gzipped) | Build Step Required | Main Purpose          | Key Features                                                                 |
| ---------- | -------------- | ------------------- | --------------------- | ---------------------------------------------------------------------------- |
| **SeraJS** | **969 bytes**  | Optional 😎         | Reactive UI           | Extremely lightweight, signal-based reactivity, `<></>` support, IDE support |
| React      | \~40kb         | Yes                 | UI components         | Virtual DOM, component-based architecture, JSX                               |
| Vue        | \~33kb         | Optional            | Progressive framework | Reactive data binding, component system, single-file components              |
| Solid.js   | \~7kb          | Yes                 | Reactive UI           | No virtual DOM, compiled templates, fine-grained reactivity                  |
| Alpine.js  | \~7.1kb        | No                  | Lightweight framework | Minimal DOM manipulation, declarative syntax, works with existing HTML       |
| Preact     | \~4kb          | Yes                 | React alternative     | API compatible with React, smaller size, faster performance                  |
| htmx       | \~14kb         | No                  | AJAX enhancements     | HTML attributes for AJAX, minimal JavaScript, server-side rendering friendly |

---

## ⚙️ Core Concepts

### 🔄 Signal-Based Reactivity

SeraJS uses a modern **signal-based reactive system** that enables efficient
updates.

#### 🧠 Signals

Self-contained reactive values that notify subscribers when they change.

#### 🌀 Effects

Functions that automatically re-execute when their dependencies (signals)
change.

#### 🧽 Memo

A memoization helper (like React's `useMemo`) to cache computations based on
reactive dependencies.

### 🔬 Fine-Grained Updates

Only the specific DOM elements affected by state changes are updated, enabling
**high performance and minimal re-rendering**.

💡 _SeraJS is intuitive, fast, and easy to integrate into any project — perfect
for modern frontend development._

---

## ❓ Why SeraJS?

SeraJS combines the best ideas from libraries like **React**, **Solid**, and
**Lit** — offering a familiar yet refreshingly minimal approach.

- Ultra-lightweight: **969 bytes gzipped**
- Full fragment (`<>...</>`) support
- Full IDE support for editing and type safety
- Powerful reactivity with or without a build step
- Flexible and easy to integrate into any workflow

---

## 🌱 Basic Example: Hello World

A minimal example using **SeraJS**.

### 📄 App.jsx

```jsx
import { h } from "serajs";

export default function App() {
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}
```

### ✅ Output

```
Hello world
```

---

## 🔧 No Build, No Dependencies Example

A direct-in-browser example using only the CDN version.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sera js 😎</title>
  </head>
  <body>
    <script type="module">
      import { h, setSignal, setEffect } from "//unpkg.com/serajs";

      function Hello() {
        const [count, setCount] = setSignal(0);

        setEffect(() => {
          console.log(count());
        });

        return h(
          "div",
          null,
          h("h1", null, "Hello World!"),
          h("p", { style: { color: "red" } }, "Do you Like Serajs?"),
          h("h1", null, () => `Count: ${count()}`),
          h(
            "button",
            { onclick: () => setCount(count() + 1) },
            "Increase Count"
          )
        );
      }

      const root = document.body;
      root.appendChild(Hello());
    </script>
  </body>
</html>
```

---

Enjoy building reactive UIs with **SeraJS**! 🎉


