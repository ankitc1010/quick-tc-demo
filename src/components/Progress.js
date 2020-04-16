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

const Progress = ({ second }) => {
  return (
    <StyledProgress>
      <div className="container">
        <ul className="progressbar">
          <li className="active"></li>
          <li className={`${second && "active"}`}></li>
        </ul>
      </div>
    </StyledProgress>
  )
}

const StyledProgress = styled.div`
  flex: 1;
  .container {
    width: 40px;
    margin: auto;
  }
  .progressbar {
    padding: 0;
    margin: auto;
  }
  .progressbar li {
    list-style: none;
    display: inline-block;
    width: 16px;
    height: 4px;
    position: relative;
    text-align: center;
    cursor: pointer;
    padding: 0 2px;
    border-radius: 100px;
  }
  .progressbar li:before {
    content: " ";
    counter-increment: step;
    height: 4px;
    line-height: 4px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    display: block;
    text-align: center;
    margin: 0 auto 4px auto;
    background-color: rgba(0, 0, 0, 0.12);
  }

  .progressbar li:first-child:after {
    content: none;
  }
  .progressbar li.active {
    color: #0087ff;
  }
  .progressbar li.active:before {
    border-color: #0087ff;
    background: #0087ff;
  }
  .progressbar li.active + li:after {
    background-color: #0087ff;
  }
`

export default Progress
