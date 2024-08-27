import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
