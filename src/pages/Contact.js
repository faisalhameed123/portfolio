import React, { useState } from 'react';
import logo2 from "../images/logo-2.png";
import FooterComponent from "../components/footer";

export default function Contact() {
  
    const [ NameError, setNameError ] = useState(false);
    const [ EmailError, setEmailError ] = useState(false);
    const [ MessageError, setMessageError ] = useState(false);
    const [ TelError, setTelError ] = useState(false);
    const emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const telPattern = /^(0047|\+47|47)?[2-9]\d{7}$/;

    const handleSubmit = (input) => {
        input.preventDefault();
        let name = input.target[0].value;
        let email = input.target[1].value;
        let telephone = input.target[2].value;
        let message = input.target[3].value; 
        if( name === ''|| (! emailPattern.test(email)) || (! telPattern.test(telephone))|| ( message === '') ){
                alert('form submitted unsuccesfull')
        }
        else{
            alert('form submitted succesfull')
        }
        if  (name === ''){
                setNameError(true) 
        }
            else    
                { setNameError(false)
            } 

        if  (! emailPattern.test(email)){
                setEmailError(true) 
        }
            else    
                { setEmailError(false)
            } 

        if  (! telPattern.test(telephone)){
                setTelError(true) 
        }
            else    
                { setTelError(false)
            }
               
        if  ( message === ''){
                setMessageError(true) 
        }
            else    
                { setMessageError(false)
            }
    }
 return (
    <>
      <div className="contactContainer">
            <div className="row ">
              <div className="col-md-8"></div>
                 <div className="contactContainer__row--3 col-md-4">
                    <img className="contactContainer__row--3__logo" src={logo2} alt="logo"></img>
                 </div>
           </div>
            <div className="contactContainer__row row">
                <div className="col-md-4">
                </div>
                <div className="contactContainer__row--4 col-md-4">   
                        <h1 className="contactContainer__row--4__h1" >Contact form</h1>
                    <form onSubmit={handleSubmit}>
                        <p className="contactContainer__row--4__p">Enter your CompanyName</p>
                        <input type='text'
                                name='Name'
                                className='contactContainer__row--4__form-control cinputform'
                        />
                            <p className={(NameError)?'contactContainer__row--4__error' : 'contactContainer__row--4__error__hide'}>CompanyName Required</p>
                            <br />
                            <p className="contactContainer__row--4__p">Enter your Email address</p>
                        <input type='text'
                                name='Email'
                                className='contactContainer__row--4__form-control cinputform'
                        />
                            <p className={(EmailError) ? 'contactContainer__row--4__error' : 'contactContainer__row--4__error__hide'}>Email Invalid</p>
                            <br />
                            <p className="contactContainer__row--4__p">Enter your Tlf-number</p>
                        <input type='number'
                                name='Telephone'
                                className='contactContainer__row--4__form-control cinputform'
                                placeholder='XXXXXXXX'
                        />
                            <p className={(TelError) ? 'contactContainer__row--4__error' : 'contactContainer__row--4__error__hide'}>Telephone nr is Invalid</p>
                            <br />
                            <p className="contactContainer__row--4__p">Enter message</p>
                        <textarea type='text'
                                name='Message'
                                className='contactContainer__row--4__form-control cinputform'
                        />
                            <p className={(MessageError) ? 'contactContainer__row--4__error' : 'contactContainer__row--4__error__hide'}>Invalid message</p>
                            <br />
                            <input type="submit"  className="contactContainer__row--4__btn btn-primary" />    
                    </form>
                </div>
                    <div className="col-md-4">
                    </div>
          </div>  
            <FooterComponent />
        </div> 
    </>  
  );                            
}










 




