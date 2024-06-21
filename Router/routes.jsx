import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";

function Router({children}) {
  return(
    <BrowserRouter >
      {children}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router