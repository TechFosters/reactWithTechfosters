# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### Understanding components
![662E23B9-FA45-462F-8B20-5BE90BAD31EC](https://github.com/user-attachments/assets/f51ad315-3685-423f-80ef-d58b5bdb8376)

# React Props Explained

## ❓ What are Props in React?

**Props** (short for **properties**) are immutable objects that are passed from one component to another in React, typically from a **parent to a child**. They are used to pass **data**, **callbacks**, and **configuration** into components, making them **dynamic** and **reusable**.

### ✅ Simple Definition

> **Props are nothing but the object passed as a parameter to a component.**

They allow components to receive input and behave differently based on that input — just like function parameters in JavaScript.

### 📦 Example:

```jsx
// Button.jsx
const Button = ({ value, color }) => {
  return (
    <button style={{ backgroundColor: color }}>
      {value}
    </button>
  );
};

export default Button;

// CounterPage.jsx
import Button from './Button';

const CounterPage = () => {
  return (
    <div>
      <Button value="-" color="cyan" />
      <Button value="+" color="orange" />
    </div>
  );
};

