

import Video from "./Video";
import LinkIcon from "./LinkIcon";

const ContentPopup = ({item, display, setDisplay}) => {


    const handleTitleLink = () => {
        window.open(item.link)
    }

    return (
        <div style={{display: display ? "flex" : "none"}} className="Content-Popup">
            <button className="Content-Popup-X-Out X-Out-1" onMouseDown={() => setDisplay(false)}>X</button>
            <div className="Content-Wrapper">
                <h3 onMouseDown={item.link ? handleTitleLink : null} className={item.link ? "Linked-Title" : ""}>{item.title} {item.link ? <LinkIcon /> : null}
                </h3>
                <i className="item-date">{item.date}</i>
                {item.text ? <p>{item.text}</p> : null}
                {
                    item.paths.map((path,i) => {

                        if(path.indexOf("YOUTUBE-EMBED") != -1){
                            let link = path.substring(13,path.length)
                            return <Video key={i} link={link} />
                        } else if (path.indexOf("THUMBNAIL") != -1){
                            return;
                        }

                        return <img loading="lazy" key={i} src={path} />
                    })
                }
            </div>
            <button className="Content-Popup-X-Out X-Out-2" onMouseDown={() => setDisplay(false)}>X</button>
        </div>
    )
}

export default ContentPopup;