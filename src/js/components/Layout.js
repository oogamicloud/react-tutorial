import React from "react";

class Layout extends React.Component {

    constructor(){
        super(); //親クラスのコンストラクタの呼び出し
        this.name = "constractorのTsutomu"; //メンバー変数の定義
    }
    render()  {
        let name = "renderメソッドのTsutomu";
        return (
            <div>
                <h1>Welcom!3</h1>
                <h1>It's works!</h1>
                <h1>He is {name}!</h1>
                <h1>He is {this.name}!</h1>                
                <h1>The answer is {1+2}!</h1>
                <h1>The calclation's result is {this.get_calculate(10)}!</h1>
                <h1>The fast calculation's result is {((num) => { return 1 + num; })(20)}!</h1>
            </div>
        );
    }
    get_calculate(num) {
        return 1 + num;
    }
}

export default Layout