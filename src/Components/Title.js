
import {useState} from "react"
import { Link } from "react-router-dom";

import "../styles/title-styles.css"

import zackImg from "../assets/images/zack.jpg"
import InlineImage from "./InlineImage";

const Title = ({mode}) => {

    const [retracted, setRetracted] = useState(mode);


    return (
        <div className={`Title${retracted ? " Title-Retracted" : ""}`}>
            <div className="Title-Wrapper">
                <h3>Hi<InlineImage src={"https://thumbs.gfycat.com/MeatyEnchantingAdder-max-1mb.gif"} />! My name is Zack Hersh<InlineImage src={zackImg} />. I am a fullstack developer<InlineImage src={"https://media2.giphy.com/media/Jk3LfgWzPGhlTBC7Gy/giphy.gif?cid=6c09b952c92a585bbe11dc2aa5a6bf2f8f1aa2c1bdb429b5&rid=giphy.gif&ct=s"}/> and multispecializing in inventive, frontend experiences and design<InlineImage src={"https://media3.giphy.com/media/jt34LHEVIsbs0Qlbi2/giphy.gif"} />.</h3>
                <Link to={"/featured-work"}>
                    <button>Check out my work!</button>
                </Link>
                {/* <u className="Main-Title">Hi my name is Zack Hersh.{retracted ? " Here's some stuff I made." : ""}</u> 
                <p className="Sub-Title" >I'm a fullstack web developer specializing in inventive, frontend experiences. I am currently attending UNC Chapel Hill.</p>
                <p className="Sub-Title">Welcome to my portfolio website.</p>
                <Link to={"/featured-work"}>
                    <button className="Work-Button">Click here to view my work</button> 
                </Link> */}
            </div>
        </div>
    )
}

export default Title;