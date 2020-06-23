import React, {Component, useRef} from 'react';
import './App.css';
import logo from './Images/bg.png';
import slogan from './Images/slogan.png';
import astro from './Images/astro.png';
import { FacebookProvider, Comments } from 'react-facebook';
import ReactPlayer from 'react-player'

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
import ReactGA from 'react-ga';
import Typography from '@material-ui/core/Typography';
import wave from './Images/wave.svg'
import ScrollToTop from './components/ScrollToTop';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
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
  const myRef2 = useRef(null)
  const executeScroll2 = () => scrollToRef(myRef2)
  const myRef3 = useRef(null)
  const executeScroll3 = () => scrollToRef(myRef3)
  return(
    <>
    <BrowserView>
      <div style={{width:'100%', overflowX: 'hidden', position:'relative', height:'100%'}}>
        <div className={'div_backgrndimg'} style={{width:'100%', padding:60, marginBottom:320}}>
          <div style={left}>
            SEXTA FEIRA
          </div> 
          <div style={rightButton}>
            <span style={{cursor:'pointer', display:'block', marginRight:10}}>Inicio</span>
          </div> 
          <div style={rightButton2}>
            <span style={{cursor:'pointer', display:'block', marginRight:10}} onClick={executeScroll}>Comentarios</span>
          </div>
            <div style={rightButton3}>
            <span style={{cursor:'pointer', display:'block', marginRight:10}} onClick={executeScroll2}>Noticias</span>
          </div> 
          <div style={rightButton4}>
            <span style={{cursor:'pointer', display:'block', marginRight:10}} onClick={executeScroll3}>Podcasts</span>
          </div> 
          <hr style={divider}/>

          <div style={{ width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:60 }}>
            <a id='cstrFreePlayerBL1' href='//www.caster.fm/'>Free Shoutcast Hosting</a><a id='cstrFreePlayerBL2' href='//www.caster.fm/'>Radio Stream Hosting</a>
          <div id='cstrFreePlayerDiv'></div>          
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center'}}>
              <img src={wave}></img>           
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:10 }}>
              <span style={subtitleStyle}>Por siempre</span>
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:5 }}>
              <span style={subtitleStyle}>viernes</span>
          </div>
          
            <div style={{ width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:40 }}>
              <span style={share}>Compartir</span>
            </div>
            <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:20 }}>
              <div style={{marginRight:10}}>
              <FacebookShareButton
                url="https://sextafeirabu.com"
                quote="Opa, sextafeira esta en vivo"
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton> 
              </div>    
              <div style={{marginRight:10}}>

              <TwitterShareButton
                url="https://sextafeirabu.com"
                title="Opa, sextafeira esta en vivo"
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>    
              </div>     
              <div style={{marginRight:10}}>
              <WhatsappShareButton
                url="https://sextafeirabu.com"
                title="Opa, sextafeira esta en vivo"
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>        
              </div> 
            </div>           
        </div>

        <div style={{width:'100%', backgroundColor:'#fb5252',padding:30}}>
          <div ref={myRef} style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center',  }}>
            <span style={titleWhite}>Dejanos tu comentario</span>
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center'}}>
            <div style={{backgroundColor:'#FFFFFF', width:'40%',minWidth:600, display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:50,   borderRadius: "15px",}}>
              <FacebookProvider appId="895498000924043" >
                <Comments colorScheme="light" orderBy="reverse_time" numPosts="12" href="https://www.facebook.com/Testestest-100720924932190" />
              </FacebookProvider>
            </div>
          </div>
        </div>
        <div style={{width:'100%', backgroundColor:'#FFFFFF',padding:30, marginBottom:460}}>
          <div ref={myRef2} style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginBottom:80, marginTop:30 }}>
            <span style={titleBlack}>Noticias</span>
          </div>
            <Carousel slidesPerPage={4} clickToChange centered>
              <div style={cardStyle}>
                <Typography  variant="h5" component="h2">
                  Lunes
                </Typography>
                <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                <Typography  variant="h5" component="h2">
                  Este espacio todavia no tiene horarios
                </Typography>
              </div>
              <div style={cardStyle}>
                  <Typography  variant="h5" component="h2">
                    Martes
                  </Typography>
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                    Este espacio todavia no tiene horarios
                  </Typography>
              </div>
              <div style={cardStyle}>
                  <Typography  variant="h5" component="h2">
                    Miercoles
                  </Typography>
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                    Este espacio todavia no tiene horarios
                  </Typography>
              </div>
              <div style={cardStyle}>
                  <Typography  variant="h5" component="h2">
                    Jueves
                  </Typography>
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                    Este espacio todavia no tiene horarios
                  </Typography>
              </div>
              <div style={cardStyle}>
                  <Typography  variant="h5" component="h2">
                    Viernes
                  </Typography>
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                    Este espacio todavia no tiene horarios
                  </Typography>
              </div>
              <div style={cardStyle}>
                  <Typography  variant="h5" component="h2">
                    Sabado
                  </Typography>
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                    Este espacio todavia no tiene horarios
                  </Typography>
              </div>
              <div style={cardStyle}>
                  <Typography  variant="h5" component="h2">
                    Domingo
                  </Typography>
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                    Este espacio todavia no tiene horarios
                  </Typography>
              </div>
            </Carousel>
        </div>
        <div style={{width:'100%', backgroundColor:'#555555',padding:30, height:1200}}>
          <div ref={myRef3} style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginBottom:80}}>
            <span style={titleWhite}>Podcasts</span>
          </div>
          {/*<div style={{width:'100%', display:'flex', justifyContent: 'center', alignItems: 'center', marginBottom:80}}>
            <ReactPlayer url={'https://www.mixcloud.com/mat%C3%ADas-dalto/mayo-11-de-2020/'}></ReactPlayer>
  </div>*/}
          <div style={{width:'100%', display:'flex', justifyContent: 'center', alignItems: 'center', marginBottom:80}}>
            <iframe src='https://www.4shared.com/web/embed/audio/file/WCTemy9Vea?type=NORMAL&widgetWidth=530&showArtwork=true&playlistHeight=0&widgetRid=37225837388' style={{overflow:'hidden',height:'152px',width:'530px',border: 0,margin:0}}></iframe>
          </div>
        </div>
        <div style={right}>
          <ScrollToTop />
        </div>
      </div>
    </BrowserView>
    <MobileView>
    <div style={{width:'100%', overflowX: 'hidden', position:'relative'}}>
        <div className={'div_backgrndimg'} style={{width:'100%', marginBottom:120}}>
          <div style={left}>
            SEXTA FEIRA
          </div> 
          <hr style={divider}/>

          <div style={{ width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:60 }}>
            <a id='cstrFreePlayerBL1' href='//www.caster.fm/'>Free Shoutcast Hosting</a><a id='cstrFreePlayerBL2' href='//www.caster.fm/'>Radio Stream Hosting</a>
          <div id='cstrFreePlayerDiv'></div>          
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center'}}>
              <img src={wave}></img>           
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:10 }}>
              <span style={subtitleStyle}>Por siempre</span>
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:5 }}>
              <span style={subtitleStyle}>viernes</span>
          </div>
          
            <div style={{ width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:40 }}>
              <span style={share}>Compartir</span>
            </div>
            <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:20 }}>
              <div style={{marginRight:10}}>
              <FacebookShareButton
                url="https://sextafeirabu.com"
                quote="Opa, sextafeira esta en vivo"
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton> 
              </div>    
              <div style={{marginRight:10}}>

              <TwitterShareButton
                url="https://sextafeirabu.com"
                title="Opa, sextafeira esta en vivo"
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>    
              </div>     
              <div style={{marginRight:10}}>
              <WhatsappShareButton
                url="https://sextafeirabu.com"
                title="Opa, sextafeira esta en vivo"
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>        
              </div> 
            </div>           
        </div>

        <div style={{width:'100%', backgroundColor:'#fb5252'}}>
          <div ref={myRef} style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center'  }}>
            <span style={titleWhite}>Dejanos tu comentario</span>
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center'}}>
            <div style={{backgroundColor:'#FFFFFF', width:'40%', minWidth:300, display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:50,   borderRadius: "15px", marginBottom:20}}>
              <FacebookProvider appId="895498000924043" >
                <Comments colorScheme="light" orderBy="reverse_time" numPosts="12" href="https://www.facebook.com/Testestest-100720924932190" />
              </FacebookProvider>
            </div>
          </div>
        </div>
        <div style={{width:'100%', backgroundColor:'#FFFFFF', marginBottom:200}}>
          <div ref={myRef2} style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginBottom:80, marginTop:30 }}>
            <span style={titleBlack}>Noticias</span>
          </div>
            <Carousel slidesPerPage={2} clickToChange centered>
              <div style={cardStyle}>
                <Typography  variant="h5" component="h2">
                  Lunes
                </Typography>
                <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                <Typography  variant="h5" component="h2">
                  Este espacio todavia no tiene horarios
                </Typography>
              </div>
              <div style={cardStyle}>
                  <Typography  variant="h5" component="h2">
                    Martes
                  </Typography>
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                    Este espacio todavia no tiene horarios
                  </Typography>
              </div>
              <div style={cardStyle}>
                  <Typography  variant="h5" component="h2">
                    Miercoles
                  </Typography>
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                    Este espacio todavia no tiene horarios
                  </Typography>
              </div>
              <div style={cardStyle}>
                  <Typography  variant="h5" component="h2">
                    Jueves
                  </Typography>
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                    Este espacio todavia no tiene horarios
                  </Typography>
              </div>
              <div style={cardStyle}>
                  <Typography  variant="h5" component="h2">
                    Viernes
                  </Typography>
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                    Este espacio todavia no tiene horarios
                  </Typography>
              </div>
              <div style={cardStyle}>
                  <Typography  variant="h5" component="h2">
                    Sabado
                  </Typography>
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                    Este espacio todavia no tiene horarios
                  </Typography>
              </div>
              <div style={cardStyle}>
                  <Typography  variant="h5" component="h2">
                    Domingo
                  </Typography>
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                    Este espacio todavia no tiene horarios
                  </Typography>
              </div>
            </Carousel>
        </div>
        <div style={{width:'100%', backgroundColor:'#555555', height:800}}>
          <div ref={myRef3} style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginBottom:80}}>
            <span style={titleWhite}>Podcasts</span>
          </div>
          {/*<div style={{width:'100%', display:'flex', justifyContent: 'center', alignItems: 'center', marginBottom:80}}>
            <ReactPlayer url={'https://www.mixcloud.com/mat%C3%ADas-dalto/mayo-11-de-2020/'}></ReactPlayer>
  </div>*/}
          <div style={{width:'100%', display:'flex', justifyContent: 'center', alignItems: 'center', marginBottom:80}}>
            <iframe src='https://www.4shared.com/web/embed/audio/file/WCTemy9Vea?type=MINI&widgetWidth=330&showArtwork=true&playlistHeight=0&widgetRid=591127821130' style={{overflow:'hidden',height:'62px',width:'330px',border: 0,margin:0}}></iframe>
          </div>
        </div>
        <div style={right}>
          <ScrollToTop />
        </div>
      </div>
    </MobileView>
    </>
  );
}

