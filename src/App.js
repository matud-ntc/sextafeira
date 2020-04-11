import React, {Component} from 'react';
import './App.css';
import logo from './Images/bg.png';
import veinti from './Images/24.png';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';
import { FacebookProvider, Comments } from 'react-facebook';
import {Helmet} from 'react-helmet';
import font from './fonts/Montserrat-Bold.ttf';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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


const trackingId = "UA-163328180-1"; // Replace with your Google Analytics tracking ID


class App extends Component {
  

  render(){
    ReactGA.initialize('UA-163328180-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
      <div style={{backgroundColor: '#373737', 
        width:'100%',
        height:'100%',
        top:'0px',
        zIndex:1000,
        left:'0px'
      }}>  
        <Helmet>
          <style>{'body { background-color: #373737; }'}</style>
        </Helmet>
        <BrowserView>
          <div style={{marginTop:0, marginLeft:0, marginRight:0, width:'100%', height:190, backgroundColor: '#FFFFFF', boxShadow:'0 4px 8px rgba(255, 231, 231, 0.6)', zIndex: 2, position: 'fixed'}}>
            <img src={logo} alt="logo" style={{height:150, width:300, marginRight:280, marginLeft:90, minWidth:40, minHeight:40}}></img>
            <iframe marginTop="10" width="500" height="170"  frameborder="0" seamless  src="//www.caster.fm/widgets/em_player.php?uid=517083&c=000000&t=color"><p>Your browser does not support iframes.</p></iframe>
          </div>
        </BrowserView>
        
        <MobileView>
          <div style={{marginTop:0, marginLeft:0, marginRight:0, width:'100%', height:220, backgroundColor: '#E3E3E3', boxShadow:'0 4px 8px rgba(255, 231, 231, 0.6)', zIndex: 2, position: 'fixed'}}>
            <img src={logo} alt="logo" style={{height:50, width:150, marginRight:350, marginLeft:150, minWidth:40, minHeight:40}}></img>
            <iframe width="300" height="170px"  frameborder="0" seamless  src="//www.caster.fm/widgets/em_player.php?uid=517083&c=000000&t=color"><p>Your browser does not support iframes.</p></iframe>
          </div>
        </MobileView>
          <div style={{ height: '600px',
              marginLeft: 'auto',
              marginRight: 'auto', 
              width: '600px',
              minWidth: '41px',
              paddingTop:300
                }}>
                  <Tabs>
        <TabList color='#f00166' minWidth='40px'>
          <Tab>Lunes</Tab>
          <Tab>Martes</Tab>
          <Tab>Miercoles</Tab>
          <Tab>Jueves</Tab>
          <Tab>Viernes</Tab>
          <Tab>Sabado</Tab>
          <Tab>Domingo</Tab>
        </TabList>
        <TabPanel>
          <Card style={{backgroundColor: '#e3e3e3', alignItems:'center'}}>
            <CardContent >
              <Typography  variant="h5" component="h2">
                Todavia no hay horarios...
              </Typography>
            </CardContent>  
          </Card>
        </TabPanel>
        <TabPanel>
          <Card style={{backgroundColor: '#e3e3e3', alignItems:'center'}}>
            <CardContent >
              <Typography  variant="h5" component="h2">
                Todavia no hay horarios..
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel>
          <Card style={{backgroundColor: '#e3e3e3', alignItems:'center'}}>
            <CardContent >
              <Typography  variant="h5" component="h2">
                Todavia no hay horarios..
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel>
          <Card style={{backgroundColor: '#e3e3e3', alignItems:'center'}}>
            <CardContent >
              <Typography  variant="h5" component="h2">
                Todavia no hay horarios..
              </Typography>
              
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel>
          <Card style={{backgroundColor: '#e3e3e3', alignItems:'center'}}>
            <CardContent >
              <Typography  variant="h5" component="h2">
                Todavia no hay horarios..
              </Typography>
            </CardContent>
            </Card>
        </TabPanel>
        <TabPanel>
          <Card style={{backgroundColor: '#e3e3e3', alignItems:'center'}}>
            <CardContent >
              <Typography  variant="h5" component="h2">
                Todavia no hay horarios..
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel>
          <Card style={{backgroundColor: '#e3e3e3', alignItems:'center'}}>
            <CardContent >
              <Typography  variant="h5" component="h2">
                Todavia no hay horarios..
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
      </Tabs>
          <FacebookProvider appId="895498000924043" style={{ }}>
            <Comments colorScheme="dark" orderBy="reverse_time" numPosts="5" href="https://www.facebook.com/Testestest-100720924932190" />
          </FacebookProvider>
        </div>
        
      </div>

      );
    }
  }

export default App;

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