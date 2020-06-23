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
const colors = [
  'red',
]
const trackingId = "UA-163328180-1"; 

class App extends Component {
  state = {
    divHeight: 150,
    logoHeight:100,
    logoHeightMobile:60,
    logoWidth:250,
    logoWidthMobile:150,
    sloganHeight:100,
    sloganWidth:400,
    sloganHeightMobile:50,
    sloganWidthMobile:200,
    blur:'blur(0px)'
  }
  
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      divHeight: 150,
      logoHeight:100,
      logoWidth:250,
      sloganHeight:100,
      sloganWidth:400,
      logoHeightMobile:60,
      logoWidthMobile:150,
      sloganHeightMobile:50,
      sloganWidthMobile:200,
      blur:'blur(0px)'
    })
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      this.setState({
        divHeight: 80,
        logoHeight:20,
        logoWidth:140,
        sloganHeight:55,
        sloganWidth:320,
        logoHeightMobile:30,
        logoWidthMobile:75,
        sloganHeightMobile:25,
        sloganWidthMobile:100,
        blur:'blur(8px)'
      })
    } else {
      this.setState({
        divHeight: 150,
        logoHeight:100,
        logoWidth:250,
        sloganHeight:100,
        sloganWidth:400,
        logoHeightMobile:60,
      logoWidthMobile:150,
      sloganHeightMobile:50,
      sloganWidthMobile:200,
        blur:'blur(0px)'
      })    
    }
  };

  state = { color: colors[0] }
  render(){

    const { color } = this.state
    ReactGA.initialize('UA-163328180-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div style={{
        width:'100%',
        height:'100%',
        top:'0px',
        background: '#f8f9fb',
        overflowX: 'hidden',
        left:'0px'
      }}>  
        <link rel="stylesheet" href="https://use.typekit.net/vnr7wcv.css"/>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />

        
        <BrowserView>
          <div ref={this.myRef} style={{position:'fixed' , transition: '0.4s', marginTop:0, marginLeft:0, marginRight:0, width:'100%', height:this.state.divHeight, backgroundColor: '#effe05', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.6)', zIndex: 3}}>
            <img src={logo} alt="logo" style={{height:this.state.logoHeight, transition: '0.2s',marginTop:0, width:this.state.logoWidth, marginTop:20, minWidth:40, minHeight:40}}></img>
            <img src={slogan} alt="logo" style={{height:this.state.sloganHeight, transition: '0.4s', width:this.state.sloganWidth, marginTop:20, top:0, float:'right', minWidth: 10, minHeight:10}}></img>
          </div>
          <div style={{
              width: '100%',
              minWidth: '10',
              paddingTop:10,
              marginLeft:20,
              display:'inline-block'
          }}>
            <div style={{position:'relative', marginTop:200, float:'center', width:'100%'}}>
           
              <div style={{position:'fixed', width:'24%', float:'left'}}>
              <Card style={card}>
              <CardContent >
                <iframe width="98%" height="170"  frameborder="0" seamless  src="//www.caster.fm/widgets/em_player.php?uid=517083&c=000000&t=color"><p>Your browser does not support iframes.</p></iframe>
                <br></br>
                <text style={compartir}>Comparti SextaFeira</text>
                <br></br>
                <FacebookShareButton
                  url="https://sextafeirabu.com"
                  quote="Opa, sextafeira esta en vivo"
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>     
                <TwitterShareButton
                  url="https://sextafeirabu.com"
                  quote="Opa, sextafeira esta en vivo"
                  className="Demo__some-network__share-button"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>         
                <WhatsappShareButton
                  url="https://sextafeirabu.com"
                  quote="Opa, sextafeira esta en vivo"
                  className="Demo__some-network__share-button"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>         
                <FacebookMessengerShareButton
                  url="https://sextafeirabu.com"
                  quote="Opa, sextafeira esta en vivo"
                  className="Demo__some-network__share-button"
                >
                  <FacebookMessengerIcon  size={32} round />
                </FacebookMessengerShareButton>      
                </CardContent>
                </Card>
                </div>
                
              </div>
            <div>
          <Divider hidden />
          <div style={{position:'relative', marginTop:300, width:'30%', marginRight:'auto', marginLeft:630}}>
            <ReactCardCarousel spread='wide'>
            <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Lunes
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'500px', width:'470px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
                  <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Martes
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'500px', width:'470px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
                  <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Miercoles
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'500px', width:'470px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
                  <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Jueves
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'500px', width:'470px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
                  <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Viernes
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'500px', width:'470px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
                  <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Sabado
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'500px', width:'470px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
                  <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Domingo
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'500px', width:'470px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
            </ReactCardCarousel>
          </div>
            
            <div style={{position:'relative', marginTop:600, marginLeft:'auto', marginRight:'auto', width: '50%', padding: '10px'}}>
              <FacebookProvider appId="895498000924043" >
                <Comments colorScheme="light" orderBy="reverse_time" numPosts="5" href="https://www.facebook.com/Testestest-100720924932190" />
              </FacebookProvider>
            </div>
          </div>
        </div>
        </BrowserView>
      
        <MobileView>
        <div ref={this.myRef} style={{position:'fixed' , transition: '0.4s', marginTop:0, marginLeft:0, marginRight:0, width:'100%', height:this.state.divHeight, backgroundColor: '#effe05', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.6)', zIndex: 3}}>
            <img src={logo} alt="logo" style={{height:this.state.logoHeightMobile, transition: '0.2s',marginTop:0, width:this.state.logoWidthMobile, marginTop:20, minWidth:40, minHeight:40}}></img>
            <img src={slogan} alt="logo" style={{height:this.state.sloganHeightMobile, transition: '0.4s', width:this.state.sloganWidthMobile, marginTop:20, top:0, float:'right', minWidth: 10, minHeight:10}}></img>
          </div>
          <div style={{
              width: '100%',
              paddingTop:10,
          }}>
           <div style={{position:'relative', marginTop:200, float:'center', width:'100%'}}>
           
           <div style={{}}>
           <Card style={cardMobile}>
           <CardContent >
              <iframe width="100%" height="170"  frameborder="0" seamless  src="//www.caster.fm/widgets/em_player.php?uid=517083&c=000000&t=color"><p>Your browser does not support iframes.</p></iframe>
              <br></br>
              <text style={compartir}>Comparti SextaFeira</text>
              <br></br>
              <FacebookShareButton
                url="https://sextafeirabu.com"
                quote="Opa, sextafeira esta en vivo"
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>     
              <TwitterShareButton
                url="https://sextafeirabu.com"
                quote="Opa, sextafeira esta en vivo"
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>         
              <WhatsappShareButton
                url="https://sextafeirabu.com"
                quote="Opa, sextafeira esta en vivo"
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>         
              <FacebookMessengerShareButton
                url="https://sextafeirabu.com"
                quote="Opa, sextafeira esta en vivo"
                className="Demo__some-network__share-button"
              >
                <FacebookMessengerIcon  size={32} round />
              </FacebookMessengerShareButton>      
              </CardContent>
              </Card>
              </div>
            </div>
            <div>
          <Divider hidden />
          <div style={{position:'relative', marginTop:300}}>
            <ReactCardCarousel>
            <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Lunes
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'200px', width:'170px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
                  <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Martes
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'200px', width:'170px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
                  <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Miercoles
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'200px', width:'170px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
                  <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Jueves
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'200px', width:'170px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
                  <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Viernes
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'200px', width:'170px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
                  <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Sabado
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'200px', width:'170px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
                  <Card style={card}>
                    <CardContent >
                      <Typography  variant="h5" component="h2">
                        Domingo
                      </Typography>
                      <img src={astro} alt="logo" style={{height:'200px', width:'170px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>
            </ReactCardCarousel>
          </div>
            
            <div style={{position:'relative', marginTop:600, marginLeft:'auto', marginRight:'auto', width:'90%', padding: '10px'}}>
              <FacebookProvider appId="895498000924043" >
                <Comments colorScheme="light" orderBy="reverse_time" numPosts="5" href="https://www.facebook.com/Testestest-100720924932190" />
              </FacebookProvider>
            </div>
          </div>
        </div>
        </MobileView>
          
        
      </div>

      );
    }
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



