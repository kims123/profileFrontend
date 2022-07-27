import React from "react";

class ProfilInfo extends React.Component {

    state = {
        highlightedUser: "",
        imageData: ""
    }

    UNSAFE_componentWillReceiveProps = (props) => {
        console.log("componentDidUpdate: " + props.highlightedUser)
        this.setState({highlightedUser: props.highlightedUser})

        if (props.highlightedUser.profilePicture != null) {
            console.log("Fant profilbilde")
            this.setState({imageData: `data:image/png;base64,${props.highlightedUser.profilePicture}`})
        } else {
            this.setState({imageData: "https://4.bp.blogspot.com/_ndu1QvzN_g4/TGyv2ll3qJI/AAAAAAAAAJs/ZWV9JPibojA/s1600/fb-default-pics-2.jpg"})
        }

    }

    render() {
        console.log("ProfilInfo render")
        return (
            <div>
                <div>
                    <h2 id="profilinfo-headline">'s profils info</h2>

                    <img id="profilinfo-image" alt="not found" width={"250px"}
                         src={this.state.imageData}></img>
                    <p id="profilinfo-msg"></p>
                    <p id="profilinfo-text-info-username">Username: {this.state.highlightedUser.username}</p>
                    <p id="profilinfo-text-info-email">Email: {this.state.highlightedUser.email}</p>
                    <p id="profilinfo-text-info-age">Age: {this.state.highlightedUser.age}</p>
                </div>
            </div>
        )
    }
}

export default ProfilInfo