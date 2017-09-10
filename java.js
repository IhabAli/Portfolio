@import url('https://fonts.googleapis.com/css?family=Roboto:300');
@import url('https://fonts.googleapis.com/css?family=Oswald');
@import url('https://fonts.googleapis.com/css?family=Dosis:200');
@import url('https://fonts.googleapis.com/css?family=Montserrat:300');



body, html {
  height: 100%;
  margin: 0;
  font: 400 15px/1.8 "Dosis", sans-serif;
  color: #000;
  background-attachment: fixed;

}



.opaque-navbar {
  background-color: rgba(0, 0, 0, 0.5);
  height: 55px;
  transition: background-color .5s ease 0s;
  font-family: 'Oswald', sans-serif;
  font-size: 120%;
  padding-top: 2px;
}

.opaque-navbar.opaque {
  background-color: #fff;
  height: 58px;
  transition: background-color .5s ease 0s;
 
}

ul.dropdown-menu {
  background-color: #fff;

}

.nav-bar {
  font: 120% 'Oswald', sans-serif;
  justify-content: right;

}


button.navbar-toggle {
    float: right;
}


.navbar-header {
  background-color: #000;
  float: right;
}


/*mobile*/


.bgimg-1 {
  background-image: url('https://preview.ibb.co/gLo51k/Original_8192x4518.jpg');
  min-height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  
}

 @media only screen and (max-device-width: 480px) { 
  .bgimg-1 {
  background-image: url('https://preview.ibb.co/dMzvHQ/GB2.jpg');
  min-height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
   }    
 }   

  
.intro  {
  position: fixed;
  font: 290%  'Dosis', sans-serif;
  font-weight: bold;
  font-size: 290%;
  letter-spacing: 45px;
  text-align: center;
  color: #fff;
  margin-left:auto;
  margin-right:auto;
  top: 48%;
}


  .intro2 {
  font: 170% 'Dosis', sans-serif;
  font-weight: bold;
  color: #606060;
  position: fixed;
  text-align: justify;
  top: 63%;
}


 .wrapper {
  display: flex;
  justify-content: center;
}


 @media only screen and (max-device-width: 480px) { 
  
  .intro  {
  position: fixed;
  font: 290%  'Dosis', sans-serif;
  font-weight: bold;
  font-size: 290%;
  letter-spacing: 45px;
  text-align: center;
  color: #fff;
  margin-left:auto;
  margin-right:auto;
  top: 43%;
 }
  
   
  .intro2 {
  font: 250% 'Dosis', sans-serif;
  color: #BFBFBF;
  position: fixed;
  text-align: justify;
  top: 50%;
 }

 .wrapper {
  display: flex;
  justify-content: center;
 }  
}   








/*about me*/

.about {
  padding-top: 10%;
  padding-bottom: 7%;
  font: 20px "Oswald", sans-serif;
  letter-spacing: 20px;
  text-align: center;
}

.quote {
  font: 195% 'Dosis', sans-serif;
  color: #404040;
  letter-spacing: 1px;
  padding-top: 20px;
  padding-bottom: 20%;

}



.columns {
  font: 85% 'Montserrat', sans-serif;
  color: #404040;
  letter-spacing: 1.5px;
  line-height: 19px;
  padding-top: 20px;
  padding-bottom: 20%;
  }


.bgimg-2{
  background-image: url('https://image.ibb.co/jff1ma/tumblr_static_78g6a378ny0w00w0og0s0ww48.png');
  min-height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: 0.5;
}


/* portfolio */


.portfolio {
  padding-top: 10%;
  padding-bottom: 6%;
  font: 20px "Oswald", sans-serif;
  letter-spacing: 20px;
  text-align:center;
  
}




.work {
  display: block;
  max-width: 100%;
  max-height: 100%;  
}



.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 50%;
  background-color: #202020;
  opacity: 0.7;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: .5s ease;
  height: auto;
  display: block;
  
}


.hover-img:hover .overlay {
  height: 100%;
  padding-top: 6px;
  padding-bottom: 6px;
}

.hover-img {
  position: relative;
  margin: 0 auto;
  padding-top: 6px;
  height: 100%;
  
}



.text {
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  white-space: nowrap;
  color: #fff;
  font-size: 15px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}


.banner-background {
  background-color: #000;
  color: #fff;
}



