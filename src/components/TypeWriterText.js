import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Button'

const Title = styled.h2`
font-size:${props=> props.theme.fontxxl};
font-weight:100;
text-transform:capitalize;
width:85%;
color:${props=> props.theme.text};
align-self:flex-start;


span{
  text-transform:uppercase;
font-weight:600;
background:-webkit-linear-gradient(#13A5D3, #1B6BEC, #9824CF);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

@media (max-width: 70em) {
  font-size: ${(props) => props.theme.fontxl};

}
@media (max-width: 48em) { 
  align-self: center;
  text-align:center;
}
@media (max-width: 40em){
  width: 90%;
}

`;

const SubTitle =styled.p`
font-size: ${props=>props.theme.fontsm};
text-transform:capitalize;
color: grey;
font-weight:600;
margin-bottom:1rem;
margin-top:1rem;
width:80%;
font-weight:100;
align-self:flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};

  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  
`
const ButtonContainer =styled.div`
width:80%;
display:flex;
align-self:flex-start;
justify-content:space-between;
margin-top:2rem;

@media (max-width: 48em) { 
  align-self: center;
  text-align:center;

  button{
    margin: 0 auto;
  }
}

`
const TypeWriterText = () => {
  return (
    <>
    <Title>
    Your Identity now
<Typewriter
options={{
  autoStart:true,
  loop:true,
}}
onInit={(typewriter)=>{
  typewriter.typeString('<span class="text-1"> Decentralized.</span>')
  .pauseFor(2000)
  .deleteAll()
  .typeString('<span class="text-2">Localized.</span>')
  .pauseFor(2000)
  .deleteAll()
  .start()
}}
/>
    </Title>
    <SubTitle>
    Your official Identity minted as an NFT 📱 have your Identity authorized without having to reveal any of your personal Details, just what’s needed 😏
  </SubTitle>
  <ButtonContainer>
  <Button text="Mint Your Identity"/>
  <Button text="CTA Number 2"/>
</ButtonContainer>
  </>
  )
};

export default TypeWriterText