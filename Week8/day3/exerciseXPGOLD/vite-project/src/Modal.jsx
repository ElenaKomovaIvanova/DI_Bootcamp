import React from 'react';
import './App.css';
import ReactDOM, {render} from "react-dom"; // Import styles for the modal

class Modal extends React.Component {
    render() {
        return ReactDOM.createPortal(
            (
                <div className="modal-background">
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                </div>
            ),
            document.getElementById("modal-root")
        );
    }
}

export default Modal;
