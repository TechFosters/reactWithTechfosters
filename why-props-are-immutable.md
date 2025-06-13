# 🔐 Why Are Props Immutable in React?

## 💭 Pehle samjho — props kya hote hain?

React mein jab parent component child ko **data bhejta hai**, usse hum **props** (short for *properties*) kehte hain.

```jsx
<Button value="Click Me" color="red" />
```

Yahan `value` aur `color` dono **props** hain jo `Button` component ko mil rahe hain.

---

## 🧠 Props Immutable Kyu Hote Hain?

> **"Immutable" ka matlab hota hai — jisko aap change nahi kar sakte.**  
> React me props **read-only** hote hain. Aap unhe sirf **use** kar sakte ho, **modify** nahi.

---

## 🔍 Reason 1: One-Way Data Flow (Top to Bottom)

React me data **parent se child** jaata hai — upar se neeche.

```jsx
<App>
  <Counter value={5} />
</App>
```

Agar child component `value` ko badal dega, toh data ka flow toot jaayega.

❌ Child → Parent  
✅ Parent → Child ✅

> **React chaahta hai ki data ka control sirf parent ke paas ho.**

---

## 🔍 Reason 2: Predictable UI

Jab props change nahi ho sakte, tab component ka behavior hamesha **same input → same output** hota hai.

✅ Easy to debug  
✅ UI ka behavior fix rehta hai  
✅ Bugs ka chance kam

---

## 🔍 Reason 3: Reusability

```jsx
<Button color="blue" />
<Button color="blue" />
```

Agar `Button` component andar se `color` change karne lagega, toh reusability ka koi fayda nahi.

> Reusable component tabhi sahi se kaam karega jab uska behavior **fixed ho based on props**.

---

## 🔍 Reason 4: Functional Programming Style

React mostly **functional programming** ko follow karta hai:

```js
function add(a, b) {
  return a + b;
}
```

Yahan `a` aur `b` ko hum change nahi karte — bas input dete hain aur output lete hain.

Waise hi React me:

```jsx
<Button value="Click" />
```

→ Props = input  
→ JSX = output

Props ko mutate (change) karna is rule ko todta hai ❌

---

## ⚠️ What Happens If You Try To Change Props?

```jsx
const Button = (props) => {
  props.color = "green"; // ❌ Galat hai!
  return <button style={{ backgroundColor: props.color }}>{props.value}</button>;
};
```

Yeh approach galat hai. React expect karta hai ki aap props ko **as-it-is** use karo, na ki unko modify karo.

---

## ✅ Sahi Tarika: Parent se control karo

Agar aapko value update karni hai, toh state parent me rakho aur naya prop pass karo.

```jsx
const App = () => {
  const [color, setColor] = useState('blue');

  return <Button color={color} />;
};
```

---

## 🧠 Interview-Ready Line:

> “Props are immutable in React to maintain one-way data flow, predictable UI behavior, component reusability, and to align with functional programming principles.”

---

## 📦 Summary Table

| 🔍 Reason              | ✅ Explanation                                              |
|------------------------|-------------------------------------------------------------|
| One-way Data Flow      | Parent → Child data flow maintain hota hai                 |
| Predictable UI         | Same props → same output → easier debugging                |
| Reusability            | Components har jagah same behavior dikhate hain            |
| Functional Programming | Input (props) ko mutate nahi karte, sirf use karte hain   |

---
