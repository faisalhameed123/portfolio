import React from "react";
import { Link } from 'react-router-dom';
import profimg from "../images/profImg.png";
import telIcon from "../images/telIcon.png";
import emailIcon from "../images/emailIcon.png";
import mapIcon from "../images/mapIcon.png";
import arrowT from "../images/arrowT.png";
import face from "../images/face.png";
import linked from "../images/linked.png";
import logo2 from "../images/logo-2.png";
import FooterComponent from "../components/footer";

export default function Cv(props){
    return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="cvContainer row">
                            <div className=" cvContact col-md-3">
                                <div className="col-md-12">
                                    <img className="img-circle" src={profimg} alt="faisal" width="90%" />
                                </div>
                                <div className="col-md-12">
                                    <h4>My Contact</h4>
                                </div>
                                <div className="iconC col-md-12">
                                    <img src={telIcon} alt="tel" width="20%"/>
                                </div>
                                <div className="col-md-12">
                                    <p>0047-92698012</p>
                                </div>
                                <div className="iconC col-md-12">
                                    <img src={emailIcon} alt="email" width="20%"/>
                                </div>
                                <div className="col-md-12">
                                    <p>mohammedhameed@hotmail.com</p>
                                </div>
                                <div className="iconC col-md-12">
                                    <img src={mapIcon} alt="map" width="20%"/>
                                </div>
                                <div className="col-md-12">
                                    <p>Fossumberget 3 A</p>
                                </div>
                                <div className="col-md-12">
                                    <p>0983 Oslo</p>
                                </div>
                                <div className="col-md-12">
                                    <h4>Follow me</h4>
                                </div>
            
                                <div className="iconF col-md-12">
                                <Link to="faceb"><img src={face} alt="face" width="20%"/></Link>
                                </div>
                                <div className="col-md-12">
                                <p>www.facebook.com/faisal.hameed1</p>
                                </div>
                
                                <div className="iconF col-md-12">
                                <Link to="linkedin"><img src={linked} alt="map" width="20%"/></Link>
                                </div>
                                <div className="col-md-12">
                                <p>www.linkedin.com/in/faisal-hameed-6330897b/</p>
                                </div>
                            
                            </div>
                            <div className="col-md-9">
                                <div className="col-md-12">
                                    <h1>Curriculum Vitae</h1>
                                </div>
                            <div className="para1 col-md-12">
                                <div className="row">
                                        <div className="col-md-3">
                                            <img className="arrowH" src={arrowT} alt="arrow" width="20%"/>
                                        </div>
                                        <div className="col-md-9">
                                            <h3 className="infoHeading">Education</h3>
                                        </div>
                                </div>
                                <div className="col-md-12"> 
                                    <p className="infoP">2018-2020  ------------------------ Frontend Developer (Noroff Tecknical College)</p>
                                    <p className="infoP">2003-2004  ------------------------ Travel Coordinator (NæringsAkademiet Oslo)</p>
                                    <p className="infoP">2000-2003  ------------------------  General subjects (Ulsrud HighSchool)</p>
                                    </div>
                            </div>
                            <div className=" para2 col-md-12">
                                <div className="row">
                                        <div className="col-md-3">
                                            <img className="arrowH" src={arrowT} alt="arrow" width="20%"/>   
                                        </div>
                                        <div className="col-md-9">
                                        <h3 className="infoHeading">Work Experience</h3>
                                        </div>
                                </div>
                                <div className="col-md-12"> 
                                    <p className="infoP">2005-2020  ------------------------ Driver & Owner (OsloTaxi / NorgesTaxi)</p>
                                    <p className="infoP">2004-2005  ------------------------ Travel Agent (Travel center Oslo)</p>
                                    <p className="infoP">2002-2003  ------------------------  Post Delivery (Posten)</p>  
                                </div>
                            </div>
                            <div className=" para3 col-md-12">
                                <div className="row">
                                        <div className="col-md-3">
                                        <img className="arrowH" src={arrowT} alt="arrow" width="20%"/>
                                        </div>
                                        <div className="col-md-9">
                                        <h3 className="infoHeading">Laguages</h3>
                                        </div>
                                </div>
                                <div className="col-md-12"> 
                                    <p className="infoP">Norwegian  ------------------------  Frequent (Spoken & Written)</p>
                                    <p className="infoP">English  ------------------------  Frequent (Spoken & Written)</p>
                                    <p className="infoP">Urdu  ------------------------  Frequent (Spoken & Written)</p> 
                                </div>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="containerlogo">
                        <img src={logo2} alt="logo"></img>
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </div>
    )
}