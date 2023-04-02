import React from 'react'
import styled from 'styled-components'
import vector1 from '../../Svgs/div.svg'
import vector2 from '../../Svgs/div2.svg'
import vector3 from '../../Svgs/div3.svg'
import vector4 from '../../Svgs/div4.svg'

const Section=styled.section`
width:100vw;
min-height:100vh;
background:linear-gradient(#F3F6FC,#E3EAF84A,#F3F6FC);

`
const Cards=styled.div`
width:100vw;
height:210px;
position:relative;
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
`
const Card=styled.div`
width:30%;
height:100%;
display:flex;
align-items:flex-start;
flex-direction:column;
background: linear-gradient(180deg, #FFFFFF 0%, rgba(227, 234, 248, 0.29) 70.31%);
padding:2rem 3rem;
margin-left:1rem;
margin-top:2rem;
border-radius:24px;
position:relative;

h3{
  color:#1B6BEC;
  font-size:${props=>props.theme.fontsm};
  margin-bottom:1rem;
  font-weight:100;
}
h1{
  width:75%;
  color:${props=>props.theme.body};
  font-size:${props=>props.theme.fontlg};
  font-weight:100;
  margin-bottom:1.1rem;

}
h2{
  color: rgba(10, 11, 51, 0.6);
  width:80%;
  font-size:${props=>props.theme.fontmd};
  font-weight:100;
  margin-bottom:2rem;

}
a{
  color:#1B6BEC;
  text-decoration:underline;
  align-self:flex-end;
}
`
const Imag=styled.div`
display:flex;
flex-flow:column;
position:absolute;
bottom:5%;
right:5%;

img{
  width:20vw;
  margin-bottom:1rem;
}
`

function Products() {
  return (
    <>
<Section>
<Cards>
<Card>
  <h3>CHAINS</h3>
  <h1>Blockchain agnostic</h1>
  <h2>Save development time, connect with the provider and you are all set.</h2>
  <Imag>
    <img src={vector1} alt="vec" />
    <a href="#">Explore more</a>
  </Imag>
</Card>
<Card>
  <h3>PLATFORMS</h3>
  <h1>Compatible on both Web2 and Web3 platforms</h1>
  <h2>Onboard Web2 users onto Web3! Build on desktop AND mobile.</h2>
  <Imag>
  <img src={vector2} alt="" />
  <a href="#">Explore more</a>

  </Imag>
</Card>
<Card>

  <h3>LOGINS</h3>
  <h1>Choose from a range of login options</h1>
  <h2>Use your current Auth0 verifier or select from a list that suits your audience.</h2>
  <Imag>
  <img src={vector3} alt="" />
  <a href="#">Explore more</a>

  </Imag>
</Card>
<Card>
  <h3>WALLETS</h3>
  <h1>Adaptable to support existing wallet infrastructure</h1>
  <h2>Onboard new wallet users within seconds with a non-custodial account</h2>
  <Imag>
    <img src={vector4} alt="" />
  <a href="#">Explore more</a>

  </Imag>
</Card>
</Cards>
</Section>
    </>
  )
}

export default Products