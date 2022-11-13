import React, {useState} from 'react';

import "../styles/main-work-page-styles.css";
import "../styles/grid-item-page-styles.css";
import Header from './Header';
import ItemModule from './ItemModule';
import ModuleContainer from './ModuleContainer';
import AlphaText from './Modules/AlphaText';

import MainPageItem from './MainPageItem';

import filterImg from "../assets/images/filter-nobkg.png"
import townImg from "../assets/images/tiny-town-nobkg.png"
import haggadahImg from "../assets/images/technohaggadah-nobkg.png"
import fieldImg from "../assets/images/fieldofdreams-nobkg.png"
import GridWrapper from './GridWrapper';
import GdTitle from './GdTitle';
import { act } from 'react-dom/test-utils';
import GBodyText from './GBodyText';
import GBasicInfo from './GBasicInfo';
import __Spacer__ from './__Spacer__';


import { filterImgs, tinyImgs, fieldImgs, technoImgs } from '../imageImports';

import Cursor from './Cursor';
import GBkgImg from './GBkgImg';

function MainWorkPage(props) {


    const [activeItem, setActiveItem] = useState("all");
    const [mousePos, setMousePos] = useState({x:100,y:100})

    const mouseMove = (e) => {
        let x = e.clientX;
        let y = e.clientY+window.scrollY;
        setMousePos({x:x, y:y})
    }

    return (
        <div onMouseMove={mouseMove} className={`Main-Work-Page${activeItem != "all" ? "":""}`}>
            <Cursor x={mousePos.x} y={mousePos.y}/>
            <main className='Grid-Cont'>
                <Header activeItem={activeItem} setActiveItem={setActiveItem}/>


                <MainPageItem to={"image-filter-web-app-thingy"} darker img={filterImg} grid={"2/3-3/4"} 
                title="Image Filter Thingy"
                activeItem={activeItem} setActiveItem={setActiveItem} color={"#3964ff"}/>
                <GridWrapper g={"3/6-3/4"} aI={activeItem} p="Image Filter Thingy">
                    <GdTitle>Image Filter Thingy</GdTitle>
                </GridWrapper>
                <GridWrapper g={"6/9-2/16"} aI={activeItem} p="Image Filter Thingy" pL>
                    <GBkgImg vertical bkg="filter"></GBkgImg>
                </GridWrapper>

                <GridWrapper g={"2/5-4/5"} aI={activeItem} p="Image Filter Thingy" pT pR>
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
                        <img src={filterImgs.jfk1}/>
                    </div>
                    <div className='Grid-Image-Container'>
                        <img src={filterImgs.jfk2}/>
                        <img src={filterImgs.jfk3}/>
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

                





                <MainPageItem to={"tiny-town"} img={townImg} grid={"5/6-4/5"} title="Tiny Town"
                activeItem={activeItem} setActiveItem={setActiveItem} color={"#068100"}/>
                    <GridWrapper g={"1/5-4/5"} aI={activeItem} p="Tiny Town">
                        <GdTitle alignR>Tiny</GdTitle>
                    </GridWrapper>
                    <GridWrapper g={"6/9-4/5"} aI={activeItem} p="Tiny Town">
                        <GdTitle>Town</GdTitle>
                    </GridWrapper>
                    <GridWrapper g={"1/3-2/10"} aI={activeItem} p="Tiny Town">
                        <GBkgImg bkg={"tinytown"} vertical></GBkgImg>
                    </GridWrapper>
                    <GridWrapper g={"1/3-2/16"} aI={activeItem} p="Tiny Town">
                        <GBkgImg bkg={"tinytown"} vertical></GBkgImg>
                    </GridWrapper>

                    <GridWrapper onTop g={"4/8-5/10"} aI={activeItem} p="Tiny Town">
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
                    
                    





                <MainPageItem to={"techno-haggadah"} img={haggadahImg} grid={"3/4-6/7"} title="The Techno-Haggadah"
                activeItem={activeItem} setActiveItem={setActiveItem}/>
                    <GridWrapper g={"1/3-6/7"} aI={activeItem} p="The Techno-Haggadah">
                        <GdTitle alignR>The</GdTitle>
                    </GridWrapper>
                    <GridWrapper g={"4/9-6/7"} aI={activeItem} p="The Techno-Haggadah">
                        <GdTitle>Techno-Haggadah</GdTitle>
                    </GridWrapper>
                    <GridWrapper g={"1/9-2/6"} aI={activeItem} p="The Techno-Haggadah">
                        <GBkgImg bkg="haggadah" />
                    </GridWrapper>
                    <GridWrapper g={"2/8-7/9"} aI={activeItem} p="The Techno-Haggadah" pR>
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






                <MainPageItem to={"field-of-dreams"} img={fieldImg} grid={"6/7-6/7"} title="Field of Dreams"
                activeItem={activeItem} setActiveItem={setActiveItem} color="#d90971"/>
                    <GridWrapper g={"1/6-6/7"} aI={activeItem} p="Field of Dreams">
                        <GdTitle alignR>Field of Dreams</GdTitle>
                    </GridWrapper>
                    <GridWrapper g={"1/9-2/6"} aI={activeItem} p="Field of Dreams">
                        <GBkgImg bkg={"flowers"}></GBkgImg>
                    </GridWrapper>
                    <GridWrapper g={"2/6-7/10"} aI={activeItem} p="Field of Dreams">
                        <GBasicInfo date="Apr. 2021" link={"https://fields-of-dreams.herokuapp.com/"} repo={"https://github.com/Gpphelps/field-of-dreams"}></GBasicInfo>
                        <__Spacer__></__Spacer__>
                        <hr />
                        <__Spacer__></__Spacer__>
                        <__Spacer__></__Spacer__>
                    </GridWrapper>


            </main>
        </div>
    );
}

export default MainWorkPage;