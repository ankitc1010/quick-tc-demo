import React from "react"
import styled from "styled-components"

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

const GridItem = ({ Img, text, onClick, active }) => {
  return (
    <StyledItem onClick={onClick} active={active}>
      <div>
        <Img />
      </div>
      <p>{text}</p>
    </StyledItem>
  )
}

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    padding: 21px;
    background: ${({active}) => active ? "#0087ff" : "#fff"};
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    svg {
      width: 32px;
      height: 32px;
      padding: 8px;
      fill: ${({active}) => active ? "#fff" : "#0087ff"};
    }
    @media (max-width: 330px) {
      padding: 10px;
    }
  }
  > p {
    font-size: 12px;
    line-height: 14px;

    text-align: center;
    letter-spacing: 0.25px;
    max-width: 90px;
    color: rgba(33, 43, 54, 0.75);
    @media (max-width: 330px) {
      max-width: 70px;
      font-size: 11px;
    }
  }
`

export default GridItem
