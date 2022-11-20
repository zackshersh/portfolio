import React, {useState} from 'react';

import "../styles/main-work-page-styles.css";
import "../styles/grid-item-page-styles.css";
import Header from './Header';
import ItemModule from './ItemModule';
import ModuleContainer from './ModuleContainer';
import AlphaText from './Modules/AlphaText';

import MainPageItem from './MainPageItem';

import filterImg from "../assets/images/filter-nobkg.jpg"
import townImg from "../assets/images/tiny-town-nobkg.jpg"
import haggadahImg from "../assets/images/technohaggadah-nobkg.jpg"
import fieldImg from "../assets/images/flowerbunch.jpg"
import allImg from "../assets/images/all-work-thumbnail.jpg"
import zackImg from "../assets/images/zack.jpg"
import contactImg from "../assets/images/phone.jpg"
import anatomyImg from "../assets/images/mallard.jpg"
import climateImg from "../assets/images/climate-earth.jpg"


import GridWrapper from './GridWrapper';
import GdTitle from './GdTitle';
import { act } from 'react-dom/test-utils';
import GBodyText from './GBodyText';
import GBasicInfo from './GBasicInfo';
import __Spacer__ from './__Spacer__';

import standard from "../standardValues.json"


import { filterImgs, tinyImgs, fieldImgs, technoImgs, anatomyImgs, climateImgs } from '../imageImports';

import Cursor from './Cursor';
import GBkgImg from './GBkgImg';
import { useMediaQuery } from '../hooks';
import GBodyList from './GBodyList';

