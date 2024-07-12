import { ContextProviderVideos } from "../src/components/Context/ContextVideos";
import Router from "../Router/routes"
import useWindowDimensions from "../src/Hooks/useWindowDimensions";
import HeaderMovil from "../src/components/HeaderMovil";
import Header from "../src/components/Header";
import NavMovil from "../src/components/Nav/NavMovil";
import Footer from "../src/components/Footer";


function App() {

  const{ width } = useWindowDimensions()

  return (
        <ContextProviderVideos>
          {width < 620 ? <HeaderMovil /> : <Header />}
            <Router>
              
            </Router>

          { width < 620 ? <NavMovil /> : < Footer />} 
          </ContextProviderVideos>
  )
}

export default App
