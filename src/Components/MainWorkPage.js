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

function MainWorkPage(props) {


    const [activeItem, setActiveItem] = useState("all");

    return (
        <div className='Main-Work-Page'>
            <main className='Grid-Cont'>
                <Header activeItem={activeItem} setActiveItem={setActiveItem}/>


                <MainPageItem to={"image-filter-web-app-thingy"} darker img={filterImg} grid={"2/3-3/4"} 
                title="Image Filter Thingy"
                activeItem={activeItem} setActiveItem={setActiveItem} color={"#3964ff"}/>
                <GridWrapper g={"3/9-3/4"} aI={activeItem} p="Image Filter Thingy">
                    <GdTitle>Image Filter Thingy</GdTitle>
                </GridWrapper>
                <GridWrapper g={"3/7-4/5"} aI={activeItem} p="Image Filter Thingy">
                    <GBasicInfo date={"Nov. 2021"} link={"https://zackshersh.github.io/little-image-filter-thingy-app/"}>
                    </GBasicInfo>
                    <__Spacer__></__Spacer__>
                    <hr></hr>
                    <__Spacer__></__Spacer__>
                    <GBodyText>
                        Little Image Filter Web App is a web application that—as the name suggests—I created to allow users to layer various filters onto images they upload to create unique effects.
                    </GBodyText>
                </GridWrapper>
                <GridWrapper g={"3/7-5/8"} aI={activeItem} p="Image Filter Thingy">
                </GridWrapper>
                





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
                    <GridWrapper g={"4/9-6/7"} aI={activeItem} p="The Techno-Haggadah">
                        <GdTitle>The Techno-Haggadah</GdTitle>
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