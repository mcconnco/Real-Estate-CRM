import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '70%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function MyModalComponent(props) {
    function afterOpenModal(e) {
        props.onAfterOpen(e, 'After Modal Opened');
    }

    function onModalClose(event) {
        let data = { name: 'example', type: 'closed from child' };
        props.onCloseModal(event, data);
    }

    return (
        <div>
            <Modal
                isOpen={props.IsModalOpened}
                onAfterOpen={e => afterOpenModal(e)}
                style={customStyles}
                ariaHideApp={false}
            >
                <h2>{props.dynData.title}</h2>

                <div>
                    <label for="fname">First Name: </label>
                    <label>{props.agent_data.first_name}</label> <br />
                    <label for="fname">Last Name: </label>
                    <label>{props.agent_data.last_name}</label> <br />
                    <label for="fname">Email: </label>
                    <label>{props.agent_data.email}</label> <br />
                    <label for="fname">Phone: </label>
                    <label>{props.agent_data.phone_num}</label> <br />
                </div>
                <button onClick={e => onModalClose(e)}>close</button>
            </Modal>
        </div>
    );
}

export default MyModalComponent;
