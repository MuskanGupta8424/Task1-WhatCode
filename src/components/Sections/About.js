import React from 'react'
import styled from 'styled-components'
import Pro from '../../assests/identi.png'
import Seam from '../../assests/Seamless & private.png'
import Profile from '../../assests/profile.png'
import Vec1 from '../../Svgs/Vectorvector.png'
import Vec2 from '../../Svgs/Vectorvector2.png'
import wallet from '../../Svgs/wallet.png'
import logclick from '../../Svgs/loginclick.png'
import Cir from '../../Svgs/Vector.svg'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

 
const Section = styled.section`
width:100vw;
min-height:100vh;
position:relative;
background-color:#F3F6FC;
`
const Heading = styled.div`
width:100vw;
min-height:17vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding:2rem 0;


.fimg{
  width:25vw;

}
.simg{
  width:30vw;
margin-top:1rem;
}
`
const Box = styled.div`
width:100vw;
height:600px;
display:flex;
`
const Box1 = styled.div`
width:60vw;
height:400px;
display:flex;
background:linear-gradient(180deg,#010220 0%,#010220 32.23%,#010220,#010220);
margin :0 auto;
border-radius:20px;
flex-direction:column;
padding:3rem 4rem;
color:${props=>props.theme.text};

h1{
  font-size:${props=>props.theme.fontxxl};
  font-weight:500;
width:85%;
position:relative;
}
span{
  background:-webkit-linear-gradient(#13A5D3, #1B6BEC, #9824CF);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;

}
p{
width:80%;
  color:grey;
  margin-top:.7rem;
}
`
const Left=styled.div`
width:50%;
height:100%;
display:flex;
align-items:center;
justify-content:center;

img{
  width:45%;
}
`
const Right=styled.div`
width:50%;
height:100%;
align-items:center;
justify-content:center;
display:flex;
// background-color:blue;
flex-direction:column;
position:relative;
`
const Card=styled.div`
width:400px;
height:150px;
// background-color:red;
margin-top:10px;
padding:2rem 5rem;
align-items:flex-start;
justify-content:space-between;
display:flex;
flex-direction:column;
position:relative;

h1{
  width:60%;
font-size:${props=>props.theme.fontlg};
color:${props=>props.theme.body};
font-weight:600;
}
.provide{
  width:70%;
margin-bottom:10px;
}
span{
  background:-webkit-linear-gradient(#13A5D3, #1B6BEC, #9824CF);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
font-weight:600;

}
.wallet,.logclick{
  width:50px;


  &:hover{
    cursor:pointer;
  }
}
.vec1{
  width:100px;
position:absolute;
top:23%;
left:-3%;
 } 
 .vect{
  position:absolute;
  top:69%;
  left:-6%;
 }
 .vect1{
  position:absolute;
  top:43%;
  left:-6%;
 }

`
const Para =styled.p`
font-size:${props=>props.theme.fontsm};
color:grey;
`
function About() {

  return (
    <>
<Section>
  <Heading>
<img src={Seam} alt="NFT1" className='fimg' />
  <img src={Pro} alt="NFT" className='simg' />
</Heading>
<Box>
<Left>
  <img src={Profile} alt="profile" />
</Left>
<Right>
<Card>
  <img src={Vec1} alt="" className="vec1" />
  <img src={Cir} alt="" className="vect" />
<img src={logclick} alt="vec" className='logclick' />
<h1 className='provide'>Provide the identification details <span>you want to provide</span></h1>
<Para>No seeds phrases or external worried downloads </Para>
<Para>increase conversion rate 74% throiugh one-click</Para>
<Para>logins (passwordless and social logins)</Para>
</Card>
<Card>
  <img src={Vec2} alt="" className="vec1" />
  <img src={Cir} alt="" className="vect1" />
<img src={wallet} alt="vec1" className='wallet' />
<h1>Make a <span>Soul bound</span> connection to <span>your wallet</span></h1>
<Para>Connect instantly with existing wallet</Para>
<Para>Cater to both web2 and web3 users.</Para>
</Card>
</Right>
</Box>
<Box1>
<h1>
<span>Have it both,</span>
a user-friendly and decentralized account
</h1>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem eaque, maxime, perferendis rem modi iste at illo tempore labore adipisci dicta porro minus enim iure quae? Voluptatum quidem culpa distinctio iste rerum.
</p>
</Box1>
</Section>
    </>
  )
}

export default About