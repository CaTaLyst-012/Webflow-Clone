import React, {useState} from 'react'
import './heroSection.css';
import video from '../../../assets/video/videoFile.mp4';


// const [formData, setFormData] = useState({
//   name: '',
//   email: '',
//   company: '',
//   message: ''
// });

function HeroSection() {
  return (
    <div className='hero-container'>
        <div className="herocontent-left">
          <h1>Faster builds.</h1>
          <h1>Enterprise scale.</h1>
          <h1>Real results.</h1>
          <p>Webflow Enterprise empowers your team to visually build, manage, <br /> and optimize sophisticated web experiences at scale — all backed <br /> by enterprise-grade security.</p> <br /> <br />
          <button className='demo-button'> ▶️Watch demo</button>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

          <p className='moreinfo'>⬇ MORE ON WEBFLOW ENTERPRISE</p>
        



        </div> 

        <div className="herocontent-right">
          <form action="onSubmit" className='heroForm'>
            <div className="firstDual-Ctn">
              <div className="businessEmail-Ctn">
                <label htmlFor="businessEmail" className='label'>BUSINESS EMAIL*</label> 
                <input type="email" placeholder='Enter your email' className='businessEmail' id='businessEmail' required />
              </div>

              <div className="companySize-Ctn">

                  <label htmlFor="companySize" className='label'>COMPANY SIZE*</label>
                    <select id='companySize' className='companySize'name='companySize' required>
                        <option value="">Select...</option>
                        <option value="1-50">1–50 employees</option>
                        <option value="51-50">51–200 employees</option>
                        <option value="201-200">201–2500 employees</option>
                        <option value="2501-10000">2501–10000 employees</option>
                        <option value="10000+">10000+ employees</option>
                      </select>

              </div>
            </div>


            <div className="secondDual-Ctn">
              <div className="supportCtn">
                <label htmlFor="support" className='label'>HOW CAN WE SUPPORT <span className='supportSpan'>YOU?*</span></label>
                <select name="support" id="support" className='support'>
                  <option value="">Select...</option>
                  <option value="sales">I want to evaluate Webflow for my organization</option>
                  <option value="support">I want to evaluate Optimize for my organization</option>
                  <option value="other">I want to biy licences or upgrade</option>
                  <option value="other">I need assistance with an enterprise client project</option>
                  <option value="other">I want to learn more about partnering with Webflow</option>
                  <option value="other">I need support</option>
                </select>
              </div>

                  
              <div className="firstName-Ctn">
                <label htmlFor="firstName" className='label'>FIRST NAME*</label>
                <input type="text" name='firstName' id='firstName' className='firstName' placeholder='Enter your firstname' required />
              </div>

            </div>


            <div className="thirdDual-Ctn">
              <div className="lastName-Ctn">
                <label htmlFor="lastName" className='label'>LAST NAME*</label>
                <input type="text" name='lastName' id='lastName' className='lastName' placeholder='Enter your lastname' required />
              </div>

              <div className="company-Ctn">
                <label htmlFor="company" className='label'>COMPANY*</label>
                <input type="text" name='company' id='company' className='company' placeholder='Where do you work?' required />
              </div>

            </div>


            <div className="fourthDual-Ctn">
              <div className="title-Ctn">
                <label htmlFor="title" className='label'>TITLE*</label>
                <input type="text" name='title' id='title' className='title' placeholder='What is your job title?' required />
              </div>

              <div className="countryCtn">
                <label htmlFor="country" className='label'>COUNTRY*</label>
                <select name="country" id="country" className='country' required>
                      <option value="">Select Country...</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia (Plurinational State of)</option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BR">Brazil</option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="CV">Cabo Verde</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CD">Congo (Democratic Republic of the)</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Côte d’Ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czechia</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="SZ">Eswatini</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands (Malvinas)</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran (Islamic Republic of)</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KP">Korea (Democratic People’s Republic of)</option>
                      <option value="KR">Korea (Republic of)</option>
                      <option value="XK">Kosovo</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">Lao People’s Democratic Republic</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">Micronesia (Federated States of)</option>
                      <option value="MD">Moldova (Republic of)</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="MK">North Macedonia</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">Palestine, State of</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation</option>
                      <option value="RW">Rwanda</option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="VC">Saint Vincent and the Grenadines</option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syrian Arab Republic</option>
                      <option value="TW">Taiwan, Province of China</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania, United Republic of</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Türkiye</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom of Great Britain and Northern Ireland</option>
                      <option value="US">United States of America</option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VA">Vatican City</option>
                      <option value="VE">Venezuela (Bolivarian Republic of)</option>
                      <option value="VN">Viet Nam</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>

              </div>

            </div>

            <div className="phoneNum-Ctn">
              <label htmlFor="phoneNum" className='label'>PHONE NUMBER</label>
              <input type="tel" id='phoneNum' className='phoneNum' placeholder='Enter your phone number' required/>
            </div>

            <div className="formFooter">
              <p className='privacyPara'>By submitting this form, you agree to Webflow’s Terms of <br />Service and Privacy Policy.</p>
              <button className='formBtn'>Talk to us</button>
            </div>

















          </form>


          
        </div>
    </div>
  )
}

export default HeroSection
