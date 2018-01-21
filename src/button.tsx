import styled from "styled-components"

const MaterialButton = styled.button`
  color: #fff;
  background: #ff4081;
  height: 2rem;
  font-size: 15px;
  line-height: 2rem;
  padding: 0 1.2rem;
  border-radius: 0.2rem;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
  position: relative;
  display: inline-block;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  border: 0;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`

MaterialButton.displayName = "MaterialButton"

export default MaterialButton
