import React, {useState} from "react"

import Layout from "../components/layout"
import Grid from "../components/Grid"
import GridItem from "../components/GridItem"
import Heading from "../components/Heading"
import Footer from "../components/Footer"

import SEO from "../components/seo"

import shopping from "../images/Category-shopping.svg"
import medical from "../images/Category-med.svg"
import atm from "../images/Category-finance.svg"

import plumber from "../images/Category-localservices.svg"
import transport from "../images/Category-transport.svg"
import hospital from "../images/Category-govt.svg"

import restaurant from "../images/Category-restaurant.svg"
import banking from "../images/Category-property.svg"

const IndexPage = ({navigate}) => {
  const [selected, setSelected] = useState({});
  const isActive = (type) => selected[type]
  const handleClick = (type) => () => setSelected({...selected, [type]: !selected[type]})
  const nextAction = () => navigate(`/address?items=${Object.keys(selected).reduce((acc, item) => `${acc}${item},`, "")}`)
  return (
    <Layout>
      <SEO title="Home" />
      <Heading>What services are you looking for?</Heading>
      <Grid>
        <div>
          <GridItem Img={shopping} text="Convenience store" onClick={handleClick("shopping")} active={isActive("shopping")} />
          <GridItem Img={medical} text="Medical Stores" onClick={handleClick("medical")} active={isActive("medical")} />
          <GridItem Img={atm} text="ATM" onClick={handleClick("atm")} active={isActive("atm")}/>
        </div>
        <div>
          <GridItem Img={plumber} text="Plumber Services" onClick={handleClick("plumber")} active={isActive("plumber")} />
          <GridItem Img={transport} text="Cabs services" onClick={handleClick("cab")} active={isActive("cab")} />
          <GridItem Img={hospital} text="Emergency Hospital" onClick={handleClick("hospital")} active={isActive("hospital")}/>
        </div>
        <div> 
          <GridItem Img={restaurant} text="Food delivery" onClick={handleClick("food")} active={isActive("food")} />
          <GridItem Img={banking} text="Banking Services" onClick={handleClick("banking")} active={isActive("banking")} />
          <GridItem Img={plumber} text="Electricians" onClick={handleClick("electrician")} active={isActive("electrician")} />
        </div>
      </Grid>
      <Footer backDisabled nextDisabled={!Object.keys(selected).length} nextAction={nextAction} />
    </Layout>
  );
}

export default IndexPage
