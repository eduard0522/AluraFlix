import { Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import AddVideo from "../src/pages/AddVideo";

function Router() {
  return(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
          <Route path="/agregarvideo" element={<AddVideo />} />
        </Routes>
  )
}
export default Router