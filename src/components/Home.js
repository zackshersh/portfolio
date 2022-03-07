import React, {useState} from "react";


const Home = ({setPageState}) => {

    const [homeRetracted, setHomeRetracted] = useState(false);


    const togglePage = (page) => {
        // if(!homeRetracted){
        if(page == 'none'){
            setHomeRetracted(false)
            setPageState(page)

            document.documentElement.style.setProperty('--main', "#ff5c26")
        } else {
            setHomeRetracted(true)
            setPageState(page)

            switch(page){
                case "creative":
                    document.documentElement.style.setProperty('--main', "#ffcc00");
                    break;
                case "web":
                    document.documentElement.style.setProperty('--main', "red");
                    break;
                case "about":
                    document.documentElement.style.setProperty('--main', "green");
                    break;

            }

        }

        // } else {
        //     setHomeRetracted(false)
        //     setPageState('none')
        // }

    }

    return (
        <div className="home-center flex-center">
            <div className={`home-wrapper flex-center ${homeRetracted ? 'retracted' : 'not-retracted'}`}>
                <div className="home-title flex-center">
                    <h1>Hi! My name is Zack Hersh</h1>
                    <h3 onMouseDown={() => {togglePage('none')}}>Welcome to {homeRetracted ? "Zack Hersh's" : "my"} <i>temporary</i> Portfolio Website</h3>
                </div>
                <nav>
                    <button onMouseDown={() => {togglePage('creative')}}>Creative</button>
                    <button onMouseDown={() => {togglePage('web')}}>Web</button>
                    <button onMouseDown={() => {togglePage('about')}}>About</button>
                </nav>
            </div>
        </div>
    )
};

export default Home;