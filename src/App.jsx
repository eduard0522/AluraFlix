import { ContextProviderVideos } from "../src/components/Context/ContextVideos";
import Router from "../Router/routes"
import useWindowDimensions from "./Hooks/useWindowDimensions";
import HeaderMovil from "./components/HeaderMovil";
import Header from "./components/Header";
import NavMovil from "./components/Nav/NavMovil";
import Footer from "./components/Footer";

function App() {
  const{ width } = useWindowDimensions()
  return (
    <>
        <ContextProviderVideos>
          <Router>
              {width < 620 ? <HeaderMovil /> : <Header />}
              
          </Router>
        </ContextProviderVideos>
        { width < 620 ? <NavMovil /> : < Footer />} 
    </>
  )
}

export default App