export default App;

var subtitleStyle = {
  fontFamily: 'halyard-display, sans-serif',
  fontWeight:600,
  fontSize: 'calc(4em + 1vw)',
  textTransform: 'uppercase' as 'uppercase'
  
}

var titleWhite = {
  fontFamily: 'halyard-display, sans-serif',
  fontSize: 'calc(3em + 1vw)',
  color:'#FFFFFF',
  fontWeight:600,
  textAlign:'center' as 'center'
}

var titleBlack = {
  fontFamily: 'halyard-display, sans-serif',
  fontSize: 'calc(3em + 1vw)',
  color:'#000000',
  fontWeight:600
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

const left = {
  width: '100',
  marginTop: '33px',
  marginRight: '18px',
  position:'absolute' as 'absolute',
  display:'inline-block',
  top:10,
  left:10,
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
  position: 'fixed' as 'fixed',
  bottom:'20px',
  right:'20px',
  cursor: 'pointer' as 'pointer',
}

const divider = {
  width: '100%',
  borderTop: '1px solid #EEEEEE',
  borderBottom: 'none'
}

const cardStyle = {
  height: "90%",
  width: "80%",
  textAlign: "center" as "center",
  background: "#000000",
  boxShadow: '0px 2px 15px 0px rgba(0, 0, 0, 0.11)',
  fontSize: "7px",
  borderRadius: "10px",
  marginBottom: 20,
  marginTop: 10
};
