import React, { useEffect, useRef, useState } from 'react';
import CanvasController from './scripts/CanvasController';
import TextController from './scripts/TextController';
import { wait } from './scripts/utils';

function AlphaText({id, fontSettings = {
    font: "Arial",
    color: "rgb(0,0,255)",
    size: "12px"
}, sizing = {
    width: "160%",
    height: "100%"
}, textSettings = {
    string: "Hi! My name is Zack Hersh. ",
    threshold: 100
}, canvasSettings = {
    mode: "noise",
    xScale: 1.5,
    yScale: 3,
    coords: {x:2, y:1, z:1},
    renderScale: 12,
    display: false
}}) {

    const canvas = useRef(null);

    const [canvasController, setCanvasController] = useState(new CanvasController(canvasSettings));
    const [textController, setTextController] = useState(new TextController(fontSettings, textSettings));
    const [initialRender, setInitialRender] = useState(true);
    const [imageData, setImageData] = useState(null);
    const [textRows, setTextRows] = useState([]);

    useEffect(() => {
        if(initialRender){
            initCanvas()
            console.log(canvasController)
            // textController.setImageData(canvasController.getImageData());
        }
    })

    const spanStyles = {
        whiteSpace: "pre",
        display: "block",
        fontFamily: fontSettings.font,
        color: fontSettings.color,
        fontSize: fontSettings.size,
    }
    
    const canvStyles = {
        position: "absolute",
        top: 10,
        width: sizing.width,
        height: sizing.height,
        opacity: canvasSettings.display ? "1" : "0%",
        zIndex: -1,
    }

    const contStyles = {
        minWidth: sizing.width,
        minHeight: sizing.height
    }

    async function initCanvas(){
        //crude solution to wait for canvas to show in ref before setting the canvasElem so it doesnt return null
            // waits 10 miliseconds and checks if async ref is there
        for(var i=0;i<30;i++){
            await wait(10);

            if(canvas.current){
                canvasController.init(canvas.current);

                triggerTextDraw();


                setInitialRender(false);
                return;
            }
        }
        
        
        
        // if(canvas.current){
        //     canvasController.init(canvas.current);
        //     let imageData = canvasController.render();
        //     textController.setImageData(imageData);
        //     textController.transcribe();
            
        //     setInitialRender(false);
        // } else {
        //     await wait(50);
        //     canvasController.init(canvas.current);
        //     let imageData = canvasController.render();
        //     textController.setImageData(imageData);
        //     textController.transcribe();

        //     setInitialRender(false);
        // }
    }

    async function triggerTextDraw(){
        canvasController.noiseOptions.z += 0.05
        let imageData = canvasController.render();
        textController.setImageData(imageData);
        textController.transcribe(setTextRows);

        await wait(100)

        // window.requestAnimationFrame(triggerTextDraw);
    }


    return (
        <div style={contStyles} className='Alpha-Text'>
            <canvas style={canvStyles} ref={canvas} className={`alphatext-${id}`}></canvas>
            <div className='Alpha-Text-Cont'>
                {textRows.map((row,i) => <span key={i} style={spanStyles}>{row}</span>)

                }
            </div>
        </div>
    );
}

export default AlphaText;