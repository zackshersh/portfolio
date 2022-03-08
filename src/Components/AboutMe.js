
const AboutMe = ({setDisplay, display}) => {
    return (
        <div style={{display: display ? "flex" : "none"}} className="About-Me">
            <div className="About-Wrapper">
                <u>My name is Zack Hersh</u>
                <div>
                    <div className="About-Col">
                        <p>I have been interested in creative digital mediums, namely graphic design and video production, since middle school. I am largely self taught and have gotten the majority of my experience through self-driven creative projects such as my clothing brand <i>YUCK!</i>.</p>
                        <u className="Skill-Title">Creative Skills</u>
                        <ul>
                            <li>Adobe Creative Suite <i>(namely Photoshop, Illustrator and Premiere Pro)</i></li>
                            <li>Final Cut Pro X</li>
                            <li>Camera Video and Photo Operation</li>
                            <li>Touchdesigner</li>
                            <li>Blender</li>
                        </ul>
                    </div>

                    <div className="About-Col">
                        <p>I have been interested in web development for a couple of years, in particular front-end development. In the spring of 2021 I enrolled in a web development bootcamp held by UNC Chapel Hill and since then I have continued to grow my skills focusing on creative programming and image manipulation.</p>
                        <u className="Skill-Title">Web Skills</u>
                        <ul>
                            <li>HTML/CSS/JS</li>
                            <li>ReactJS</li>
                            <li>NodeJS, ExpressJS</li>
                            <li>MySQL, MongoDB</li>
                            <li>ThreeJS, p5js</li>
                        </ul>
                    </div>

                </div>
                <div>
                    <div className="About-Col Contact-Col">
                        <u>Contact</u>
                        <p>email: zackshersh@gmail.com</p>
                        <p>mobile: 919-360-1962</p>
                    </div>

                    <div className="About-Col">
                        <button className="About-Exit-Button" onMouseDown={() => setDisplay(false)}>Enough about me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe