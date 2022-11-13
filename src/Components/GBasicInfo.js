import React from 'react';

function GBasicInfo({children, date, link, repo}) {

    const linkString = link.split("https://")[1];
    const repoString = repo ? repo.split("https://")[1] : "";

    return (
        <div className='Grid-Basic-Info'>
            {/* <p>{children}</p> */}
            <i>{date}</i>
            {link ? <p>Link: <a href={link}>{linkString}</a></p> : ""}
            {repo ? <p className='Source-Link'>Source Code: <a href={repo}>{repoString}</a></p> : ""}

        </div>
    );
}

export default GBasicInfo;