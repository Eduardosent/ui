import TypeIt from "typeit-react";

export default function Type(){
    return(
        <div className="App">
            <h2>Type</h2>
            <TypeIt options={{waitUntilVisible: true,strings: ["This text will be typed!"],
                    speed: 300,}} style={{color:'red',fontSize:'2rem',fontWeight:'bold'}}/>
        </div>
    )
}