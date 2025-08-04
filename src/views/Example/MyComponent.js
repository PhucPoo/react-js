import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Phuc",
        channel: "PhucPoo",
    }
    handleOnchange = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    /*

    JSX

    */
    render() {
        let name = "PhucPoo";

        return (
            <React.Fragment>
                <div className="MyComponent">
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnchange(event)}
                        ></input>
                    Hello, {this.state.name} 
                </div>
                <div>
                    My youtube channel: {this.state.channel}
                </div>
            </React.Fragment>
        );
    }
}
export default MyComponent;