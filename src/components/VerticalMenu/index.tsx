import { useState } from "react";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="bg-dark w-[10vw]">
      <ul className="text-paragraph">
        <li>Home</li>
        <li>Browse</li>
        <li>Liked songs</li>
      </ul>
    </div>
  );
}

export default App;
