import React, {Component} from 'react';
import './App.css';
import logo from './Images/bg.png';
import slogan from './Images/slogan.png';
import astro from './Images/astro.png';
import { FacebookProvider, Comments } from 'react-facebook';
import {Helmet} from 'react-helmet';
import { Divider, Tab } from 'semantic-ui-react'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon
  
  } from "react-share";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
import 'react-tabs/style/react-tabs.css';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ReactGA from 'react-ga';
import Typography from '@material-ui/core/Typography';
import  ReactCardCarousel from 'react-card-carousel';

interface Props {
  currentView: string,
  token: string
}

const App: React.FC<Props> = props => {

  ReactGA.initialize('UA-163328180-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

    return(
      <div style={{width:'100%', padding:20}}>
        <div style={{marginLeft:10, float:'left', width:'50%', display:'flex',  justifyContent: 'left', alignItems: 'left', marginTop:10 }}>
          SEXTA FEIRA
        </div> 
        <div style={{ float:'right', width:'10%', display:'flex', justifyContent: 'right', alignItems: 'right', marginTop:10 }}>
          <span style={{cursor:'pointer', display:'block', marginRight:10}}>Inicio</span>
          <span style={{cursor:'pointer', display:'block', marginRight:10}}>Noticias</span>
          <span style={{cursor:'pointer', display:'block', marginRight:10}}>Interactivo</span>
        </div> 
          <div style={{marginLeft:10, float:'left', width:'100%', display:'flex',  justifyContent: 'left', alignItems: 'left', marginTop:10 }}>
            <span style={share}>Compartir</span>
          </div>
          <div style={{marginLeft:10, float:'left', width:'100%', display:'flex',  justifyContent: 'left', alignItems: 'left', marginTop:10 }}>
          <FacebookShareButton
            url="https://sextafeirabu.com"
            quote="Opa, sextafeira esta en vivo"
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>     
          <TwitterShareButton
            url="https://sextafeirabu.com"
            title="Opa, sextafeira esta en vivo"
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>         
          <WhatsappShareButton
            url="https://sextafeirabu.com"
            title="Opa, sextafeira esta en vivo"
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>         
        </div> 
        <div style={{marginLeft:10, float:'left', width:'50%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:10 }}>
          <span style={subtitleStyle}>Por Siempre VIERNES</span>
        </div>
        <div style={{marginLeft:10, float:'right', width:'15%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:150 }}>
        <iframe height='170px' seamless src='//www.caster.fm/widgets/em_player.php?jsinit=true&uid=517083&t=blue&c=&embed=true'></iframe>
        </div>
        <div style={{marginLeft:10, float:'left', width:'100%', display:'flex',  justifyContent: 'left', alignItems: 'left', marginTop:10 }}>
          <div style={{marginLeft:10, float:'left', width:'15%', display:'flex',  justifyContent: 'left', alignItems: 'left', marginTop:10 }}>
            <span style={share}>Una radio tranqui, sin horarios.</span>
            </div>
        </div>
        <div style={{marginLeft:10, float:'left', width:'100%', display:'flex',  justifyContent: 'left', alignItems: 'left' }}>
          <div style={{marginLeft:10, float:'left', width:'15%', display:'flex',  justifyContent: 'left', alignItems: 'left'}}>
            <span style={share}>Acá encontras de todo... a veces.</span>
            </div>
        </div>
      </div>
    );
  }

export default App;

var card = {
  backgroundColor: '#FFFFFF', 
  alignItems:'center',
}
var cardMobile = {
  marginLeft:20,
  marginRight:20,
  backgroundColor: '#FFFFFF', 
  alignItems:'center',
  width:'87%'
}
var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "30%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '30%',
}

var compartir = {
  fontFamily:'saffran, sans-serif',
  fontWeight: '800',
  fontStyle: 'normal'
}

var subtitleStyle = {
  fontFamily: 'Suez One, serif',
  fontSize: 'calc(10em + 1vw)',
}

var share = {
  fontFamily: 'Barlow, sans-serif',
  fontSize: 20
}
