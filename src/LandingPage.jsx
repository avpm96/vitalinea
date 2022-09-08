import { useState } from "react";

import { NavBar } from "./components/NavBar";
import "./scss/app.scss";
function LandingPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="Mask">
      <NavBar />

      <div className="contenedor">
        <h1>hola</h1>
        <h1>hola</h1>
      </div>
    </div>
  );
}

export default LandingPage;
