import React , { lazy, Suspense } from 'react'
import styled , {keyframes} from 'styled-components'
import RoundTextWhite from '../../assests/Rounded.png'
import Loading from '../Loading'
import Footer from '../Footer'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useLayoutEffect } from 'react'

const TypeWriterText = lazy(() => import('../TypeWriterText'));
const CoverProfile = lazy(() => import('../CoverProfile'));

const rotate=keyframes`
100%{
  transform:rotate(1turn);
}
`
const Round =styled.div`
position:absolute;
bottom:-20%;
right:85%;
width:6rem;
height:6rem;
border:1px solid ${props=>props.theme.text};
border-radius:50%;

img{
  width:100%;
  height:auto;
animation:${rotate} 6s linear infinite reverse;
}
@media (max-width: 64em) {
  width: 4rem;
  height: 4rem;
  left: none;
  right: 2rem;
  bottom: 100%;
}
@media (max-width: 48em) {
  
  right: 1rem;
}
`

const Section =styled.section`
min-height:60vh;
width:100vw;
position:relative;
background-color:#010220;
display:flex;
align-items:center;
${'' /* opacity:0; */}
justify-content:space-between;
`
const Container =styled.div`
width:75%;
min-height:75vh;
margin:0 auto;
// background-color:lightblue;
display:flex;
justify-content:space-between;
align-items:center;

@media (max-width: 64em) {
  width: 85%;
}
@media (max-width: 48em) {
  flex-direction: column-reverse;
  width: 100%;
  &>*:first-child{
    width: 100%;
    margin-top: 2rem;
  }
}
`
const Box =styled.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Circle =styled.span`
width:3rem;
height:3rem;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;

position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);

background-color:${props=>props.theme.text};
color:${props=>props.theme.body};
font-size:${props=>props.theme.fontxl};

@media (max-width: 64em) {
  width: 2rem;
  height: 2rem;
font-size:${props => props.theme.fontlg};
}
`

function Home() {

 
  return (
    <>
<Section>
  <Container>
<Box>        
         <Suspense fallback={<Loading />}>
          <TypeWriterText /></Suspense>
        </Box>
        <Box>
        <Suspense fallback={<Loading />}>
          <CoverProfile/></Suspense> 
          </Box>
          
      <Round>
        <Circle>
          &#x2193;
        </Circle>
        <img width={500} height={400} src={RoundTextWhite} alt="Decentralization"/>

       </Round>
      
    </Container>

  </Section>
  <Footer/>
    </>
  )
}

export default Home