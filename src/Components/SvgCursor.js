
import { useEffect } from "react"


const SvgCursor = () => {

    const svgStyles = {
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: 5,
    }

    const cursor = {
        svg: null,
        target: {
            x: 0,
            y: 0
        },
        initial: {
            x: 0,
            y: 0,
            rx: 6,
            ry: 6,
        },
        x: 0,
        y: 0,
        rx: 0,
        ry: 0,
        angle: 76,
        maxStretch: 2,
        applyPull(){
            let xDif = this.target.x - this.x;
            let yDif = this.target.y - this.y;
            // let xDif = this.x - this.target.x;
            // let yDif = this.y - this.target.y;

            let totalSpeed = Math.abs(xDif + yDif);
            this.setStretch(totalSpeed);

            this.angle = (Math.atan2(-xDif,-yDif)*(180*Math.PI))/5;
            // logHigh(this.angle)


            cursor.x = this.x + xDif/4;
            cursor.y = this.y + yDif/4;

            this.update()
        },
        setStretch(speed){

            let stretchFactor = 1+(speed/100);


            this.rx = this.initial.rx * stretchFactor;
        },
        update(){
            cursor.svg.setAttribute('cx',this.x);
            cursor.svg.setAttribute('cy',this.y);
            
            cursor.svg.setAttribute('rx',this.rx);

            cursor.svg.setAttribute('transform',`rotate(${this.angle},${this.x},${this.y})`)
        },
        setSpeed(){

        }
    }

    let high = 0;

    function logHigh(val){
        if(val > high){
            high = val;
        }
        console.log(high);
    }
    

    useEffect(() => {
        cursor.svg = document.querySelector('.cursor');
        cursor.svg.setAttribute('fill','red')
        console.log('hey')
    })

    document.addEventListener('mousemove',(e) => {
        cursor.target.x = e.clientX;
        cursor.target.y = e.clientY;
    });

    window.addEventListener('resize', () => {
        console.log('heylmkldgfm')
        document.querySelector('svg').setAttribute("width",window.innerWidth);
        document.querySelector('svg').setAttribute("height",window.innerHeight);
    })

    setInterval(() => {
        cursor.applyPull()
    },1000/60)
    

    return (
        <svg style={svgStyles} width={window.innerWidth} height={window.innerHeight}>
            <ellipse className="cursor" cx={cursor.initial.x} cy={cursor.initial.y} rx={cursor.initial.rx} ry={cursor.initial.ry} />
        </svg>
    )
}

export default SvgCursor;