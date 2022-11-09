import { type } from "@testing-library/user-event/dist/type";
import { removePx, xyToIndex } from "./utils";

class TextController{
    constructor(fontSettings = {}, textSettings = {}) {
        this.imageData = null;
        this.textSettings = {
            string: textSettings.string ? textSettings.string : "This is the default string, please define a string. ",
            repeat: textSettings.repeat ? true : false
        }
        this.fontSettings = {
            font: fontSettings.font ? fontSettings.font : "Helvetica",
            color: fontSettings.color ? fontSettings.color : "Black",
            size: fontSettings.size ? fontSettings.size : "30px",
        };
        this.textDimmensions = {};
        this.threshold = textSettings.threshold ? textSettings.threshold : 100;
        this.string = this.textSettings.string;

        this.evaluateTextDimmensions();

    }
    
    setImageData(imageData){
        this.imageData = imageData;
    }

    evaluateTextDimmensions(){
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>,.?/{}[]!@#$%^&*()_-+=1234567890|";
        let charsArr = chars.split("");

        let tester = document.createElement('span');

        tester.style.fontFamily = this.fontSettings.font;
        tester.style.color = this.fontSettings.color;
        tester.style.fontSize = this.fontSettings.size;
        tester.style.whiteSpace = "pre"
        tester.style.display = "inline-block"

        document.body.appendChild(tester);
        
        // gets width for every charecter
        charsArr.forEach(char => {
            tester.textContent = char;
            
            let elemStyles = getComputedStyle(tester);

            this.textDimmensions[char] = {
                width: elemStyles.width,
                height: elemStyles.height
            };
        })

        // getting width for space character 
        tester.textContent = "a a"
        let spaceWidth = getComputedStyle(tester).width;
        spaceWidth = removePx(spaceWidth) - (removePx(this.textDimmensions["a"].width)*2);
        // tester.textContent = " ";
        // let spaceWidth = getComputedStyle(tester).width;
        this.textDimmensions[" "] = {
            width: spaceWidth + "px",
            height: getComputedStyle(tester).height
        }


        // getting width between two characters 
        tester.textContent = "aa"
        let interWidth = getComputedStyle(tester).width;
        interWidth = removePx(interWidth) - (removePx(this.textDimmensions["a"].width)*2);
        this.textDimmensions[""] = {
            width: interWidth + "px",
            height: getComputedStyle(tester).height
        }

        // console.log(this.textDimmensions)

        document.body.removeChild(tester)


    }


    transcribe(setter){
        // console.log(this.imageData)

        if(!this.imageData){
            console.error("No ImageData!!!")
            return;
        }

        let stringArr = this.string.split("");
        let index = 0;

        let rowArr = [];

        for(let y=0;y<this.imageData.height;y+=0){

            let rowString = "";

            for(let x=0;x<this.imageData.width;x+=0){

                let i = xyToIndex(x,y,this.imageData.width);
                if(x<100){
                    // console.log(x);
                }
                const data = this.imageData.data;

                let avg = (data[i]+data[i+1]+data[i+2])/3;
                
                if(index > stringArr.length-1) {
                    if(this.textSettings.repeat){
                        index = 0;
                    } else {
                        index = 0;
                        // return
                    }
                }
                
                if(avg < this.threshold){
                    let char = stringArr[index];
                    rowString = rowString + char;
                    x += Math.floor(removePx(this.textDimmensions[char].width)*1.1);
                    x += removePx(this.textDimmensions[""].width);

                    index++;
                } else {
                    rowString = rowString + " ";

                    x += Math.round(removePx(this.textDimmensions[" "].width)/1);
                    // x -= 0.5;
                }
                
            }
            rowArr.push(rowString);
            y += removePx(this.textDimmensions["a"].height);


        }

        setter(rowArr);
    }
};

export default TextController;