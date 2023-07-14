import "./App.css";
import "./styles.css";
import { useState } from "react";
function App() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [university, setUniversity] = useState("");
  const [faculty, setFaculty] = useState("");
  const [comments, setComments] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);

    if (!validatePhoneNumber(value)) {
      setPhoneNumberError("Invalid phone number format");
    } else {
      setPhoneNumberError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d+$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  return (
    <div className="App">
      <div>
        <h1>Form</h1>
        <form>
          <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={handleEmailChange} />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            {phoneNumberError && <p className="error">{phoneNumberError}</p>}
          </div>
          <div>
            <label>University:</label>
            <input
              type="text"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </div>
          <div>
            <label>Faculty:</label>
            <input
              type="text"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
            />
          </div>
          <div>
            <label>Additional Comments:</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
