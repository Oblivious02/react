import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Shop";
import Product from "./Product";
import { Temp } from "./Temp";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
