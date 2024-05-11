import Marquee from "react-fast-marquee";

export default function Marqueeanimation(){

    const array = ['Juan','Karla','Cesar','Manolo','Alejandra','Brenda','Zulma','Lidia']
    return(
        <>
        <h2>Marquee</h2>
        <Marquee gradientWidth={200} gradientColor="white" gradient>
            {array.map((name,i)=>(
                <p key={i} style={{padding:'2px 100px'}}>{name}</p>
            ))}
        </Marquee>
        </>
    )
}