
const TagButton = ({title, active, handler}) => {

    const handleClick = () => {
        handler(title)
    }

    return (
        <button onMouseDown={handleClick} className={`Tag-Button ${active ? "Tag-Active" : ""}`}>{title}</button>
    )
}

export default TagButton;