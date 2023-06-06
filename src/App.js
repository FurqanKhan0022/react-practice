
import React from 'react';
import './App.css';
import Header from './Mycomponent/Header';




import Down from './Mycomponent/Down';
import Image from './Imgall/game.png';
import { Addfrom } from './Mycomponent/Addfrom';
import { Addno } from './Addno';
import { Icon } from './Mycomponent/Icon';

function App() {


  return (
    
    <>
    <Addfrom/>
    <Header title="furqan"/>
    <Addno/>

    <Down/>
    <img src={Image}alt=''/>
    
<img src="bgimg.png" alt=''/>
    <img src="./logo192.png"alt=''/>
    <img src="./logo192.png"alt=''/>
    <Icon/>
    </>
  )


}
//  function fir(){
//   var button=document.getElementById("button");
// window.swal({
//   title: "Good job!",
//   text: "You clicked the button!",
//   icon: "success",
//   button: "Aww yiss!",
// }); 
// }
 export default App;









