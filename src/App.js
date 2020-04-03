import React, {Component} from 'react';
import './App.css';
import logo from './Images/bg.png';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';
import { FacebookProvider, Comments } from 'react-facebook';

class App extends Component {
  
  render(){

    return (
      <div style={{backgroundColor: '#E3E3E3', 
        opacity:0.8,
        width:'100%',
        height:'100%',
        top:'0px',
        left:'0px',
        zIndex:1000
      }}>  
      <img src={logo} alt="logo" style={{height:300, width:300, marginRight:400}}></img>
      <iframe width="300" height="170px"  frameborder="0" seamless  src="//www.caster.fm/widgets/em_player.php?uid=517083&c=000000&t=color"><p>Your browser does not support iframes.</p></iframe>

      <div style={{ height: '500px', overflowY: 'scroll', display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '40%',
          minWidth: '300px',
          marginTop:50 }}>
        <FacebookProvider appId="895498000924043" style={{ }}>
        <Comments href="https://www.facebook.com/Testestest-100720924932190" />
        </FacebookProvider>
      </div>
      
      </div>

      );
    }
  }

export default App;
