import React from "react";

export default class Title extends React.Component {
    render() {
        return (
            <div>
                <h1>This is just a h1 tag in Title.js</h1>
                <h1>{this.props.headertitle}</h1>
            </div>
        );
    }

}
