import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
    render() {
        console.log(this.props.name);  //nameの値をconsoleに出力
        console.log(this.props.title); //titleの値を
        //console.log(this.props);
        return (
            // Titleコンポーネント渡すプロパティ名headertitle={値}
            <Title headertitle={this.props.title} /> 
        );
    }
}