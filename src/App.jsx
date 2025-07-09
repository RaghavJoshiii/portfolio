import "./App.css";
import "./index.css"
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/section/Home";
import { About } from "./components/section/About";
function App(){
  const[isLoaded, setisLoaded] = useState(false)
  const[menuOpen, setMenuOpen] = useState(false)
  return <>
   { !isLoaded && <LoadingScreen onComplete={()=> setisLoaded(true)}/>}
    <div className={`min-h-screen transition-opacity duration-2000 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
    </div>
  </>
}
export default App;