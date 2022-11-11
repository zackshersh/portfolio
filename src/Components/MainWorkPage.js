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


import { filterImgs } from '../imageImports';

import Cursor from './Cursor';
import GBkgImg from './GBkgImg';

function MainWorkPage(props) {


    const [activeItem, setActiveItem] = useState("all");
    const [mousePos, setMousePos] = useState({x:100,y:100})

    const mouseMove = (e) => {
        setMousePos({x:e.clientX,y:e.clientY})
    }

    return (
        <div onMouseMove={mouseMove} className={`Main-Work-Page${activeItem != "all" ? "":""}`}>
            <Cursor x={mousePos.x} y={mousePos.y}/>
            <main className='Grid-Cont'>
                <Header activeItem={activeItem} setActiveItem={setActiveItem}/>


                <MainPageItem to={"image-filter-web-app-thingy"} darker img={filterImg} grid={"2/3-3/4"} 
                title="Image Filter Thingy"
                activeItem={activeItem} setActiveItem={setActiveItem} color={"#3964ff"}/>
                <GridWrapper g={"3/9-3/4"} aI={activeItem} p="Image Filter Thingy">
                    <GdTitle>Image Filter Thingy</GdTitle>
                </GridWrapper>
                <GridWrapper g={"2/6-4/5"} aI={activeItem} p="Image Filter Thingy" pT>
                    <GBasicInfo date={"Nov. 2021"} link={"https://zackshersh.github.io/little-image-filter-thingy-app/"}>
                    </GBasicInfo>
                    <__Spacer__></__Spacer__>
                    <hr></hr>
                    <__Spacer__></__Spacer__>
                    <GBodyText>
                        Little Image Filter Web App is a web application that—as the name suggests—I created to allow users to layer various filters onto images they upload to create unique effects.
                    </GBodyText>
                    <div>

                    </div>
                </GridWrapper>
                <GridWrapper g={"2/4-5/8"} aI={activeItem} p="Image Filter Thingy" pR>
                    <__Spacer__></__Spacer__>
                    <img className='Img-2' loading='lazy' src={filterImgs.gif} alt="" />
                </GridWrapper>
                {/* <GridWrapper g={"2/6-8/9"} aI={activeItem} p="Image Filter Thingy">
                    <__Spacer__></__Spacer__>
                    <GBodyText>
                        The site was built with ReactJS. It utilizes the CanvasAPI to edit and display images. It does not utilize shaders or any GPU functionality, but still runs close to instantly due to optimizations in how filters are applied and a variable preview resolution which can be controlled by the user.
                    </GBodyText>
                </GridWrapper> */}

                





                <MainPageItem to={"tiny-town"} img={townImg} grid={"5/6-4/5"} title="Tiny Town"
                activeItem={activeItem} setActiveItem={setActiveItem}/>
                    <GridWrapper g={"1/5-4/5"} aI={activeItem} p="Tiny Town">
                        <GdTitle alignR>Tiny</GdTitle>
                    </GridWrapper>
                    <GridWrapper g={"6/9-4/5"} aI={activeItem} p="Tiny Town">
                        <GdTitle>Town</GdTitle>
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
                    <GridWrapper g={"2/9-7/9"} aI={activeItem} p="The Techno-Haggadah" pR>
                        <GBasicInfo date={"May, 2022"} link={"https://zackshersh.github.io/techno-haggadah/"}/>
                        <__Spacer__/>
                        <GBodyText>
                            I created <i>The Techno-Haggadah</i> as part of a project for a Jewish Folklore and Ethnography course I took at UNC in the Spring of 2022. A Haggadah is a document used in the Jewish holiday of Passover. The "main event" of the Holiday is the seder, which is a meal accompanied by a number of
                        </GBodyText>
                    </GridWrapper>






                <MainPageItem to={"field-of-dreams"} img={fieldImg} grid={"6/7-6/7"} title="Field of Dreams"
                activeItem={activeItem} setActiveItem={setActiveItem}/>
                    <GridWrapper g={"1/6-6/7"} aI={activeItem} p="Field of Dreams">
                        <GdTitle alignR>Field of Dreams</GdTitle>
                    </GridWrapper>


            </main>
        </div>
    );
}

export default MainWorkPage;