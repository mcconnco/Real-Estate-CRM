import React, {useState} from 'react';

function updateClient(agent_id, client_id, first_name, last_name, address, city, email, phone_num, sw_active) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({
            "id_agent": agent_id,
            "id_client": client_id,
            "first_name": first_name,
            "last_name": last_name,
            "address": address,
            "city": city,
            "email": email,
            "phone_num": phone_num,
            "sw_active": sw_active,
        })
    };
    fetch('https://fastlinkcrm.azurewebsites.net/api/Client/updateClient', requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.success) {

            }
            else {

            }

        window.location.reload()
        });
}

function PopupUpdateClient() {
    const [showPopup, setShowPopup] = useState(false);
    const [client_id, setClientId] = useState("");
    const [agent_id, setAgentId] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [phone_num, setPhoneNum] = useState("");
    const [sw_active, setActive] = useState("");

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const agent_id = event.target.elements.agent_id.value
        const client_id = event.target.elements.client_id.value
        const first_name = event.target.elements.first_name.value
        const last_name = event.target.elements.last_name.value
        const address = event.target.elements.address.value
        const city = event.target.elements.city.value
        const email = event.target.elements.email.value
        const phone_num = event.target.elements.phone_num.value
        const sw_active = event.target.elements.sw_active.value
        console.log(`Updated client with client_id: ${client_id}`);
        togglePopup();
        updateClient(agent_id, client_id, first_name, last_name, address, city, email, phone_num, sw_active);
    }

    return(
        <div>
            <button className="updateClient rounded-pill" onClick={togglePopup}>Update Client</button>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                    <h2>Update Client Information</h2>
                    <form onSubmit={handleSubmit}>
                        <label>id_agent:
                            <input 
                                name="agent_id"
                                id="agent_id_input_id" 
                                type="text" 
                                value={agent_id} 
                                onChange={(e) => setAgentId(e.target.value)}/>
                                <br></br>
                        </label>
                        <label>id_client:
                            <input 
                                name="client_id"
                                id="client_id_input_id" 
                                type="text" 
                                value={client_id} 
                                onChange={(e) => setClientId(e.target.value)}/>
                                <br></br>
                        </label>
                        <label>first_name:
                            <input 
                                name="first_name"
                                id="first_name_input_id" 
                                type="text" 
                                value={first_name} 
                                onChange={(e) => setFirstName(e.target.value)}/>
                                <br></br>
                        </label>
                        <label>last_name:
                            <input 
                                name="last_name"
                                id="last_name_input_id" 
                                type="text" 
                                value={last_name} 
                                onChange={(e) => setLastName(e.target.value)}/>
                                <br></br>
                        </label>
                        <label>address:
                            <input 
                                name="address"
                                id="address_input_id" 
                                type="text" 
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)}/>
                                <br></br>
                        </label>
                        <label>city:
                            <input 
                                name="city"
                                id="city_input_id" 
                                type="text" 
                                value={city} 
                                onChange={(e) => setCity(e.target.value)}/>
                                <br></br>
                        </label>
                        <label>email:
                            <input 
                                name="email"
                                id="email_input_id" 
                                type="text" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}/>
                                <br></br>
                        </label>
                        <label>phone_num:
                            <input 
                                name="phone_num"
                                id="phone_num_input_id" 
                                type="text" 
                                value={phone_num} 
                                onChange={(e) => setPhoneNum(e.target.value)}/>
                                <br></br>
                        </label>
                        <label>sw_active:
                            <input 
                                name="sw_active"
                                id="sw_active_input_id" 
                                type="text" 
                                value={sw_active} 
                                onChange={(e) => setActive(e.target.value)}/>
                                <br></br>
                        </label>
                       
                        <button type ="submit">Update</button>
                    </form>
                    <button onClick={togglePopup}>Close Popup</button>
                </div>
                </div>    
            )}
        </div>
    )
};

export default PopupUpdateClient;