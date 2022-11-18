import React from 'react';

function GBasicInfo({children, date, link, repo}) {

    let http = link.includes("https://") ? "https://" : "http://"
    let linkString = link.split(http)[1];
    const repoString = repo ? repo.split("https://")[1] : "";

    return (
        <div className='Grid-Basic-Info'>
            {/* <p>{children}</p> */}
            <i>{date}</i>
            {link ? <p>Link: <a href={link} target="_blank">{linkString}</a></p> : ""}
            {repo ? <p className='Source-Link'>Source Code: <a href={repo} target="_blank">{repoString}</a></p> : ""}

        </div>
    );
}

export default GBasicInfo;