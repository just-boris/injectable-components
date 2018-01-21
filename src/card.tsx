/** @jsx jsxInject */
import styled from "styled-components"
import { jsxInject, register } from "./injectable-components"

export const CardRoot = register(styled.div`
  width: 300px;
  padding: 1.5rem;
  background: #fff;
  text-align: center;
  margin: 0 auto;
`)

export const CardImage = register(styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
`)

export const CardTitle = register(styled.h2`
  font-size: 24px;
  margin: 0 0 1rem;
`)

export const CardButton = register(styled.button``)

export default function Card(props: PanelProps) {
  return (
    <CardRoot>
      <CardTitle>{props.title}</CardTitle>
      <CardImage src={props.image} alt="Product image" />
      <CardButton>{props.buttonText}</CardButton>
    </CardRoot>
  )
}

interface PanelProps {
  title: string
  image: string
  buttonText: string
}
