import React,{useContext} from "react";
import countercontext from "./countercontext"

const themeTogglerStyle = {
    cursor: "pointer"
}

const ThemeToggler = () =>{

    const [themeMode, setThemeMode] = useContext(countercontext);

    return(
        <div style={themeTogglerStyle} onClick = {() =>{setThemeMode(themeMode === "light"? "dark": "light")}}>
            <span title = "switch theme">
             {themeMode === "light" ? "🌙" : "☀️"}
            </span>
        </div>
    )
}

export default ThemeToggler;