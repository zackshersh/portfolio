
import {useState} from "react"
import { Link } from "react-router-dom";

const Title = ({mode}) => {

    const [retracted, setRetracted] = useState(mode);


    return (
        <div className={`Title${retracted ? " Title-Retracted" : ""}`}>
            <div className="Title-Wrapper">
                <u className="Main-Title">Hi my name is Zack Hersh.{retracted ? " Here's some stuff I made." : ""}</u> 
                <p className="Sub-Title" >I'm a fullstack web developer specializing in inventive, frontend experiences. I am currently attending UNC Chapel Hill.</p>
                <p className="Sub-Title">Welcome to my portfolio website.</p>
                <Link to={"/featured-work"}>
                    <button className="Work-Button">Click here to view my work</button> 
                </Link>
            </div>
        </div>
    )
}

export default Title;