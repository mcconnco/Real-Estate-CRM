import React, {useState} from 'react';

function PopupNewAgent() {
    const [showPopup, setShowPopup] = useState(false)
    const [formData, setFormData] = useState({
        licensee_number: '',
        first_name: '',
        last_name: '',
        email: '',
        phone_number: ''
    });


    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const handleInputChange = (event) => {
        const {licensee_number, value} = event.target;
        setFormData({
            ...formData,
            [licensee_number]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
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
                            licensee_number:
                            <input type="text" name="licensee_number" value={formData.licensee_number} onChange={handleInputChange}/><br></br>
                        </label>
                        <label>
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
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                    <button onClick={togglePopup}>Close Popup</button>
                </div>
                </div>    
            )}
        </div>
    )
};

export default PopupNewAgent