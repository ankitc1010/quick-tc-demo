import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Grid = styled.div`
  max-width: 369px;
  margin: auto;
  > div {
    display: flex;
    justify-content: ${({list}) => list ? "none" : "space-between"};
    flex-wrap: wrap;
  }
`

export default Grid
