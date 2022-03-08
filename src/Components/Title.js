
import {useState} from "react"

const Title = () => {

    const [retracted, setRetracted] = useState(false);


    return (
        <div className={`Title${retracted ? " Title-Retracted" : ""}`}>
            <div className="Title-Wrapper">
                <u onMouseDown={() => setRetracted(false)} className="Main-Title">Hi my name is Zack Hersh.{retracted ? " Here's some stuff I made." : ""}</u> 
                <p className="Sub-Title" >I'm a graphic designer and web developer currently attending UNC Chapel Hill.</p>
                <p className="Sub-Title">Welcome to my <i>temporary</i> portfolio website.</p>
                <button className="Work-Button" onMouseDown={() => setRetracted(true)}>Click here to view my work</button> 
            </div>
        </div>
    )
}

export default Title;