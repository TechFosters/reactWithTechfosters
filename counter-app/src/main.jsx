import { createRoot } from "react-dom/client"
import App from "./App"
const div = document.getElementById('root') //accessing DOM
const root =createRoot(div)
root.render(<App/>)

