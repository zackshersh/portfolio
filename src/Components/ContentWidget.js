import { useState } from "react";
import ContentPopup from "./ContentPopup";


const evalPath = (path) => {
    if(path.indexOf('THUMBNAIL') != -1){
        return path.substring(9,path.length);
    } else {
        return path;
    }
}

const ContentWidget = ({item}) => {

    const [popupDisplay, setPopupDisplay] = useState(false)

    // console.log(item)
    const setDisplayProxy = (val) => {

        // setPopupDisplay(val)

        if(popupDisplay){
            setPopupDisplay(false)
        } else {
            setPopupDisplay(true)
        }

        // setPopupDisplay(false)

    }

    return (
        <div className={`Content-Widget${item.important ? " Important-Widget" : ""}`}>
            <div onMouseDown={() => setDisplayProxy(true)}>
                <img src={evalPath(item.paths[0])} />
                <p>{item.title}</p>
            </div>
            <ContentPopup item={item} display={popupDisplay} setDisplay={setDisplayProxy}/>
        </div>
    )
}

export default ContentWidget;