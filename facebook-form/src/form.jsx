
import './form.css';
function Form(){
  return(
    <div>
      {/* <h1>I am ready</h1> */}

      <div className="parentcontainer">
            <div class="form-title">
                <h1>Create a new account</h1>
                <p>Its quick and easy</p>
            </div>
            <hr/>
            <div className="name">
             <form>
                <input className="input" type="text" placeholder="Firstname" /> 
                <input className="input" type="text" placeholder="Lastname" />  
             </form>    
            </div>
            <div className="dob">
                <h5>Date of birth</h5>
                <select className="cal">
                    <option className="date" selected>17</option>
                </select>
                <select className="cal">
                    <option className="date" disabled selected>Oct</option>
                </select>
                <select className="cal">
                    <option className="Date" disabled selected>2024</option>
                </select>
            </div>
            <div class="gender">
                <h5>Gender</h5>
                <div className="labelborder">
                    <label for="Female">Female</label>
                    <input type="radio" />
                </div>

                <div className="labelborder">
                    <label for="male">Male</label>
                    <input id="radio-input" type="radio" />
                </div>

                <div className="labelborder">
                    <label for="Custom">Custom</label>
                    <input type="radio" />
                </div>
            </div>
            <div className="mobile-email">
                <input type="text" placeholder="Mobile number or Email address" />
            </div>
            <div className="pass">
                <input type="password" placeholder="New password" />
            </div>
            <div className="description">
                <p>
                    People who use our service may have uploaded your contact information to<br/>
                    Facebook.<a href="">Learn more</a><br/><br/>
                    By clicking Sign Up, you agree to our <a href="">Terms, Privacy Policy and Cookies<br/>
                    Policy.</a>You may receive SMS notificatons from us and can opt out at any<br/>
                    time.
                  </p>
            </div>
            <div className="lastcontainer">
                <button type="submit">Sign Up</button>
                <p>Already have an account?</p>
            </div>
        
        </div>
      
    </div>
    
  );
}
export default Form;