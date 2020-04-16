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

const ListItem = ({ Img, text }) => {
  return (
    <StyledItem>
      <Img />
      <p>{text}</p>
    </StyledItem>
  )
}

const StyledItem = styled.div`
  display: flex;
  background: #0087ff;
  transition: all 0.2s ease;
  padding: 4px 6px;
  padding-right: 10px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  margin-bottom: 4px;
  svg {
      width: 16px;
      height: 16px;
      padding: 4px;
      background: white;
      border-radius: 50%;
      fill: #0087ff;
  }

  @media (max-width: 330px) {
      svg{
    width: 12px;
    height: 12px;
    padding: 4px;
      }
  }
   
  > p {
    font-size: 10px;
    margin:0;
    margin-left: 4px;
    padding: 0;
    text-align: center;
    color: white;
    @media (max-width: 330px) {
      font-size: 8px;
    }
  }
`

export default ListItem
