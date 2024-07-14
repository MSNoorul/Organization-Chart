import { useState,useEffect } from "react";


const textStyel = {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: '14',
    margin: '0',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

function TextBackground({name ,width='35px' ,height ='35px'}) {
    const [colorCode,setcolorCode] = useState(localStorage.getItem('colorCode')?JSON.parse(localStorage.getItem('colorCode')):{});
    const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    useEffect(()=>{
        localStorage.setItem('colorCode',JSON.stringify(colorCode));
    },[colorCode])

    const randomColor = () => {
        let hex = "#"
        for (let i = 0; i < 6; i++) {
            hex += hexCode[Math.floor(Math.random() * hexCode.length)];
        }
        return hex;
    }
    const setColor = (name) => {
        let color ='';
        const firstletter = name?.charAt(0);
        if (!colorCode[firstletter]) {
            color = randomColor();
            colorCode[firstletter] =color;
            setcolorCode(colorCode);
            return color;
        } else return colorCode[firstletter]
    }

    const setLetter = (name) => {
       let letter = ""
        const nameArr = name.split(' ');
        for(let i =0;i<nameArr.length;i++){
            if(i >=2) break
            letter += nameArr[i]?.charAt(0).toUpperCase() 
        }
        return letter
    }

    return ( 
        <p style={{backgroundColor:setColor(name),...textStyel,width,height}}>{setLetter(name)}</p>
     );
}

export default TextBackground;