/** @jsx jsxInject */
import { Container } from "typedi"
import {SFC} from "react"
import styled from "styled-components"
import { jsxInject } from "./injectable-components"
import MaterialButton from "./button"
import Card, { CardButton, CardRoot } from "./card"
import * as pic from "./pic.jpg"

// replace plain button with custom React component
Container.set(CardButton, MaterialButton)

// reuse existing element, but provide additional styling
const exRoot: SFC = Container.get(CardRoot)
Container.set(
  CardRoot,
  styled(exRoot)`
    box-shadow: 1px 1px 3px #a2a2a2;
  `
)

export default function App() {
  return <Card title="Get a cat!" image={pic} buttonText="See more" />
}
