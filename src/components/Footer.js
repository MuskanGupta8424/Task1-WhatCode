import React from 'react'
import styled from 'styled-components'
import img1 from '../Svgs/logo-ubisoft.svgubisoft.png'
import img2 from '../Svgs/logo-skyweaver.svgskywear.png'
import img3 from '../Svgs/logo-binance.svgbehance.png'
import img4 from '../Svgs/logo-chess.svgchess.png'
import img5 from '../Svgs/logo-coub.svgcoub.png'
import img6 from '../Svgs/logo-kukai.svgkukai.png'
import img7 from '../Svgs/logo-100thieves.png'

const Web = styled.h3`
font-size:${props => props.theme.fontlg};
color:${props=> props.theme.text};
font-weight:500;
margin-bottom:1.3rem;
`
const List =styled.ul`
width:100%;
height:200px;
margin-top:-2rem;
background-color:${props=> props.theme.body};
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Imag=styled.div`
display:flex;
justify-content:center;
width:100%;
align-items:center;
img{
  width:100px;
  margin-left:2rem;
}
`



function Footer() {
  return (
    <>
    <List>
       <Web>Trusted by key players in both Web2 and Web3</Web>
<Imag>
  <img src={img1} alt="" />
  <img src={img2} alt="" />
  <img src={img3} alt="" />
  <img src={img4} alt="" />
  <img src={img5} alt="" />
  <img src={img6} alt="" />
  <img src={img7} alt="" />
</Imag>
       </List>
    </>
  )
}

export default Footer