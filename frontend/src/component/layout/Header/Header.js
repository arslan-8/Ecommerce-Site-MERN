import React from 'react';
import { ReactNavbar } from "overlay-navbar";
import logo from '../../../images/logo.png';

const options = {

  burgerColorHover:"#eb4034",
  logo,
  logoWidth:"20vmax",
  navColor1:"white",
  logoHoverSize:"10px",
  logoHoverColor:"#eb4034",
  link1Text:"Home",
  link2Text:"Products",
  link3Text:"Contact",
  link4Text:"About",
  link1Url:"/",
  link2Url:"/products",
  link3Url:"/contact",
  link4Url:"/about",
  link1Size:"1.3vmax",
  link1Color:"rgba(35,35,35,0.8)",
  nav1justifyContent:"flex-end",
  nav2justifyContent:"flex-end",
  nav3justifyContent:"flex-start",
  nav4justifyContent:"flex-start",
  link1ColorHover:"#eb4034",
  link1Margin:"1vmax",
  profileIconUrl:"/login",
  profileIconColor:"rgba(35,35,35,0.8)",
  searchIconColor:"rgba(35,35,35,0.8)",
  cartIconColor:"rgba(35,35,35,0.8)",
  profileIconColorHover:"#eb4034",
  searchIconColorHover:"#eb4034",
  cartIconColorHover:"#eb4034",
  cartIconMargin:"1vmax",
}

const Header = () => {
  return (
    <ReactNavbar {...options} />
  )
}

export default Header;


//     logo,
//     burgerColor:"#2bba2b",
//     burgerColorHover:"#00ff00",
//     navColor1:"white",
//     logoWidth:"100%",
//     link1Size:"1.5vmax",
//     link1Padding:"1vmax",
//     link1ColorHover:"#2bba2b",
//     nav2justifyContent:"flex-end",
//     link1Margin:"1vmax",
//     link2Margin:"0",
//     link3Margin:"0",
//     link4Margin:"1vmax",
//     nav3justifyContent:"flex-start",
//     link1Text:"Home",
//     link1Family:"Franklin Gothic Medium",
//     link2Text:"Products",
//     link3Text:"About Us",
//     link4Text:"Contact Us",
//     link1Url:"/",
//     link2Ur:"products",
//     link3Url:"/contact",
//     link4Url:"/about",
//     nav4justifyContent:"flex-start",
//     searchIconMargin:"0.5vmax",
//     cartIconMargin:"1vmax",
//     profileIconMargin:"0.5vmax",
//     searchIconColorHover:"#00ff00",
//     cartIconColorHover:"#00ff00",
//     profileIconColorHover:"#00ff00",