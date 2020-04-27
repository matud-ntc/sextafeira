import React, {Component} from 'react';
import './App.css';
import logo from './Images/bg.png';
import slogan from './Images/slogan.png';
import astro from './Images/astro.png';
import { FacebookProvider, Comments } from 'react-facebook';
import {Helmet} from 'react-helmet';
import { Divider, Tab } from 'semantic-ui-react'

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
        background: '#f8f9fb',
        left:'0px'
      }}>  
        <link rel="stylesheet" href="https://use.typekit.net/vnr7wcv.css"/>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />

        <Helmet>
          <style>{'body { background-color: #f8f9fb; }'}</style>
        </Helmet>
        <BrowserView>
          <div style={{marginTop:0, marginLeft:0, marginRight:0, width:'100%', height:120, backgroundColor: '#effe05', boxShadow:'0 4px 8px rgba(255, 231, 231, 0.6)', zIndex: 2}}>
            <img src={logo} alt="logo" style={{height:100, marginTop:0, width:250, marginRight:180, marginLeft:90, minWidth:40, minHeight:40}}></img>
            <img src={slogan} alt="logo" style={{height:100, marginTop:0,  width:400, marginLeft: 90, marginBottom:27, minWidth: 10, minHeight:10}}></img>
          </div>
          <div style={{
              width: '100%',
              minWidth: '10',
              paddingTop:10,
              marginLeft:20
          }}>
            <div style={{position:'relative', float:'center', width:'100%'}}>
              <iframe width="400" height="170"  frameborder="0" seamless  src="//www.caster.fm/widgets/em_player.php?uid=517083&c=000000&t=color"><p>Your browser does not support iframes.</p></iframe>
            </div>
            <div>
          <Divider hidden />
          <div style={{position:'relative', marginTop:300}}>
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
                      <img src={astro} alt="logo" style={{height:'400px', width:'570px', minWidth:40, minHeight:40}}></img>

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
        <div style={{marginTop:0, marginLeft:0, marginRight:0, width:'100%', height:220, backgroundColor: '#effe05', boxShadow:'0 4px 8px rgba(255, 231, 231, 0.6)', zIndex: 2}}>
            <img src={logo} alt="logo" style={{height:100, marginTop:0, width:250, marginRight:180, marginLeft:90, minWidth:40, minHeight:40}}></img>
            <img src={slogan} alt="logo" style={{height:100, marginTop:0,  width:300, marginLeft: 5, marginBottom:27, minWidth: 10, minHeight:10}}></img>
          </div>
          <div style={{
              width: '100%',
              paddingTop:10,
              marginLeft:20
          }}>
            <div style={{position:'relative', float:'center', width:'100%'}}>
              <iframe width="300" height="170"  frameborder="0" seamless  src="//www.caster.fm/widgets/em_player.php?uid=517083&c=000000&t=color"><p>Your browser does not support iframes.</p></iframe>
            </div>
            <div>
          <Divider hidden />
          <div style={{position:'relative', marginTop:300}}>
            <ReactCardCarousel spread='wide'>
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
            
            <div style={{position:'relative', marginTop:600, marginLeft:'auto', marginRight:'auto', width: '100%', padding: '10px'}}>
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