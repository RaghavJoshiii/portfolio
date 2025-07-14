import { useEffect, useState } from "react"
import {Sun, Moon} from "lucide-react"
import { cn } from "../lib/utils"
export const ThemeToggle= ()=>{
    const[isDark, setDark] = useState(false)
    useEffect(()=>{
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme==="dark"){
            setDark(true)
            document.documentElement.classList.add("dark");
        }else{
            setDark(false)
            document.documentElement.classList.remove("dark");
        }
    },[])
    const toggleTheme = ()=>{
        if(isDark){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setDark(false)
        }  else{ 
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setDark(true);
        }
    }
  return <button onClick={toggleTheme} className={cn("p-2 rounded-full transition-colors duration-300",
    "focus:outline-hidden cursor-pointer"
  )}>
   {!isDark? <Sun className="h-6 w-6 text-yellow-300"/>
   : <Moon className="h-6 w-6 text-blue-900"/>}
  </button>
}