export function wait(miliseconds){
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve();
        },miliseconds)
    })
}

export function rndmInt(max){
    return Math.floor(Math.random()*max)
}

export function xyToIndex(x,y,w){
    return (y*(w*4))+(x*4)
}

export function fillSq(imageData,x,y,w,val){
    for(var y1=0;y1<w;y1++){
        for(var x1=0;x1<w;x1++){

            if(y1+y > imageData.height || x1+x > imageData.width){
                break;
            }

            let i = xyToIndex(x+x1,y+y1,imageData.width);
            imageData.data[i] = val;
            imageData.data[i+1] = val;
            imageData.data[i+2] = val;
            imageData.data[i+3] = 255;
        }
    }
}

export function removePx(string){
    return parseInt(string.split("p")[0])
}