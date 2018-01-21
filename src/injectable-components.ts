import * as React from "react"
import { Container, Token } from "typedi"

interface Identifier {
  (): any
  type?: string
}

export function Identifier() {
  const fn: Identifier = () => null
  fn.type = "Identifier"
  return fn
}

export function jsxInject(type: string | Identifier, props, ...children) {
  let Component

  if ((type as Identifier).type === "Identifier") {
    Component = Container.get(type as Token<any>)
  }

  return React.createElement(Component || type, props, ...children)
}

export function register(value): Identifier {
  const id = Identifier()
  Container.set({ id, value })
  return id
}
