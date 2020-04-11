import React, {Component} from 'react';
import './App.css';
import logo from './Images/bg.png';
import slogan from './Images/slogan.png';
import astro from './Images/astro.png';
import Iframe from 'react-iframe';
import { FacebookProvider, Comments } from 'react-facebook';
import {Helmet} from 'react-helmet';
import font from './fonts/Montserrat-Bold.ttf';
import { Divider, Tab } from 'semantic-ui-react'
import MediaQuery from 'react-responsive'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import 'react-tabs/style/react-tabs.css';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ReactGA from 'react-ga';
import Typography from '@material-ui/core/Typography';

const colors = [
  'red',
]
const trackingId = "UA-163328180-1"; // Replace with your Google Analytics tracking ID
const panes = [
  {
    menuItem: 'Lunes',
    render: () => <Card style={card}>
                    <CardContent >
                      <img src={astro} alt="logo" style={{height:'600px', width:'570px', minWidth:40, minHeight:40}}></img>

                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>,
  },
  {
    menuItem: 'Martes',
    render: () => <Card style={card}>
                    <CardContent >
                    <img src={astro} alt="logo" style={{height:'600px', width:'570px', minWidth:40, minHeight:40}}></img>
                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>,
  },
  {
    menuItem: 'Miercoles',
    render: () => <Card style={card}>
                    <CardContent >
                    <img src={astro} alt="logo" style={{height:'600px', width:'570px', minWidth:40, minHeight:40}}></img>
                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>,
  },
  {
    menuItem: 'Jueves',
    render: () => <Card style={card}>
                    <CardContent >
                    <img src={astro} alt="logo" style={{height:'600px', width:'570px', minWidth:40, minHeight:40}}></img>
                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>,
  },
  {
    menuItem: 'Viernes',
    render: () => <Card style={card}>
                    <CardContent >
                    <img src={astro} alt="logo" style={{height:'600px', width:'570px', minWidth:40, minHeight:40}}></img>
                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>,
  },
  {
    menuItem: 'Sabado',
    render: () => <Card style={card}>
                    <CardContent >
                    <img src={astro} alt="logo" style={{height:'600px', width:'570px', minWidth:40, minHeight:40}}></img>
                      <Typography  variant="h5" component="h2">
                        Este espacio todavia no tiene horarios
                      </Typography>
                    </CardContent>  
                  </Card>,
  },
  {
    menuItem: 'Domingo',
    render: () => <Card style={card}>
    <CardContent >
    <img src={astro} alt="logo" style={{height:'600px', width:'570px', minWidth:40, minHeight:40}}></img>
      <Typography  variant="h5" component="h2">
        Este espacio todavia no tiene horarios
      </Typography>
    </CardContent>  
  </Card>,
  },
]

class App extends Component {
  
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
        zIndex:1000,
        left:'0px'
      }}>  
        <link rel="stylesheet" href="https://use.typekit.net/vnr7wcv.css"/>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />

        <Helmet>
          <style>{'body { background-color: #373737; }'}</style>
        </Helmet>
        <BrowserView>
          <div style={{marginTop:0, marginLeft:0, marginRight:0, width:'100%', height:190, backgroundColor: '#e3e3e3', boxShadow:'0 4px 8px rgba(255, 231, 231, 0.6)', zIndex: 2, position: 'fixed'}}>
            <img src={logo} alt="logo" style={{height:150, width:300, marginRight:280, marginLeft:90, minWidth:40, minHeight:40}}></img>
            <iframe marginTop="10" width="300" height="170"  frameborder="0" seamless  src="//www.caster.fm/widgets/em_player.php?uid=517083&c=000000&t=color"><p>Your browser does not support iframes.</p></iframe>
            <img src={slogan} alt="logo" style={{height:100, width:400, marginLeft: 130, marginBottom:27, minWidth:40, minHeight:40}}></img>
          </div>
          <div style={{ height: '600px',
              marginLeft: 'auto',
              marginRight: 'auto', 
              width: '600px',
              minWidth: '10',
              paddingTop:200
                }}>
                
          <Divider hidden />

          <Tab
            menu={{color, inverted: true, attached: false, tabular: false }}
            panes={panes}
          />

          <FacebookProvider appId="895498000924043" style={{ }}>
            <Comments colorScheme="light" orderBy="reverse_time" numPosts="5" href="https://www.facebook.com/Testestest-100720924932190" />
          </FacebookProvider>
        </div>
        </BrowserView>
        
        <MobileView>
          <div style={{marginTop:0, marginLeft:0, marginRight:0, width:'100%', height:310, backgroundColor: '#E3E3E3', boxShadow:'0 4px 8px rgba(255, 231, 231, 0.6)', zIndex: 2, position: 'fixed'}}>
            <img src={logo} alt="logo" style={{height:50, width:150, marginRight:350, marginLeft:150, minWidth:40, minHeight:40}}></img>
            <iframe width="300" height="170px"  frameborder="0" seamless  src="//www.caster.fm/widgets/em_player.php?uid=517083&c=000000&t=color"><p>Your browser does not support iframes.</p></iframe>
            <br></br>
            <label style={{marginBottom:60, marginLeft:100, fontSize:40, minSize:20, fontFamily: 'gothic-open-shaded, sans-serif', fontWeight: 400, fontStyle: 'normal'}}>por siempre viernes</label>
          </div>
          <div style={{ height: '600px',
              marginLeft: 'auto',
              marginRight: 'auto', 
              width: '600px',
              minWidth: '10',
              paddingTop:200
                }}>
                <FacebookProvider appId="895498000924043" style={{ }}>
            <Comments colorScheme="light" orderBy="reverse_time" numPosts="5" href="https://www.facebook.com/Testestest-100720924932190" />
          </FacebookProvider>
        </div>
        </MobileView>
          
        
      </div>

      );
    }
  }

export default App;

var card = {
  backgroundColor: '#EBEBEB', 
  alignItems:'center'
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