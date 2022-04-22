import React from "react"

class MenuButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };

    }

    render() {
        console.log(this.state.open)
        return (

            <div className={this.state.open ? "menu-open" : ""} id="menu-btn" onClick={() => this.setState({ open: !this.state.open }) }>
                <div className={this.state.open ? "menu-open" : ""} id="fbar-menu"></div>
                <div></div>
                <div className={this.state.open ? "menu-open" : ""} id="lbar-menu"></div>

            </div>
        );
    }
}

export default MenuButton