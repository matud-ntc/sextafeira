import React, {Component, useRef} from 'react';
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
import wave from './Images/wave.svg'
import ScrollToTop from './components/ScrollToTop';

interface Props {
  currentView: string,
  token: string
}

const App: React.FC<Props> = props => {

  ReactGA.initialize('UA-163328180-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
  // General scroll to element function

  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  
  return(
    <div style={{width:'100%', overflowX: 'hidden', position:'relative'}}>
      <div style={{width:'100%', padding:40, marginBottom:280}}>
        <div style={{marginLeft:10, float:'left', width:'65%',display:'flex',  justifyContent: 'left', alignItems: 'left', marginTop:10 }}>
          SEXTA FEIRA
        </div> 
        <div style={rightButton}>
          <span style={{cursor:'pointer', display:'block', marginRight:10}}>Inicio</span>
        </div> 
        <div style={rightButton2}>
          <span style={{cursor:'pointer', display:'block', marginRight:10}} onClick={executeScroll}>Comentarios</span>
        </div>
          <div style={rightButton3}>
          <span style={{cursor:'pointer', display:'block', marginRight:10}}>Noticias</span>
        </div> 
        <div style={rightButton4}>
          <span style={{cursor:'pointer', display:'block', marginRight:10}}>Interactivo</span>
        </div> 
        <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center'}}>
            <img src={wave}></img>           
        </div>
        <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:10 }}>
            <span style={subtitleStyle}>Por Siempre</span>
        </div>
        <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:10 }}>
            <span style={subtitleStyle}>VIERNES</span>
        </div>
        <div style={{ width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:60 }}>
            <iframe height='170px' seamless src='//www.caster.fm/widgets/em_player.php?jsinit=true&uid=517083&t=blue&c=&embed=true'></iframe>
          </div>
          <div style={{ width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center' }}>
            <span style={share}>Compartir</span>
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center' }}>
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
      </div>
      <div ref={myRef} style={{width:'100%', backgroundColor:'#2d5e92', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:10 }}>
        <span style={titleWhite}>Dejanos tu comentario</span>
        </div>
        <div ref={myRef} style={{width:'100%', backgroundColor:'#2d5e92', display:'flex',  justifyContent: 'center', alignItems: 'center'}}>

        <FacebookProvider appId="895498000924043" >
          <Comments colorScheme="dark" orderBy="reverse_time" numPosts="11" href="https://www.facebook.com/Testestest-100720924932190" />
        </FacebookProvider>
      </div>
      <ScrollToTop />
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
  fontSize: 'calc(4em + 1vw)',
}

var titleWhite = {
  fontFamily: 'Suez One, serif',
  fontSize: 'calc(2em + 1vw)',
  color:'#FFFFFF',
  fontWeight:400
}

var share = {
  fontFamily: 'Barlow, sans-serif',
  fontSize: 20
}

const rightButton = {
  width: '17px',
  marginTop: '33px',
  marginRight: '18px',
  position:'absolute' as 'absolute',
  display:'inline-block',
  top:10,
  right:370,
}

const rightButton2 = {
  width: '17px',
  marginTop: '33px',
  marginRight: '18px',
  position:'absolute' as 'absolute',
  display:'inline-block',
  top:10,
  right:290,
}

const rightButton3 = {
  width: '17px',
  marginTop: '33px',
  marginRight: '18px',
  position:'absolute' as 'absolute',
  display:'inline-block',
  top:10,
  right:160,
}

const rightButton4 = {
  width: '17px',
  marginTop: '33px',
  marginRight: '18px',
  position:'absolute' as 'absolute',
  display:'inline-block',
  top:10,
  right:70,
}

const right = {
  width: '17px',
  marginTop: '33px',
  marginRight: '18px',
  position:'absolute' as 'absolute',
  top:280,
  right:300,
  cursor: 'pointer' as 'pointer',
}