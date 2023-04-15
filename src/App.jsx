import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App()
{
   const [darkMode, toggleDarkMode] = useState(false);

   function toggle(status)
   {
      toggleDarkMode(status)
   }

   return (
      <div className="container">
         <Navbar darkMode={darkMode} toggle={toggle}/>
         <Main darkMode={darkMode}/>
      </div>
   );
}