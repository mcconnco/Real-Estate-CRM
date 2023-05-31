import React, {useState} from 'react';

function delAgent(agent_num) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({
            "id_agent": agent_num
        })
    };
    fetch('https://fastlinkcrm.azurewebsites.net/api/Agent/deleteAgent', requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.success) {

            }
            else {

            }

        window.location.reload()
        });
}

function PopupDeactivateAgent() {
    const [showPopup, setShowPopup] = useState(false);
    const [id_agent, setAgentId] = useState("");

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const agent_id = event.target.elements.id_agent.value
        console.log(`Deleted agent with id_agent: ${id_agent}`);
        togglePopup();
        delAgent(agent_id);
    }

    return(
        <div>
            <button className="rounded-pill" onClick={togglePopup}>Deactivate an Agent</button>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                    <h2>Deactivate Agent</h2>
                    <form onSubmit={handleSubmit}>
                        <label>id_agent:
                            <input 
                                name="id_agent"
                                id="id_agent_input_id" 
                                type="text" 
                                value={id_agent} 
                                onChange={(e) => setAgentId(e.target.value)}/>
                                <br></br>
                        </label>
                       <br></br>
                        <button className="rounded-pill" type ="submit">Deactivate Licensee</button>
                    </form>
                    <button className="rounded-pill" onClick={togglePopup}>Close Popup</button>
                </div>
                </div>    
            )}
        </div>
    )
};

export default PopupDeactivateAgent;