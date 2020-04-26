import React from 'react';
import { Link } from 'react-router-dom';
import game from "../images/Game_Of_Trones.png";
import nasa from "../images/Nasa.png";
import bess from "../images/Bessegen.png";
import home from "../images/Homefair.png";
import un from "../images/Un.png";
import FooterComponent from "../components/footer";
import design from "../images/design-system.png";
import logo2 from "../images/logo-2.png";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";

export default function Home(props) {
 return(
        <div className="homeCont">
            <img className="homeCont__logo2" src={logo2} alt="logo"></img>
            <h1 className="homeCont__h1">Portfolio</h1>
            <h2 className="homeCont__h2">My Projects</h2>         
            <MDBCarousel activeItem={1}length={6}showControls={true}showIndicators={true}className="homeCont__MDBCarousel">
                <MDBCarouselInner className="homeCont__MDBCarousel__MDBCarouselInner">
                    <MDBCarouselItem className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem" itemId="1">
                        <MDBView className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView">
                            <Link className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView--Link" to="got"><img className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView--Link__img1 col-md-12" src={game} alt="game"></img></Link>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem" itemId="2">
                        <MDBView className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView">
                            <Link className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView--Link" to="nasa"><img className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView--Link__img2 col-md-12" src={nasa} alt="nasa"></img></Link>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem" itemId="3">
                        <MDBView className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView">
                            <Link className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView--Link" to="bess"><img className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView--Link__img3 col-md-12" src={bess} alt="bess"></img></Link>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem" itemId="4">
                        <MDBView className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView">
                            <Link className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView--Link" to="home"><img className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView--Link__img4 col-md-12" src={home} alt="home"></img></Link>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem" itemId="5">
                        <MDBView className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView">
                            <Link className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView--Link" to="un"><img className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView--Link__img5 col-md-12" src={un} alt="un"></img></Link>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem" itemId="6">
                        <MDBView className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView">
                            <Link className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView--Link" to="design"><img className="homeCont__MDBCarousel__MDBCarouselInner--MDBCarouselItem__MDBView--Link__img6 col-md-12" src={design} alt="design"></img></Link>
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
            <FooterComponent />
        </div>   
   )
}
















