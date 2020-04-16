import React, {useState} from "react"
import TextField, {HelperText, Input} from '@material/react-text-field';
import styled from 'styled-components'

import Layout from "../components/layout"
import Grid from "../components/Grid"
import ListItem from "../components/ListItem"
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

import '@material/react-text-field/dist/text-field.css';

const imgRepository = {
    shopping: {
        Img: shopping,
        text: "Convenience store"
    },
    medical: {
        Img: medical,
        text: "Medical Stores"
    },
    atm: {
        Img: atm,
        text: "ATM"
    },
    plumber: {
        Img: plumber,
        text: "Plumber Services"
    },
    cab: {
        Img: transport,
        text: "Cab Services"
    },
    hospital: {
        Img: hospital,
        text: "Emergency Hospital"
    },
    food: {
        Img: restaurant,
        text: "Food delivery"
    },
    banking: {
        Img: banking,
        text: "Banking Services"
    },
    electrician: {
        Img: plumber,
        text: "Electricians"
    },
}

const IndexPage = ({navigate, location: {search}}) => {
  const selected = search.substr(7).slice(0, -1).split(',');
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <Layout>
      <SEO title="Home" />
      <Heading>Please provide us your contact details</Heading>
      <Grid list>
        <div>
          {selected.map(item => <ListItem item={imgRepository[item]} key={item} />)}
        </div>
      </Grid>
      <Form>
          <h2>Tell us where to reach out to you?</h2>
      <TextField
          label="Phone Number"
          outlined
          floatingLabelClassName="blue-label"
          notchedOutlineClassName="outline"
          onTrailingIconSelect={() => this.setState({value: ''})}
        ><Input
           value={phone}
           type="number"
           onChange={(e) => setPhone(e.currentTarget.value)} />
        </TextField>
      <TextField
          label="Address"
          outlined
          textarea
          floatingLabelClassName="blue-label"
          notchedOutlineClassName="outline"
          onTrailingIconSelect={() => this.setState({value: ''})}
        ><Input
           value={address}
           onChange={(e) => setAddress(e.currentTarget.value)} />
        </TextField>
        </Form>
      <Footer second backAction={() => navigate('/')} nextAction={() => navigate('/thankyou')} />
    </Layout>
  );
}

const Form = styled.div`
    >div {
        width: 100%;
        margin-bottom: 20px;
    }
    h2 {
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
font-size: 13px;
line-height: 123.3%;
/* identical to box height, or 15px */
margin-bottom: 30px;


/* Light/Text/Secondary */

color: rgba(33, 43, 54, 0.75);
    }
    .blue-label {
        color: #0087FF !important;
        letter-spacing: 0.15px;
    }
    .outline {
        border-color: #0087FF !important;
        caret-color: #0087FF !important;
    }
    .mdc-text-field--focused {
        border-color: #0087FF !important;
        
    }
    .mdc-notched-outline {
        border-color: #0087FF !important;

    }
    .mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: #0087ff !important;
 border-width: 2px !important;}
  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
    border-color: #0087ff !important;
    border-width: 2px !important;
  }
 `

export default IndexPage
