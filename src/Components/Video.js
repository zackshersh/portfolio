
const Video = ({link}) => {
    return (
        <div className="Video-Container">
            <iframe className="Video" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default Video;