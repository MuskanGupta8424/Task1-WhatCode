import React from 'react'
import styled from 'styled-components'
import img1 from '../../assests/HP_Web3.png.png'
import img2 from '../../assests/Web3-2.png.png'
import img3 from '../../assests/img-3.png.png'


const Section=styled.section`
width:100vw;
min-height:100vh;
background-color:#F3F6FC;
`
const Box=styled.div`
padding:3rem 10rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

h1{
  font-size:${props=>props.theme.fontxxl};
  text-align:center;
  color:${props=>props.theme.body};
font-weight:600;
}
span{
  background:-webkit-linear-gradient(#13A5D3, #1B6BEC, #9824CF);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

`
const Cards=styled.div`
width:100vw;
height:250px;
position:relative;
display:flex;
justify-content:center;
align-items:center;
`
const Card=styled.div`
width:33%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background: linear-gradient(180deg, #FFFFFF 0%, rgba(227, 234, 248, 0.29) 70.31%);
margin-left:1rem;
border-radius:10px;
padding:0 1rem;
text-align:center;
img{
  width:60px;
}
h1{
  width:75%;
  font-size:${props=>props.theme.fontlg};
  // margin-bottom:10px;
  margin-top:10px;
}
p{
  width:70%;
  margin-top:10px;
  font-size:${props=>props.theme.fontxs};
color:rgba(10, 11, 51, 0.6);

}
`
const Box1=styled.div`
padding:5rem 10rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

span{
  background:-webkit-linear-gradient(#13A5D3, #1B6BEC, #9824CF);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

`
const Para=styled.p`
width:35%;
  margin-top:10px;
  font-size:${props=>props.theme.fontmd};
color:rgba(10, 11, 51, 0.6);
text-align:center;

`
const Heading=styled.h1`
// width:75%;
  font-size:${props=>props.theme.fontxxxl};

  color:#C5D9E6;
  // margin-top:10px;
  text-align:center;
`
const Button=styled.button`
display: inline-block;
background-color: transparent;
color:#1B6BEC;
margin-top:2rem;
outline: none;
border:1.5px solid #1B6BEC;
font-size: ${props => props.theme.fontsm};
padding: 0.58rem 2.7rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
align-self:center;
`
const H3=styled.h3`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
`

function Pricing() {
  return (
    <>
<Section>
<Box>
<h1>Get early access to </h1>
<h1>full <span>Multi-Party Computation (MPC)</span> </h1>
<Button>Read more
  </Button>
</Box>
<Cards>
<Card>
<img src={img1} alt="img1" />
<h1>Bring enterprise grade key security to your users</h1>
<p>The private key is never reconstructed, secure digital assets from risks of node collusions, malicious hacker and misplaced seed phrases.</p>
</Card>
<Card>
<img src={img2} alt="img2" />
<h1>Safeguard users with flexible policy engine
</h1>
<p>Secure users with policy engine, set daily limits, blacklist scams and secure your users with these customization.</p>
</Card>
<Card>
<img src={img3} alt="" />
<h1>Non-custodiality guaranteed for all users</h1>
<p>Set up Multi-Factor Authentication (MFA) to suit different needs and manage account security with different thresholds.</p>
</Card>
</Cards>
<Box1>
<H3>Built for all</H3>
<Heading>forms <span>Login</span> Wallets</Heading>
<Para>Integrate seamlessly with the flexible range
of integrations available</Para>
<Button>View Docs
  </Button>
</Box1>
</Section>
    </>
  )
}

export default Pricing