
const Page = ({children,title}) => {
    return (
        <div className="page flex-center">
            <div className="page-wrapper">
                <h1 className="page-title">{title}</h1>
                {children}
            </div>
        </div>
    )
}

export default Page;