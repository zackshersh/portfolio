
import WorkPage from "./Components/WorkPage";
import SvgCursor from "./Components/SvgCursor";
import Title from "./Components/Title";

import "./styles/typeface.css"



function App() {

    const mouseMove = (e) => {
        console.log(e.clientX,e.clientY)
    }

    return (
        <div onMouseMove={mouseMove} className="App">
            <Title />
            <WorkPage />
        </div>
    );
}

export default App;
