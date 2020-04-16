import React, {useState} from "react"
import styled from 'styled-components'

import Layout from "../components/layout"


import Heading from "../components/Heading"


import SEO from "../components/seo"


import NotFound from "../images/buildings.svg"




const Thankyou = ({navigate, location: {search}}) => {

  return (
    <Layout>
      <SEO title="Home" />
      <StyledThankyou>
        <h3>Your request has been <span>successfully created!</span></h3>
        <div>
        <NotFound />

        </div>
        </StyledThankyou>
    </Layout>
  );
}

const StyledThankyou = styled.div`
  h3 {
    font-size: 15px;
    line-height: 20px;
    /* identical to box height, or 125% */
    
    text-align: center;
    letter-spacing: 0.444444px;
    
    /* Light/Ink/Secondary */
    margin-top: 72px;
    
    color: rgba(33, 43, 54, 0.75);
    > span {
        font-size: 24px;
        display: block;
        
line-height: 28px;
text-align: center;

/* Light/Brand/Blue */

color: #0087FF;
    }
  }
   >div {
       width: 100%;
       overflow: hidden;
       >svg {
        width: 100%;
    height: 465px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0px;
    right: 0;
       }
       >div {
           position: absolute;
           bottom: 0;
           left: 20px;
           right: 20px;
           background: white;
           -webkit-box-shadow: 0px -1px 5px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 0px -1px 5px -3px rgba(0,0,0,0.75);
box-shadow: 0px -1px 5px -3px rgba(0,0,0,0.75);
        ul {
            padding: 0 10px;
            li {
                >img {
                    width: 20px;
                    margin-right: 4px;
                }
                font-weight: 500;
font-size: 14px;
line-height: 14px;
/* identical to box height, or 100% */

display: flex;
align-items: center;
letter-spacing: 0.444444px;

/* Light/Text/Secondary */

color: rgba(33, 43, 54, 0.75);
            }
        }
       }
   }
 `

export default Thankyou
