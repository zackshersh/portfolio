
import { PerlinNoise } from "./perlin3";
import { fillSq, rndmInt, xyToIndex } from "./utils";


class CanvasController{
    constructor(options = {}){
        this.canvas = {
            elem: null,
            w: 0,
            h: 0,
            imageData: null
        };
        this.mode = options.mode ? options.mode : "noise";
        this.noiseOptions = {
            x: options.coords && options.coords.x ? options.coords.x : 0,
            y: options.coords && options.coords.y ? options.coords.y : 0,
            z: options.coords && options.coords.z ? options.coords.z : 0,
            xScale: options.xScale ? options.xScale : 1,
            yScale: options.yScale ? options.yScale : 1,
        };
        this.imageOptions = {
            imageFit: options.imageFit ? options.imageFit : "fit",
            path: options.path ? options.path : null
        }
        this.renderScalingFactor = options.renderScale ? options.renderScale : 8;

    }

    init(canvasElement){
        console.log("%cINITIALIZING ALPHA CANVAS","background-color:orange;color:black;padding:4px 12px;border:1px solid white;")
        this.canvas.elem = canvasElement;
        let c = canvasElement;

        let computedStyles = getComputedStyle(c);

        let wInt = parseInt(computedStyles.width.split('p')[0]);
        let hInt = parseInt(computedStyles.height.split('p')[0]);

        this.canvas.w = wInt;
        this.canvas.h = hInt;

        this.canvas.elem.width = this.canvas.w;
        this.canvas.elem.height = this.canvas.h;

        this.ctx = this.canvas.elem.getContext('2d');

        // this.render()
    }

    render(){
        const imageData = new ImageData(this.canvas.w,this.canvas.h);

        let renderedImage;

        switch(this.mode){
            case "noise":
                renderedImage = this.renderNoise(imageData);
                break;
            case "image":
                // renderImage() uses image onload to wait for image so made async
                renderedImage = this.renderImage(imageData);
                break;
            default:
                return;
        }
        this.canvas.imageData = renderedImage;
        this.ctx.putImageData(renderedImage,0,0);

        return this.canvas.imageData;

    }

    renderNoise(imageData){
        let data = imageData.data;

        const rsf = this.renderScalingFactor;
        let n = this.noiseOptions

        for(let y=0;y<imageData.height;y+=rsf){
            for(let x=0;x<imageData.width;x+=rsf){
                let i = xyToIndex(x,y,imageData.width);
                let noiseVal = PerlinNoise.noise(((x*n.xScale)/300)+n.x,((y*n.yScale)/400)+n.y,n.z)*255;

                fillSq(imageData,x,y,rsf,noiseVal)

            }
        }


        
        return imageData;
    }

    renderImage(imageData){
        let imageElem = document.createElement("img");
        imageElem.src = this.imageOptions.path;
        imageElem.style.width = "300px";

        let imgData;

        return new Promise((resolve,reject) => {
            imageElem.onload = () => {
                console.log(imageElem);
                // document.body.appendChild(imageElem);
                this.ctx.drawImage(imageElem,0,0,100,100);
        
                imgData = this.ctx.getImageData(0,0,imageData.width,imageData.height);
                console.log(imgData);

                resolve(imgData);
    
                // return imgData;
            }

        })



    }


    getImageData(){
        return this.canvas.imageData;
    }
}

export default CanvasController;