.banner {
   background-color: #000;
   border: none;
   color: #000;
   text-decoration: none;
   display: inline-block;
   font: 16px 'Oswald', sans-serif;
   font-weight: light;
   padding: 40px;
   cursor: pointer;
   letter-spacing: 6px;
   text-align: center;
   width: 100%;
   margin-top: 6px;

}

.banner-button {
  padding: 7px 30px;
  letter-spacing: 3px;
  font: 12px 'Doris', sans-serif;
  border-radius: 2px;
  background-color: #A0A0A0;
  color: #000;

}

button a {
  color: #000;
  text-decoration:  none;

}

button a:hover {
    color: #404040;
    text-decoration:  none;

}

button a:active {
    color: #000;
    text-decoration:  none;

}

.choose {
  padding-top: 10%;
  padding-bottom: 7%;
  font: 17px "Oswald", sans-serif;
  letter-spacing: 10px;
  text-align: center;
}


.social {
  text-align: center;
  font-size: 30px;
  letter-spacing: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  
}

.social-header {
  font: 14px "Oswald", sans-serif;
  padding-top: 20px;
  letter-spacing: 7px;

}

.social-feature {
  font: 12px 'Montserrat', sans-serif;
  color: #404040;
  letter-spacing: 1.5px;
  line-height: 19px;
  text-align: left;
  padding-bottom: 20%;
}


.bgimg-3 {
  background-image: url('https://preview.ibb.co/kx5oCF/z5FnCRM.jpg');
  min-height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: 0.5;
}

.news {
  padding-top: 10%;
  padding-bottom: 7%;
  font: 17px "Doris", sans-serif;
  letter-spacing: 10px;
  text-align: left;
  
  
}

.text-feature {
  font: 14px "Oswald", sans-serif;
  padding-top: 20px;
  letter-spacing: 7px;

}

.text-date {
  font: 10px "Oswald", sans-serif;
  padding-top: 10px;
  padding-bottom: 20px;
  letter-spacing: 4px;
  color: #C0C0C0;
}

.news-feature {
  font: 12px 'Montserrat', sans-serif;
  color: #404040;
  letter-spacing: 1.5px;
  line-height: 19px;
  text-align: left;
  padding-bottom: 10px;
} 


.readmore-button {
  padding: 8px 15px;
  opacity: 0.7;
  letter-spacing: 3px;
  font: 9px 'Doris', sans-serif;
  border-radius: 2px;
  background-color: #E0E0E0;
  color: #000;
  margin-bottom: 45%;
  border-style: solid;

}



.newsletter {
  padding: 80px 0;
  background: #F7F7F7;
}

.newsletter .single {
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2; 
}


.newsletter .single p {
  font: 17px 'Oswald', sans-serif;
  letter-spacing: 5px;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 10px; 
  padding-bottom: 5px;
}


.newsletter .single .form-control {
  height: 40px;
  background: rgba(255, 255, 255, 0.6);
  border-color: transparent;
}



.newsletter .single .form-control:focus {
  box-shadow: none;
  border-color: #243c4f; 
}


.newsletter .single .btn {
  min-height: 40px; 
  background: #26292B;
  color: #fff;
}

.no-spam {
   font: 13px 'Oswald', sans-serif;
   color: #999;
   letter-spacing: 1px;
   margin-top: 5px;
}



.contact {
  padding-top: 10%;
  padding-bottom: 6%;
  font: 20px "Oswald", sans-serif;
  letter-spacing: 20px;
  text-align: center;
  
}




.contact-icons {
  text-align: center;
  font-size: 30px;
  letter-spacing: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 20%;
}



.contact-header {
  font: 14px "Doris", sans-serif;
  padding-top: 20px;
  letter-spacing: 7px;
  
}

.contact-feature {
  font: 12px 'Montserrat', sans-serif;
  color: #404040;
  letter-spacing: 1.5px;
  line-height: 19px;
  text-align: center;
  padding-bottom: 20%;

}



.bgimg-4 {
  background-color: #222222;
  background-image: url('http://artdnaswitchbd.com/componants/images/map-image.png');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 95px 0px;
}


.copyright { 
   min-height:40px; 
   background-color:#000;
}


 .copyright p { 
   text-align:left; 
   color:#FFF; 
   padding:10px 0; 
   margin-bottom:0px;
   font-size: 10px;
}
