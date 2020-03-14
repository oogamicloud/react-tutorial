import React from "react";

export default class Statechange extends React.Component {
    constructor() {
        super();
        this.state = {name: "メンバー変数で設定したState初期値のnameの値"};
    }
    render(){
        setTimeout(
            () => {this.setState({name: "setTimeoutの時間後のsetState処理により変更されたstateのnameの値"});}
            , 3000);
        return(
            <div>
                {this.state.name}
            </div>
        );
    }

}