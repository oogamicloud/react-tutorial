import React from "react";
import Header from "./Header"; 
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
        const title = "propsで渡すプロパティtitleの値 in Layout.js";

        return (
            //React Componentは再利用可能
            <div>
                <Statechange />
                <Header name={"stringで渡すnameプロパティの値"} />
                <Header title={title} />
                <Header title={"２個目のtitleプロパティの値"} />
                <Jsxt />
                <Footer />
                {componentsArry}
            </div>
        );
    }
}

export default Layout