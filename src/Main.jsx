import React, { useContext } from "react";
import AppTheme from './Color';
import CounterContext from "./countercontext";
const Main = () =>{
    const theme = useContext(CounterContext)[0];
    const currentTheme = AppTheme[theme];
    return(
        <main style = {{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
        }}>
            <h1>Heading 1</h1>
              <p>This is a paragraph</p>
              <button>this is a button</button>
        </main>
    )
}

export default Main;