# 📄 Problem 1: Sibling Components Can't Communicate Directly

### ❓ Problem:
In our React app, we have a parent component `CounterPage.jsx` with two children:
- `Button.jsx` – where the button click happens
- `Message.jsx` – which displays the message

These components are **siblings**, so they can't talk directly to each other.

### ✅ Solution:
We implement **two-way communication** using the parent:
- Parent (`CounterPage.jsx`) defines a function to update state
- This function is passed to `Button` via props
- When button is clicked, this function is called
- State is updated in the parent, and new data is passed to `Message` via props

### 📌 Code Sketch:
```jsx
// CounterPage.jsx
const CounterPage = () => {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  return (
    <>
      <Button onClick={handleClick} />
      <Message text={message} />
    </>
  );
};
```
