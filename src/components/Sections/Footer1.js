import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import group from '../../Svgs/Group.svg'
import icn from '../../Svgs/ss.svg'

const Section = styled.section`
width:100vw;
height:100vh;
position:relative;
background-color:${props=>props.theme.body};
`
const Heading = styled.div`
width:100vw;
min-height:17vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color:${props=>props.theme.body};
padding:2rem 0;
text-align:center;

h1{
    font-size:${props=>props.theme.fontxxl};
color:${props=>props.theme.text};
margin-bottom:2rem;
}

`
const Box=styled.div`
width:100%;
height:60vh;
display: flex;
align-items:flex-start;
padding: 4rem 0rem;
justify-content:space-between;
flex-direction:column;

img{
  width:15vw;
  margin-left:4rem;

}
.icn{
  width:25vw;
  margin-right:4rem;
}
`
const Image=styled.div`
width:100%;
display:flex;
align-items:flex-start;
padding: 1rem 0rem;
justify-content:space-between;

`
const Box1=styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
 
 h1{
  color:#1B6BEC;
  font-size:${props=>props.theme.fontsm};

 }
 h2{
  margin-top:1rem;
color:${props=>props.theme.text};
font-size:${props=>props.theme.fontsm};

 }
 p{
  color:grey;
  margin-top:1rem;
  font-size:${props=>props.theme.fontsm};

 }

`
const Footer2 =styled.h5`
font-size:${props=>props.theme.fontxs};
color:${props=>props.theme.text};
align-self:center;
`
const Bg=styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
`
function Footer1() {
  return (
    <>
<Section>
<Heading>
    <h1>Have a unique use case</h1>
    <Button text="Speak to an expert" />
</Heading>
<Box>
<Image>
<img src={group} alt="" />
<img src={icn} alt=""  className='icn'/>
</Image>
<Bg>
<Box1>
  <h1>Developers</h1>
  <h2>Documentations</h2>
  <h2>Pricing</h2>
  <h2>Key Infrastructure</h2>
<h2>Wallet</h2>
<h2>Status</h2>
<h2>Support</h2>
</Box1>
<Box1>
<h1>FOR INDIVIDUAL</h1>
<h2>My Torus Wallet</h2>
<h2>My OpenLogin</h2>
</Box1>
<Box1>
  <h1>ABOUT</h1>
  <h2>Team</h2>
  <h2>Partners</h2>
  <h2>Newsroom</h2>
  <h2>Careers</h2>
  <h2>Contact us</h2>
</Box1>
<Box1>
  <p>Cookie Policy</p>
  <p>Privacy Policy</p>
  <p>Terms  and Conditions</p>
</Box1>
</Bg>
<Footer2>Copyrighted by Torus Labs Pte Ltd 2022</Footer2>
</Box>
</Section>

    </>
  )
}

export default Footer1