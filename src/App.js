import React, {Component} from 'react';
import './App.css';
import logo from './Images/bg.png';
import veinti from './Images/24.png';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';
import { FacebookProvider, Comments } from 'react-facebook';
import {Helmet} from 'react-helmet';
import font from './fonts/Montserrat-Bold.ttf';
class App extends Component {
  
  render(){

    return (
      <div style={{backgroundColor: '#F1F1F1', 
        width:'100%',
        height:'100%',
        top:'0px',
        zIndex:1000,
        left:'0px'
      }}>  
      <Helmet>
        <style>{'body { background-color: #F1F1F1; }'}</style>
      </Helmet>
      <div style={{marginTop:0, marginLeft:0, marginRight:0, width:'100%', height:220, backgroundColor: '#E3E3E3', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.2)', zIndex: 2, position: 'fixed'}}>
        <img src={logo} alt="logo" style={{height:200, width:200, marginRight:150}}></img>
        <iframe width="300" height="170px"  frameborder="0" seamless  src="//www.caster.fm/widgets/em_player.php?uid=517083&c=000000&t=color"><p>Your browser does not support iframes.</p></iframe>
      </div>

        <div style={{ height: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '40%',
            minWidth: '300px',
            paddingTop:600
              }}>
          <FacebookProvider appId="895498000924043" style={{ }}>
          <Comments orderBy="reverse_time" numPosts="5" href="https://www.facebook.com/Testestest-100720924932190" />
          </FacebookProvider>
        </div>
      
      </div>

      );
    }
  }

export default App;
