import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pay from "./components/Pay";
import Success from "./components/Success";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/pay" element={<Pay />}></Route>
          <Route path="/success" element={<Success />}></Route>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
