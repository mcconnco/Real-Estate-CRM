import React, { useState } from 'react';
const { myHttpPost } = require('../service/httpService');

function PopupNewAgent() {
    const [showPopup, setShowPopup] = useState(false)

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var currentUser = JSON.parse(atob(localStorage.getItem("user_details")))
        console.log('User:' + currentUser.id_user);
        console.log('Licensee Number:' + document.getElementById('licensee_number').value);
        togglePopup();
    }

    function createAgent() {
        var currentUser = JSON.parse(atob(localStorage.getItem("user_details")))
        var id_user = currentUser.id_user //document.getElementById('user_id').value
        var agent_number = document.getElementById('licensee_number').value
        addAgent(id_user, agent_number);
    }

    function addAgent(id_user, agent_number) {
		var data = {
			"id_user": id_user,
			"agent_number": agent_number,
		}
		myHttpPost('Agent/addAgent', data).then(result => {
			console.log("All user data: " + JSON.stringify(result));
			if (result.success){
				alert(result.message);
			} else {
				alert("An error has ocurred: " + result.message);
			}
			
		}).catch(error => {
			alert("An error has ocurred: " + error);
		});
	}

    return (
        <div>
            <button onClick={togglePopup}>Open Popup</button>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>New Agent info</h2>
                        <form onSubmit={handleSubmit}>
                            {/*<label>User ID:</label>
                            <input type="text" id="user_id" placeholder='User ID' /><br />*/}
                            <label>Licensee Number:</label>
                            <input type="text" id="licensee_number" placeholder='Licensee Number' /><br />

                            <button onClick={createAgent}>Create Licensee</button>
                        </form>
                        <button onClick={togglePopup}>Close Popup</button>
                    </div>
                </div>
            )}
        </div>
    )
};

export default PopupNewAgent