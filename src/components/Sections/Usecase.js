import React from 'react'
import img from "../../assests/plug.png"
import mob from "../../assests/mob.png"
import mob2 from "../../assests/mob2.png"
import moble from "../../assests/moble.png"
import mobri from "../../assests/mobri.png"
import mobup from "../../assests/mobup.png"

const Usecase = () => {
  return (
    <>
      <div className='page1' style={{ backgroundColor: "#010220", width:"100vw",minHeight: "100vh",position:"relative"}}>
        <div style={{
          position: "absolute",
          left: " calc(50% - 550px/2 + 0.73px)",
          top: "80px",
        }}>
          <img style={{ backgroundColor: "", width: "600px", height: "40px" }} src={img} alt="" />

        </div>

        <div className='box' style={{
          width: "300px",
          height: " 60.5px",

          background: "#5858FF",
          borderRadius: "60px",

          position: "absolute",
          top: "150px",
          left: "530px",

          /* Inside auto layout */

          flex: "none",
          order: 0,
          flexGrow: 0,
          // backgroundColor:"red"
        }}>
          <button style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: "15px 29.8281px 9.5px 30px",

            position: "absolute",
            width: "174.83px",
            height: " 49.5px",
            left: "8px",
            top: "5px",

            background: "linear-gradient(90deg, #13A5D3 0%, #1B6BEC 32.29%, #9824CF 100%)",
            borderRadius: "47px",
            color: "white"
          }}>
            Plug and play

          </button>
          <p
            style={{
              position: "absolute",
              width: "83px",
              height: "32px",
              left: "200.2px",
              top: "13px",

              fontStyle: "normal",
              fontWeight: "700",
              fontsize: "18px",
              lineHeight: "32px",
              /* identical to box height, or 175% */

              display: "flex",
              alignItems: "center",

              color: "white"
            }}>self-Host</p>
        </div>

        <div className="mobile" >
          <img src={mob} alt="" style={{
            position: "absolute",
            bottom: "10px",
            right: "100px",
            height: "460px"
          }} />
          <div className='mobi2'>
            <img src={mob2} alt="" style={{
              position: "absolute",
              bottom: "100px",
              right: "255px",
              height: "200px"

            }} />
            <div className='mobile'>
              <img src={moble} alt="" style={{
                position: "absolute",
                bottom: "190px",
                right: "160px",
                height: "100px"
              }} />
              <div className='mobireg'>
                <img src={mobri} alt="" style={{
                  position: "absolute",
                  bottom: "110px",
                  right: "440px",
                  height: "100px"
                }} />
              </div>
              <div className='mobiupp'>
                <img src={mobup} alt="" style={{
                  position: "absolute",
                  bottom: "320px",
                  right: "320px",
                  height: "30px"
                }} />
              </div>

              <div className='botm' style={{
                width: "230.69px",
                height: " 35.5px",

                background: "#7233B4",
                borderRadius: "60px",

                position: "absolute",
                bottom: "45px",
                right: "246.5px",


                /* Inside auto layout */

                flex: "none",
                order: 0,
                flexGrow: 0,
              }}>
                <p style={{display:"flex",alignItems:"center",justifyContent:"center", width:"100%",fontSize:"1rem", color: "white" ,marginTop:"7px"}}> Save these security factors </p>
              </div>
            </div>
          </div>
        </div>

        <div className='build' style={{ color: "#fff" }}>
          <h1 style={{
            position: "absolute",
            width: "600.47px",
            height: "129px",
            bottom: "380px",
            left: "200px",

            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "70px",
            lineHeight: "56px",
            /* or 100% */

            display: "flex",
            alignItems: "center",
            letterSpacing: "-1px",
          }}>Build and</h1>
          <h1
            style={{
              position: "absolute",
              width: "600.47px",
              height: "129px",
              bottom: "300px",
              left: "200px",

              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "70px",
              lineHeight: "56px",
              /* or 100% */

              display: "flex",
              alignItems: "center",
              letterSpacing: "-1px",
            }}>Launch fast</h1>
          <p style={{
            position: "absolute",
            width: "548.61px",
            height: "51px",
            left: "200px",
            bottom: "250px",

            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "27px",
            /* or 150% */

            color: "gray",
            display: "flex",
            alignItems: "center"
          }}>save aSave development time with our plug and play solution, whitelabel it according to your brand and ship out your product within weeks</p>

          <h5 style={{
            position: "absolute",
            width: "548.61px",
            height: "51px",
            left: "200px",
            bottom: "170px",

            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "32px",
          }}>Plug and Play SDK</h5>

          <h6 style={{
            position: "absolute",
            width: "200px",
            height: "24px",
            left: "240px",
            bottom: "80px",

            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "27px",
          }}> White Labelable design</h6>

          <p style={{
            position: "absolute",
            width: "548.61px",
            height: "51px",
            left: "240px",
            bottom: "35px",

            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "27px",
            /* or 150% */

            color: "gray",
            display: "flex",
            alignItems: "center"
          }} >Self-hosting</p>

        </div>

      </div>
    </>
    
  )
}

export default Usecase