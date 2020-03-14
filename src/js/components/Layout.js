import React from "react";
import Header from "./Header/Header"; 
import Footer from "./Footer/Footer";
import Jsxt from "./Jsxt/Jsxt";
import Statechange from "./Statechange/Statechange"

class Layout extends React.Component {

    render()  {
        // setTimeout(function(){},time)
        //setStateメソッドはstate状態を変更し再レンダリングさせる基本メソッド
        //配列でcomponentsをJSXにわたすこともできる。
        let componentsArry = [<Header />,<Footer />];
        //Headerのpropsにわたす値
        const title = "propsで渡す値(title)";
        return (
            //React Componentは再利用可能
            <div>
                <Statechange />
                <Header name={"Headerコンポーネントタグの中でstringで渡すnameの値"} title={title} />
                <Jsxt />
                <Footer />
                {componentsArry}
            </div>
        );
    }
}

export default Layout