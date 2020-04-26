import React from 'react';
import { Link } from 'react-router-dom';
import face from "../images/face.png";
import linked from "../images/linked.png";
import twitt from "../images/twitter.png";

const FooterComponent = (props) =>{
    return(
            <div className="footC col-md-12">          
                <div className="footC__footContainer1 ">
                  <hr className="footC__footContainer1__line-top"/>
                    <div className="footC__footContainer1__info-foot">
                        <h4 className="footC__footContainer1__info-foot--h4">Kontakt :</h4>
                        <p className="footC__footContainer1__info-foot--p">0047-92698012</p>
                        <p className="footC__footContainer1__info-foot--p">mohammedhameed@hotmail.com</p>
                    </div> 
                </div> 
                <div className="footC__footContainer2 ">
                     
                    <div className="footC__footContainer2__icons row">
                    <Link to="faceb"><img className="footC__footContainer2__icons--face " src={face} alt="face" /></Link>
                    <Link to="linkedin"><img className="footC__footContainer2__icons--linked " src={linked} alt="link" /></Link>
                        <img className="footC__footContainer2__icons--twitt " src={twitt} alt="twitt"  /> 
                    </div>
                    <div className="footC__footContainer2__copy-right" >
                        <p className="footC__footContainer2__copy-right--p">@CopyRights Faisal Hameed 2020</p>
                    </div>
                </div> 
                <div className="footC__footContainer3 ">
                    <hr className="footC__footContainer3__line-top"/> 
                    <div className="footC__footContainer3__info-foot">
                        <h4 className="footC__footContainer3__info-foot--h4">Addresse :</h4>
                        <p className="footC__footContainer3__info-foot--p">Fossumberget 3a</p>
                        <p className="footC__footContainer3__info-foot--p">0983 Oslo, Norway</p>
                    </div> 
                </div> 
            </div>
    )
}
export default FooterComponent;