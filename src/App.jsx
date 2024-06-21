import { ContextProviderVideos } from "../src/components/Context/ContextVideos";
import Router from "../Router/routes"
import useWindowDimensions from "./Hooks/useWindowDimensions";
import HeaderMovil from "./components/HeaderMovil";
function App() {
  const{ width } = useWindowDimensions()
  return (
    <ContextProviderVideos>
      {width < 620 && <HeaderMovil />}
      <Router />
    </ContextProviderVideos>
  )
}

export default App
