import BuggyCounter from "./BuggyCounter.jsx";
import {Component} from "react";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Color from "./Color.jsx";
import {Child, Events} from "./Events.jsx";

class App extends Component {
    render() {
        return (
            <div>
                <h3>Click on the numbers to increase the counters.
                    The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a
                    component.</h3>
                <div className="Simulation1">These two counters are inside the same error boundary. If one crashes, the
                    error boundary will replace both of them.
                    <ErrorBoundary>
                        <BuggyCounter/>
                        <BuggyCounter/>
                    </ErrorBoundary>
                </div>
                <div className="Simulation2">These two counters are each inside of their own error boundary. So if one
                    crashes, the other is not affected.
                    <ErrorBoundary>
                        <BuggyCounter/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <BuggyCounter/>
                    </ErrorBoundary>
                </div>
                <div className="Simulation3">This counter is not inside of boundary. So if crashes, all other components
                    are deleted.
                    <div>
                        <BuggyCounter/>
                    </div>
                </div>
                <div>
                    <Color/>
                </div>
                <div>
                    <Events/>
                </div>
            </div>
        );
    }
}

export default App;