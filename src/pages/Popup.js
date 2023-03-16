import React, {useState} from 'react';
import createAgent from './licensees';
import addAgent from './licensees';

function PopupNewAgent() {
    const [showPopup, setShowPopup] = useState(false)
    const [user_id, setUser] = useState('');
    const [licensee_number, setLicensee] = useState('');


    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const handleLicenseeChange = (event) => {
        setLicensee(event.target.value);
    }

    const handleUserChange = (event) => {
        setUser(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('User: ${user_id}, Licensee : ${licensee_number}');
        togglePopup();
    }

    return(
        <div>
            <button onClick={togglePopup}>Open Popup</button>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                    <h2>New Agent info</h2>
                    <form onSubmit={handleSubmit}>
                    <label>
                            user_id:
                            <input type="text" name="user_id" value={user_id} onChange={handleUserChange}/><br></br>
                        </label>
                        <label>
                            licensee_number:
                            <input type="text" name="licensee_number" value={licensee_number} onChange={handleLicenseeChange}/><br></br>
                        </label>
                        {/*<label>
                            first_name:
                            <input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange}/><br></br>
                        </label>
                        <label>
                            last_name:
                            <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange}/><br></br>
                        </label>
                        <label>
                            email:
                            <input type="text" name="email" value={formData.email} onChange={handleInputChange}/><br></br>
                        </label>
                        <label>
                            phone_number:
                            <input type="text" name="phone_number" value={formData.phone_number} onChange={handleInputChange}/><br></br>
                       </label>*/}
                        <button onClick = {createAgent}>Create Licensee</button>
                    </form>
                    <button onClick={togglePopup}>Close Popup</button>
                </div>
                </div>    
            )}
        </div>
    )
};

export default PopupNewAgent