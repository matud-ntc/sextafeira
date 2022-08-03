import React, {Component, useRef, useState} from 'react';
import './App.css';
import logo from './Images/logo.png';
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
import Pagination from './components/pagination/Pagination';

interface Props {
  currentView: string,
  token: string
}

const App: React.FC<Props> = props => {

  ReactGA.initialize('UA-163328180-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageMobile, setCurrentPageMobile] = useState(1);

  const [postsPerPage] = useState(2);
  const [postsPerPageMobile] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const indexOfLastPostMobile = currentPageMobile * postsPerPageMobile;
  const indexOfFirstPostMobile = indexOfLastPostMobile - postsPerPageMobile;

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const paginateMobile = pageNumberMobile => setCurrentPageMobile(pageNumberMobile);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  
  
  const urls = ['https://www.mixcloud.com/martín-dalto/seleccion1-sextafeira-radio/', 'https://www.mixcloud.com/martín-dalto/seleccion2-sextafeira-radio/', 'https://www.mixcloud.com/martín-dalto/seleccion3-sextafeira-radio/', 'https://www.mixcloud.com/martín-dalto/seleccion4-sextafeira-radio/', 'https://www.mixcloud.com/martín-dalto/selección5/'];

  const currentPosts = urls.slice(indexOfFirstPost, indexOfLastPost);
  const currentPostsMobile = urls.slice(indexOfFirstPostMobile, indexOfLastPostMobile);

  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  const myRef2 = useRef(null)
  const executeScroll2 = () => scrollToRef(myRef2)
  const myRef3 = useRef(null)
  const executeScroll3 = () => scrollToRef(myRef3)
  return(
    <>
    <BrowserView>
      <div style={{width:'100%', overflowX: 'hidden', position:'relative'}}>
        <div className={'div_backgrndimg'} style={{width:'100%', paddingTop:60, paddingBottom:60,  backgroundImage: 'linear-gradient(white, #f24d15)'}}>
          <div style={left}>
            <img src={logo} style={{width:'200px', height:'87px'}}/>
          </div> 

          <div style={rightButton}>
            <span style={{cursor:'pointer', display:'block', marginRight:10, fontSize:20, fontWeight:500}}>Inicio</span>
          </div> 
          <div style={rightButton2}>
            <span style={{cursor:'pointer', display:'block', marginRight:10, fontSize:20, fontWeight:500}} onClick={executeScroll2}>Noticias</span>
          </div>
            <div style={rightButton3}>
            <span style={{cursor:'pointer', display:'block', marginRight:10, fontSize:20, fontWeight:500}} onClick={executeScroll3}>Podcasts</span>
          </div> 
          <div style={rightButton4}>
            <span style={{cursor:'pointer', display:'block', marginRight:10, fontSize:20, fontWeight:500}} onClick={executeScroll}>Comentarios</span>
          </div> 

          <div style={{ width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:60 }}>
          
          <iframe src="https://zeno.fm/player/sextafeira-radio" width="575" height="250" frameBorder="0" scrolling="no"></iframe>
  <div id='cstrFreePlayerDiv'></div>                    
  <div id='cstrFreePlayerDiv'></div>          
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center'}}>
              <img src={wave}></img>           
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:10 }}>
              <span style={titleWhite}>Por siempre</span>
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:5 }}>
              <span style={titleWhite}>viernes</span>
          </div>
            <div style={{ width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:40 }}>
              <span style={share}>Compartir</span>
            </div>
            <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:20, marginBottom:300 }}>
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
        
        
        <div ref={myRef2} style={{width:'100%', backgroundColor:'#FFFFFF',padding:30, marginBottom:460}}>
          <div  style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginBottom:80, marginTop:50 }}>
            <span style={titleBlack}>Noticias</span>
          </div>
            <Carousel slidesPerPage={4} clickToChange centered>
              <div style={cardStyle}>
                
                <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                <Typography  variant="h5" component="h2">
                  COMMING SOON
                </Typography>
              </div>
              <div style={cardStyle}>
                  
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                  COMMING SOON
                  </Typography>
              </div>
              <div style={cardStyle}>
                  
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                  COMMING SOON
                  </Typography>
              </div>
              <div style={cardStyle}>
                  
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                  COMMING SOON
                  </Typography>
              </div>
              <div style={cardStyle}>
                  
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                  COMMING SOON
                  </Typography>
              </div>
              <div style={cardStyle}>
                  
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                  COMMING SOON
                  </Typography>
              </div>
              <div style={cardStyle}>
                  
                  <img src={astro} alt="logo" style={{height:'80%', width:'80%', minWidth:40, minHeight:40}}></img>

                  <Typography  variant="h5" component="h2">
                  COMMING SOON
                  </Typography>
              </div>
            </Carousel>
        </div>
        <div style={{width:'100%', backgroundColor:'#555555',padding:30, height:1200}}>
          <div ref={myRef3} style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginBottom:80}}>
            <span style={titleWhite}>Podcasts y Playlists</span>
          </div>
          {currentPosts.map((row: any, i: number) => (
            <div style={{width:'100%', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
              <ReactPlayer url={row} options={'light:1'}></ReactPlayer>
            </div>
          ))}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={urls.length}
            paginate={paginate}
          />
        </div>
        <div style={{width:'100%', backgroundColor:'#000000',padding:30}}>
          <div ref={myRef} style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center',  }}>
            <span style={titleWhite}>Dejanos tu comentario</span> 
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center'}}>
            <div style={{backgroundColor:'#FFFFFF', width:'40%',minWidth:600, display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:50,   borderRadius: "15px",}}>
              <div className="fb-comments" data-href="https://www.facebook.com/sextafeirabu/" data-numposts="11" data-width=""></div>
            </div>
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:20,}}>
            <div className="fb-page" data-href="https://www.facebook.com/sextafeirabu/" data-tabs="timeline" data-width="234" data-height="150" data-small-header="true" data-adapt-container-width="false" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/sextafeirabu/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/sextafeirabu/">Sextafeira Radio</a></blockquote></div>        
          </div>
        </div>
        <div style={right}>
          <ScrollToTop />
        </div>
      </div>
    </BrowserView>
    <MobileView>
      <div style={{width:'100%', overflowX: 'hidden', position:'relative'}}>
        <div className={'div_backgrndimg'} style={{width:'100%', backgroundImage: 'linear-gradient(white, #f24d15)'}}>
        <div style={left}>
            <img src={logo} style={{width:'200px', height:'87px'}}/>
          </div> 
          <hr style={divider}/>

          <div style={{ width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:200 }}>
          <iframe src="https://zeno.fm/player/sextafeira-radio" width="575" height="250" scrolling="no"></iframe>
          <div id='cstrFreePlayerDiv'></div>          
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center'}}>
              <img src={wave}></img>           
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:10 }}>
              <span style={titleWhite}>Por siempre</span>
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:5 }}>
              <span style={titleWhite}>viernes</span>
          </div>
          
            <div style={{ width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:40 }}>
              <span style={share}>Compartir</span>
            </div>
            <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:20 }}>
              <div style={{marginRight:10, marginBottom:10}}>
              <FacebookShareButton
                url="https://sextafeirabu.com"
                quote="Opa, sextafeira esta en vivo"
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton> 
              </div>    
              <div style={{marginRight:10, marginBottom:10}}>

              <TwitterShareButton
                url="https://sextafeirabu.com"
                title="Opa, sextafeira esta en vivo"
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>    
              </div>     
              <div style={{marginRight:10, marginBottom:10}}>
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
            <span style={titleWhite}>Podcasts y Playlists</span>
          </div>
          {currentPostsMobile.map((row: any, i: number) => (
            <div style={{width:'100%', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
              <ReactPlayer url={row} options={'light:1'}></ReactPlayer>
            </div>
          ))}
          
          <Pagination
            postsPerPage={postsPerPageMobile}
            totalPosts={urls.length}
            paginate={paginateMobile}
          />
          
        </div>
        <div style={{width:'100%', backgroundColor:'#000000'}}>
          <div ref={myRef} style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center'  }}>
            <span style={titleWhite}>Dejanos tu comentario</span>
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center'}}>
            <div style={{backgroundColor:'#FFFFFF', width:'40%', minWidth:300, display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:50,   borderRadius: "15px", marginBottom:20}}>
              <FacebookProvider appId="206828777134701" >
                <Comments colorScheme="light" orderBy="reverse_time" numPosts="12" href="https://www.facebook.com/sextafeirabu/" />
              </FacebookProvider>
            </div>
          </div>
          <div style={{width:'100%', display:'flex',  justifyContent: 'center', alignItems: 'center', marginTop:20,}}>
            <div className="fb-page" data-href="https://www.facebook.com/sextafeirabu/" data-tabs="timeline" data-width="234" data-height="150" data-small-header="true" data-adapt-container-width="false" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/sextafeirabu/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/sextafeirabu/">Sextafeira Radio</a></blockquote></div>        
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
  fontSize: 'calc(4em + 1vw)',
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
  fontSize: 20,
  color:'white'
}

const rightButton = {
  width: '17px',
  marginTop: '33px',
  marginRight: '18px',
  position:'absolute' as 'absolute',
  display:'inline-block',
  top:10,
  right:380,
}

const left = {
  width: '100',
  marginTop: '33px',
  marginRight: '18px',
  position:'absolute' as 'absolute',
  display:'inline-block',
  top:10,
  left:50,
}

const rightButton2 = {
  width: '17px',
  marginTop: '33px',
  marginRight: '18px',
  position:'absolute' as 'absolute',
  display:'inline-block',
  top:10,
  right:300,
}

const rightButton3 = {
  width: '17px',
  marginTop: '33px',
  marginRight: '18px',
  position:'absolute' as 'absolute',
  display:'inline-block',
  top:10,
  right:200,
}

const rightButton4 = {
  width: '17px',
  marginTop: '33px',
  marginRight: '18px',
  position:'absolute' as 'absolute',
  display:'inline-block',
  top:10,
  right:90,
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
