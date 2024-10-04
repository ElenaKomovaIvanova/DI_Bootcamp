import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Modal from "./Modal.jsx";
import ErrorBoundaryApp from "./ErrorBoundary.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.componentDidCatch = this.componentDidCatch.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            isModalOpened: false,
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            isModalOpened: true,
            error: error,
            errorInfo: errorInfo,
        });
    }

    toggleModal() {
        this.setState(prevState => ({ isModalOpened: !prevState.isModalOpened }));
    }

    render() {
        const {
            isModalOpened,
            error,
            errorInfo,
        } = this.state;

        return (
            <div>
                <ErrorBoundaryApp />
                {
                    isModalOpened && error && (
                        <Modal>
                            <div>
                                {this.state.error && this.state.error.toString()}
                            </div>
                            <details style={{ whiteSpace: 'pre-wrap' }}>
                                {this.state.errorInfo.componentStack}
                                <br />
                                Please try it again
                                <br />
                            </details>
                            <button onClick={this.toggleModal}>Close</button>
                        </Modal>
                    )
                }
            </div>
        );
    }
}


export default App;
