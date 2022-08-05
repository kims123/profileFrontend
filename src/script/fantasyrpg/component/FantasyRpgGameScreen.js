import React from "react";

class FantasyRpgGameScreen extends React.Component {

    state = {
        name: "",
        class: "",
        level: 0
    }

    UNSAFE_componentWillReceiveProps = (props) => {
        console.log("componentDidUpdate: " + props.refresh)

        this.setState({name: "Et navn"})
        this.setState({class: "En class"})
        this.setState({level: 1})
    }


    render() {
        return (
            <div>
                <h2>Game screen</h2>
                <p>Name: {this.state.name}</p>
                <p>Class: {this.state.class}</p>
                <p>Level: {this.state.level}</p>
            </div>
        )
    }
}

export default FantasyRpgGameScreen