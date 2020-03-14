import React from "react";
// Jsxの基本文法をまとめるコンポーネント

export default class Jsxt extends React.Component {
    constructor() {
        super();
        this.name = "constractorのメンバー変数this.nameのTsutomu"
    }
    render() {
        let name = "renderで定義したTsutomu";
        return (
            <div>
                <h1>Welcom!3</h1>
                <h1>It's works!</h1>
                <h1>He is {name}!</h1>
                <h1>He is {this.name}!</h1>
                <h1>The answer is {1 + 2}!</h1>
                <h1>The calclation's result is {this.get_result(10)}!</h1>
                <h1>The fast calculation's result is {((num) => { return 1 + num; })(20)}!</h1>
            </div>
        );
    }
    // retrun内のthis.の呼び出しする関数は、render()の外
    get_result(num) {
        return 1 + num;
    }

}

