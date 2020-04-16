import React from "react"
import styled from "styled-components"

import Progress from "./Progress"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Footer = ({ nextAction, backAction, second, backDisabled, nextDisabled }) => {
  return (
    <StyledFooter>
      <button onClick={backAction} disabled={backDisabled}>Back</button>
      <Progress second />
      <button onClick={nextAction} disabled={nextDisabled}>Next</button>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #ffffff;
  align-items: center;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
  > button {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    height: 58px;
    font-weight: bold;
    margin: 0 18px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: rgba(33, 43, 54, 0.5);
  }
  >button:disabled {
      opacity: 0.5;
  }
`

export default Footer