function MainWorkPage(props) {


    const [activeItem, setActiveItem] = useState("all");
    const [mousePos, setMousePos] = useState({x:100,y:100});

    const isSmallLayout = useMediaQuery(("(max-width: 600px)"));

    const mouseMove = (e) => {
        let x = e.clientX;
        let y = e.clientY+window.scrollY;
        setMousePos({x:x, y:y})
    }


    return (
        <div onMouseMove={mouseMove} className={`Main-Work-Page${activeItem != "all" ? "":""}`}>
            {/* <Cursor x={mousePos.x} y={mousePos.y}/> */}
            <main className='Grid-Cont'>
                <Header activeItem={activeItem} setActiveItem={setActiveItem}/>


                <MainPageItem img={filterImg} grid={"2/3-3/4"} isSmall={isSmallLayout} smallGrid={"1/3-2/4"}
                title="Image Filter Thingy"
                activeItem={activeItem} setActiveItem={setActiveItem} color={"#3964ff"} customFilter={"brightness(1.1) contrast(1.5)"}/>
                    <GridWrapper g={"3/6-3/4"} sG={"3/6-2/4"} aI={activeItem} p="Image Filter Thingy" s={isSmallLayout}>
                        <GdTitle>Image Filter Thingy</GdTitle>
                    </GridWrapper>
                    <GridWrapper g={"6/9-2/16"} aI={activeItem} p="Image Filter Thingy" pR>
                        <GBkgImg vertical bkg="filter"></GBkgImg>
                    </GridWrapper>

                    <GridWrapper g={"1/6-4/5"} sG={"1/6-4/5"} s={isSmallLayout} aI={activeItem} p="Image Filter Thingy" pT pR pL>
                        <GBasicInfo date={"Nov. 2021"} link={"https://zackshersh.github.io/little-image-filter-thingy-app/"} repo={"https://github.com/zackshersh/little-image-filter-thingy-app"}>
                        </GBasicInfo>
                        <__Spacer__></__Spacer__>
                        <hr></hr>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <GBodyText>
                            Little Image Filter Web App is a web application that—as the name suggests—I created to allow users to layer various filters onto images they upload to create unique effects.
                        </GBodyText>
                        <__Spacer__></__Spacer__>
                        <div className='Grid-Image-Container'>
                            <img loading='lazy' src={filterImgs.jfk1}/>
                        </div>
                        <div className='Grid-Image-Container'>
                            <img loading='lazy' src={filterImgs.jfk2}/>
                            <img loading='lazy' src={filterImgs.jfk3}/>
                        </div>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <GBodyText>
                            The site was built with ReactJS. It utilizes the CanvasAPI to edit and display images. It does not utilize shaders or any GPU functionality, but still runs close to instantly due to optimizations in how filters are applied and a variable preview resolution which can be controlled by the user.
                        </GBodyText>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>

                    </GridWrapper>

                {/* <GridWrapper g={"2/6-8/9"} aI={activeItem} p="Image Filter Thingy">
                    <__Spacer__></__Spacer__>
                    <GBodyText>
                        The site was built with ReactJS. It utilizes the CanvasAPI to edit and display images. It does not utilize shaders or any GPU functionality, but still runs close to instantly due to optimizations in how filters are applied and a variable preview resolution which can be controlled by the user.
                    </GBodyText>
                </GridWrapper> */}

                
                <MainPageItem img={haggadahImg} grid={"3/4-3/4"} smallGrid={"3/5-2/4"} isSmall={isSmallLayout} title="The Techno-Haggadah"
                activeItem={activeItem} setActiveItem={setActiveItem} customFilter={"brightness(1) contrast(1.5)"}/>
                    <GridWrapper g={"1/3-3/4"} sG={"1/3-2/4"} aI={activeItem} p="The Techno-Haggadah" s={isSmallLayout}>
                        <GdTitle alignR>The</GdTitle>
                    </GridWrapper>
                    <GridWrapper g={"4/9-3/4"} sG={"5/9-2/4"} aI={activeItem} p="The Techno-Haggadah" s={isSmallLayout}>
                        <GdTitle>Techno-Haggadah</GdTitle>
                    </GridWrapper>
                    <GridWrapper g={"6/9-4/12"} aI={activeItem} p="The Techno-Haggadah" pL>
                        <GBkgImg bkg="haggadah" vertical />
                    </GridWrapper>
                    <GridWrapper g={"1/6-4/9"} aI={activeItem} p="The Techno-Haggadah" pR pL>
                        <GBasicInfo date={"May, 2022"} link={"https://zackshersh.github.io/techno-haggadah/"} repo={"https://github.com/zackshersh/techno-haggadah"}/>
                        <__Spacer__/>
                        <hr></hr>
                        <__Spacer__/>
                        <__Spacer__/>
                        <GBodyText>
                            I created the <i>Techno-Haggadah</i> as part of a project for a Jewish Folklore and Ethnography course I took at UNC in the Spring of 2022. A Haggadah is a document used in the Jewish holiday of Passover. The "main event" of the Holiday is the seder, which is a meal consisting of a number of songs, prayers and rituals. These are all held in the Haggadah, which is read from throughout the meal.
                        </GBodyText>
                        <__Spacer__/>
                        <GBodyText>
                            The <i>Techno-Haggadah</i> is a somewhat humorous website that allows users to build their own digital Haggadah with a number of preset prayers, songs, images, and drawings. It has several example pages hard-coded, but provides a GUI allowing for easy creation of many more.
                        </GBodyText>
                        <__Spacer__/>
                        <div className="Grid-Image-Container">
                            <img style={{border: "1px solid var(--main)"}} loading="lazy" src={technoImgs.img2}></img>
                            <img style={{border: "1px solid var(--main)"}} loading="lazy" src={technoImgs.img1}></img>
                            <img style={{border: "1px solid var(--main)"}} loading="lazy" src={technoImgs.img3}></img>
                        </div>
                        <__Spacer__/>
                        <__Spacer__/>
                        <__Spacer__/>
                        <__Spacer__/>
                        <__Spacer__/>
                        <__Spacer__/>
                    </GridWrapper>


                <MainPageItem img={townImg} grid={"4/5-3/4"} smallGrid={"5/7-2/4"} title="Tiny Town" isSmall={isSmallLayout}
                activeItem={activeItem} setActiveItem={setActiveItem} color={"#068100"}/>
                    <GridWrapper g={"5/9-3/4"} sG={"1/5-2/4"} s={isSmallLayout} aI={activeItem} p="Tiny Town">
                        <GdTitle alignRSmall isSmall={isSmallLayout}>Tiny Town</GdTitle>
                    </GridWrapper>
                    {/* <GridWrapper g={"5/9-3/4"} sG={"7/9-2/4"} s={isSmallLayout} aI={activeItem} p="Tiny Town">
                        <GdTitle>Town</GdTitle>
                    </GridWrapper> */}
                    <GridWrapper g={"1/3-2/16"} sG={"7/9-2/12"} s={isSmallLayout} aI={activeItem} p="Tiny Town">
                        <GBkgImg vertical bkg={"tinytown"}></GBkgImg>
                    </GridWrapper>

                    <GridWrapper onTop g={"3/9-4/10"} sG={"1/7-4/10"} s={isSmallLayout} aI={activeItem} p="Tiny Town" pL pR>
                        <__Spacer__/>
                        <__Spacer__/>
                        <GBasicInfo link={"https://tiny-town.herokuapp.com/"} date={"July, 2021"} repo={"https://github.com/Gpphelps/tiny-town"}></GBasicInfo>
                        <__Spacer__/>
                        <hr></hr>
                        <__Spacer__/>
                        <__Spacer__/>
                        <GBodyText>
                            Tiny Town is a web application I created as the final project of the web development bootcamp I did in the spring and summer of 2021. Tiny Town is a website that allows users to create city blocks with multiple types of buildings, roads and parks, which connect into a larger city of other user submitted city blocks.
                        </GBodyText>
                        {/* <__Spacer__></__Spacer__> */}
                        <__Spacer__></__Spacer__>
                        <div className="Grid-Image-Container">
                            <img loading="lazy" src={tinyImgs.gif}></img>
                            <img loading="lazy" src={tinyImgs.img1}></img>
                        </div>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <GBodyText>
                            The frontend of the application uses ReactJS and renders the 3-D elements with the ThreeJS library. User accounts and city info are stored in a MongoDB database running on an ExpressJS server. I worked on this project with two other developers, one of which who did the majority of the backend and the other who worked on asset creation while I handled most of the frontend and 3-D code.
                        </GBodyText>
                        <div className="Grid-Image-Container">
                            <img loading="lazy" src={tinyImgs.img2}></img>
                        </div>
                    </GridWrapper>
                    
                    





                <MainPageItem img={fieldImg} grid={"2/3-4/5"} smallGrid={"1/3-4/5"} isSmall={isSmallLayout} customFilter={"brightness(1.3) contrast(1.2)"} title="Field of Dreams"
                activeItem={activeItem} setActiveItem={setActiveItem} color="rgb(240,21,120)"/>
                    <GridWrapper g={"3/9-4/5"} sG={"3/9-4/5"} s={isSmallLayout} aI={activeItem} p="Field of Dreams">
                        <GdTitle>Field of Dreams</GdTitle>
                    </GridWrapper>
                    <GridWrapper g={"1/9-2/4"} aI={activeItem} p="Field of Dreams">
                        <GBkgImg bkg={"flowers"}></GBkgImg>
                    </GridWrapper>
                    {/* <GridWrapper g={"1/9-2/4"} aI={activeItem} p="Field of Dreams">
                        <GBkgImg bkg={"field"}></GBkgImg>
                    </GridWrapper> */}
                    <GridWrapper g={"2/8-5/10"} sG={"1/9"} s={isSmallLayout} aI={activeItem} p="Field of Dreams" pL pR>
                        <GBasicInfo date="Apr. 2021" link={"https://fields-of-dreams.herokuapp.com/"} repo={"https://github.com/Gpphelps/field-of-dreams"}></GBasicInfo>
                        <__Spacer__></__Spacer__>
                        <hr />
                        <__Spacer__></__Spacer__>
                        <div className="Grid-Image-Container">
                            <img src={fieldImgs.img3} loading="lazy"></img>
                        </div>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <GBodyText>
                            Field of Dreams is a web application I created as one of the group projects of the web development bootcamp I did in the spring and summer of 2021. Field of Dreams allows users to procedurally create flowers by modifying a set of parameters such as height, bulb color, stem width and petal size to create a wide range of types of flowers. Users can save these flowers to their accounts and then plant them on a field with flowers created by other users.
                        </GBodyText>
                        <__Spacer__></__Spacer__>
                        <div className="Grid-Image-Container">
                            <img src={fieldImgs.gif} loading="lazy"></img>
                        </div>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <GBodyText>
                            In creating this project with a group, I took on a leadership role in implementing the envisioned final product which greatly strayed from the types of projects other group were creating. I was the sole developer responsible for programming and optimizing the code which rendered the user created flowers in the editor and on the collective field. I built out the application’s frontend, creating UI elements and working on the novel issues relating to storing and retrieving the user created flower parameters inside of the MySQL based backend that my group mates had created. Completing this project taught me about the process of synthesizing a user friendly and functional final product from an original concept.
                        </GBodyText>

                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                    </GridWrapper>

                
                <MainPageItem img={anatomyImg} activeItem={activeItem} setActiveItem={setActiveItem} title={"Anatomy of a 3D Scene"} color={"black"} grid={"5/6-3/4"} smallGrid={"7/9-2/4"} isSmall={isSmallLayout} customFilter={"brightness(0.85) contrast(2)"}></MainPageItem>
                    <GridWrapper aI={activeItem} p="Anatomy of a 3D Scene" g={"1/5-3/4"} sG={"3/7-2/4"} s={isSmallLayout}>
                        <GdTitle small alignR>Anatomy of a 3D Scene</GdTitle>
                    </GridWrapper>
                    <GridWrapper aI={activeItem} p="Anatomy of a 3D Scene" g={"6/9-2/16"} sG={"1/3-2/9"} s={isSmallLayout}>
                        <GBkgImg bkg={"3d"} vertical></GBkgImg>
                    </GridWrapper>
                    <GridWrapper aI={activeItem} p="Anatomy of a 3D Scene" g={"1/6-4/9"} sG={"3/9-4/14"} s={isSmallLayout} pL pR pT>
                        <__Spacer__></__Spacer__>
                        <GBasicInfo date={"Oct. 2022"} link={"http://zack-is.online/487/build/index.html"}></GBasicInfo>
                        <__Spacer__></__Spacer__>
                        <hr />
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <GBodyText>
                            Anatomy of a 3D scene was a project I did for an interactive media course I took at UNC in the fall of 2022. The site educates users about the basics of realtime 3D rendering through a series of interactive slides. Each slide informs on a specific part of 3D rendering and contains various inputs allowing users to explore that concept interactively with a 3D scene.
                        </GBodyText>
                        <__Spacer__></__Spacer__>
                        <GBodyText>
                            The project was built in ReactJS and utilized ThreeJS for all of its 3D aspects.
                        </GBodyText>
                        <__Spacer__></__Spacer__>
                        <div className="Grid-Image-Container">
                            <img loading="lazy" src={anatomyImgs.gif1}></img>
                        </div>
                        <div className="Grid-Image-Container">
                            <img loading="lazy" src={anatomyImgs.gif2}></img>
                        </div>
                        <div className="Grid-Image-Container">
                            <img loading="lazy" src={anatomyImgs.gif3}></img>
                        </div>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                    </GridWrapper>



                
                <MainPageItem img={climateImg} activeItem={activeItem} setActiveItem={setActiveItem} title={"Unfair Climate Change"} color={"rgb(77, 102, 125)"} grid={"3/4-4/5"} smallGrid={"3/5-4/5"} isSmall={isSmallLayout} customFilter={"brightness(1) contrast(1.6)"}></MainPageItem>
                    <GridWrapper aI={activeItem} p="Unfair Climate Change" g={"4/8-4/5"} sG={"5/9-4/5"} s={isSmallLayout}>
                        <GdTitle small>The Unfair Reality of Climate Change</GdTitle>
                    </GridWrapper>
                    <GridWrapper aI={activeItem} p="Unfair Climate Change" g={"1/9-2/4"} sG={"1/9-2/4"} s={isSmallLayout}>
                        <GBkgImg bkg={"climate"}></GBkgImg>
                    </GridWrapper>
                    <GridWrapper aI={activeItem} p="Unfair Climate Change" g={"2/8-5/10"} sG={"1/9-5/10"} s={isSmallLayout} pL pR>
                        <GBasicInfo date={"Nov. 2022"} link={"http://zack-is.online/487/climate-fairness/index.html"}></GBasicInfo>
                        <__Spacer__/>
                        <hr />
                        <__Spacer__/>
                        <__Spacer__/>
                        <GBodyText>
                            I created The Unfair Reality of Climate change for a project for an interactive media class I took at UNC in the Fall of 2022. The project assignment required we visualize a dataset in the style of a news media organization, I chose to do this project in the style of Vox Media. The site compares the greenhouse gases emitted by a given country with a number of different metrics that indicate that country's vulnerability to climate change. These various comparisons are used to compute a relative level of "unfairness" for every country, which illuminates which countries can be expected to suffer the most significant effects from climate change after contributing the smallest amount of greenhouse gases. 
                        </GBodyText>
                        <__Spacer__/>
                        <__Spacer__/>
                        <div className='Grid-Image-Container'>
                            <img loading="lazy" src={climateImgs.img1}></img>
                        </div>
                        <__Spacer__/>
                        <__Spacer__/>
                        <GBodyText>
                            One metric used is a country's GDP, the reasoning being wealthier countries will have more resources with which to combat the effects of climate change. The countries with the lowest GDPs, often have contributed the least to climate change, and thusly will experience very "unfair" effects.
                        </GBodyText>
                        <__Spacer__/>
                        <__Spacer__/>
                        <div className='Grid-Image-Container'>
                            <img loading="lazy" src={climateImgs.img2}></img>
                        </div>
                        <__Spacer__/>
                        <__Spacer__/>
                        <GBodyText>
                            D3js is used to visualize these comparisons on a world map and a scatterplot.
                        </GBodyText>
                        <__Spacer__/>
                        <__Spacer__/>
                        <__Spacer__/>
                        <__Spacer__/>
                        <__Spacer__/>
                        <__Spacer__/>
                    </GridWrapper>
                    


                {/* --------------------------------------------------- */}



                <MainPageItem img={allImg} grid={"7/8-3/4"} smallGrid={"1/3-6/7"} isSmall={isSmallLayout} title={"Creative Work"} activeItem={activeItem} setActiveItem={setActiveItem} to={"all-work"} color={standard.main} customFilter={"brightness(1.1) contrast(1.3)"} emphasis></MainPageItem>



                <MainPageItem img={zackImg} activeItem={activeItem} setActiveItem={setActiveItem} title={"About Me"} color={"#ff5500"} grid={"7/8-4/5"} smallGrid={"3/5-6/7"} isSmall={isSmallLayout} customFilter={"brightness(1.8) contrast(1.3)"} emphasis></MainPageItem>
                    <GridWrapper aI={activeItem} p="About Me" g={"3/7-3/4"} sG={"3/7-2/3"} s={isSmallLayout} pT>
                        <GdTitle alignR>About Me</GdTitle>
                    </GridWrapper>
                    <GridWrapper aI={activeItem} p="About Me" g={"2/7-4/8"} sG={"1/9-3/6"} s={isSmallLayout} scroll mR pL pT>
                        <__Spacer__></__Spacer__>
                        <GBodyText>
                            As a web developer, I find myself drawn to interesting visual design and creating unique and creative experiences.
                        </GBodyText>
                        <__Spacer__></__Spacer__>
                        <GBodyText>
                            I have been interested in frontend web development since I took an intro to web development class at UNC in 2019. Web development and programming felt like another way to explore my love of design and making "cool stuff", which I had previously explored through graphic design and photography.
                        </GBodyText>
                        <__Spacer__></__Spacer__>
                        <GBodyText>
                            In the Spring of 2021 I took a semester off of school to further explore my interest in programming. I enrolled in a 24 week fullstack coding bootcamp through UNC, where I learned aspects of web development from ReactJS on the frontend to server routing and database operation on the backend <i>(See Tiny Town and Field of Dreams)</i>.
                        </GBodyText>
                        <__Spacer__></__Spacer__>
                        <GBodyText>
                            Since then I have continued to explore web development through classes at UNC and personally motivated projects.
                        </GBodyText>
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                        <GBodyList title={"Skills"} 
                        items={["React.js","MySQL and MongoDB","Express.js","Test driven development with Jest","Three.js","D3.js", "Adobe Photoshop and Illustrator"]}>
                        </GBodyList>
                    </GridWrapper>


                <MainPageItem img={contactImg} activeItem={activeItem} setActiveItem={setActiveItem} title={"Contact Me"} color={"#c92469"} grid={"7/8-5/6"} smallGrid={"5/7-6/7"} isSmall={isSmallLayout} customFilter={"brightness(0.7) contrast(4)"} emphasis remainFor={["About Me"]}></MainPageItem>
                    <GridWrapper aI={activeItem} p="Contact Me" g={"1/7-5/6"} sG={"1/8-5/6"} s={isSmallLayout} pL>
                        <GdTitle alignR xSmall alignBottom>You can reach me at: <br/> <a href='mailto:zackshersh@gmail.com'>zackshersh@gmail.com</a></GdTitle>
                        
                    </GridWrapper>
            </main>
        </div>
    );
}

export default MainWorkPage;