import React, { useState, useEffect } from 'react';
import { Accordion,Card } from 'react-bootstrap';
import Logo from '../images/down-arrow.png';
import logo2 from "../images/logo-2.png";
import aboutBack from "../images/ipad.png";
import FooterComponent from "../components/footer";

export default function About(props) {
    const[apiData, setArrayData] = useState([]);
    useEffect(() => {  
      setArrayData([
        {
          heading: 'About me',
          answer:'My name is Faisal Hameed and im a Frontend developer. I have just finished my educatioan as a Frontend Developer and im very motivated for new challenges, im a very hardworking individual. I have a high working capacity and im good at adjusting to new working routines and environments, that allows me to perform my tasks accurately and efficiently. I have experience from different branches like Travel & Tourims, Transport, Restaurant and Supermarkets. Based on my motivation and the above qualifications, I am confident that I have a lot to contribute and look forward to further contact in the recruitment process.',
          state: 'false'
        },
        {
          heading: 'My Education',
          answer:'I have Graduation in General studies from college, then I studied Travel $ Tourism from NæringsAkademiet and after that i become Frontend Developer from Noroff (Technical School).',
          state: 'false'
        },
        {
          heading: 'My Skills',
          answer:'HTML-5 + React-Js + Css + Css-Frameworks(Sass,Scss,Less) + JavaScript + Gulp + Grunt + Adobe Xd + Sebre + Adobe Illustrator + Adobe Photoshop + Microsoft PowerPoint + Microsoft word + Microsoft Excel + Amadeus.',
          state: 'false'
        },
      ])
    },[])
      return (
        <>
            <div className="aboutContainer">
              <img className="aboutContainer__logo" src={logo2} alt="logo"></img>
              <img className="aboutContainer__aboutBack" src={aboutBack} alt="aboutback" ></img>
              <div className="aboutContainer__accordCont">
                {
                  (apiData!== undefined) ?        
                  apiData.map((value, index) => {
                    return ( 
                        <Accordion defaultActiveKey="1">
                            <Card className="aboutContainer__accordCont--cardheader">
                              <Accordion.Toggle className="toggel" as={Card.Header} eventKey="0">
                                  <div className=" row">
                                      <div className="col-md-4 col-sm-4 col-xs-5"><h1 className="aboutContainer__accordCont--cardheader__heading">{value.heading} </h1></div>
                                      <div className="col-md-8 col-sm-8 col-xs-7"><img className="aboutContainer__accordCont--cardheader__imager" src={Logo} alt="arrow"/></div>
                                  </div>  
                              </Accordion.Toggle>
                              <Accordion.Collapse className="aboutContainer__accordCont--cardheader__collapse" eventKey="0">
                                <Card.Body className="collapse--cardBody" >
                                <p className="aboutContainer__accordCont--cardheader__collapse--cardBody__p">{value.answer}</p>
                                </Card.Body>
                              </Accordion.Collapse>
                            </Card>
                        </Accordion>
                      )
                  }) :
                        <div></div>
                }  
              </div>
              <FooterComponent />
            </div>   
        </>  
      );           
  }
                  