import * as React from "react"
import { render } from "react-dom"
import { injectGlobal } from "styled-components"
import App from "./app"
import { jsxInject } from "./injectable-components"

injectGlobal`
  body {
    font-size: 14px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    padding-top: 8rem;
    background: #f1f1f1;  
  }
  * {
    box-sizing: border-box;
  }
`

render(<App />,
  document.getElementById("app")
)
