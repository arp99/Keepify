import pin from '../assets/pin.png'
import colorPallete from '../assets/color-palette.png'
import {useState} from 'react'

export default function TodoItem(){
    const [txtvalue , setTxtValue] = useState("assdakjsdc.sdn.ansd.an.sdkna.ksdn.fakns.fkna.sdknfksdnsdknfaskdnfkansd;kfna;sdknfaksdnfaksdnfkasndfknasdkfnaskdnfaksdnfkasdnfknasd;kjfnasdknf;aksdn")
    function onChangeHandler(e){
        setTxtValue(e.target.value);
    }
    return(
        <div className="todoContainer">
            <textarea type="text" name="" id="todoInput" value={txtvalue} onChange={onChangeHandler}/>
            <div className="labels"></div>
            <div className="icons-group">
                <button className="btn btn_pin"><img src={pin} alt="pin" srcset="" className="icon"/></button>
                <button className="btn btn_label"><img src={colorPallete} alt="color" srcset="" className="icon"/></button>
                <button className="btn_text">label</button>
                <button className="btn_text">delete</button>
            </div>
        </div>
    )
}