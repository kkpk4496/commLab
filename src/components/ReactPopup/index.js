import Popup from 'reactjs-popup'
import "./index.css"
import {MdGroups2} from "react-icons/md"
import{IoMdClose} from "react-icons/io"
import validator from "validator";
import {useState} from "react"
const ReactPopUp = () => {
    const [email,setEmail]=useState("")
    const [error, setError] = useState("");
    const onSubmitSuccess=(event)=>{
        event.preventDefault();

    }
    const onEnterMail=(event)=>{
        setEmail(event.target.value)
        if(event.target.value.endsWith("@gmail.com")){
            setError("Please enter your business email address. This form does not accept addresses from gmail.com.")
        }
        else{
            setError("")
        }
        
    }
    
   return( <div className="popup-container">
      <Popup
        modal
        trigger={
          <div type="button" className="trigger-button">
          <MdGroups2 className="react-icon1"/>
            SECURE YOUR SEAT
          </div>
        }
      >
        {close => (
          <>
            <div className="login-bg">
            <div style={{textAlign:"end"}}>
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose/>
            </button>
            </div>
            <center>
              <h1 className="popup-heading">Register For The FREE Webinar</h1>
              </center>
              <form onSubmit={onSubmitSuccess}>
              <div className="input-flex">
              <div>
                <label id="firstname" className="label">First Name<span className="for-span">*</span></label><br/>
                <input type="text" htmlFor="firstname" className="input" placeholder='First Name'/>
                </div>
                <div>
                <label id="lastname" className="label">Last name<span className="for-span">*</span></label><br/>
                <input type="text" htmlFor="lastname" className="input" placeholder='Last name'/>
                </div>
                </div>
                <label id="businessemail" className="label">Business Email<span className="for-span">*</span></label><br/>
                <input type="email" htmlFor="businessemail" className="input2" placeholder='Business Email' onChange={onEnterMail}/>
                <p className="error">{error}</p>
                <label id="phonenumber" className="label">Phone Number<span className="for-span">*</span></label><br/>
                <input type="tel" htmlFor="phonenumber" className="input" placeholder='Phone Number'/>
                <center>
                {/* <button  type="submit"></button> */}
                <a href="https://resources.commlabindia.com/webinar/corporate-training-with-ai-exclusive-jan2024?submissionGuid=6983f554-83ea-4168-acb0-11a1956de947" className="secure-your-seat-button">SECURE YOUR SEAT</a>
                </center>
              </form>
             

            </div>
            
          </>
        )}
      </Popup>
    </div>
   )
}
   export default ReactPopUp