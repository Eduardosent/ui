

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements

export default function Swipperjs(){

  return (
    <>
    <h2>Swiper</h2>
      <swiper-container 
              grabCursor
              centeredSlides
      allowClick allow-click allow-touch-move allowTouchMove slides-per-view="1" speed="500" loop="true" css-mode="true" pagination={{clickable:true}} navigation autoplay={{delay:2000}}>
  <swiper-slide style={{width:'100%',height:'300px'}}>
  <img style={{width:'100%',height:'300px'}} src="https://img.freepik.com/foto-gratis/vista-paisaje-natural-espectacular_23-2150763636.jpg?t=st=1713545711~exp=1713549311~hmac=7f521b605eeae38c5a33c92cdaf92b2e99bf5089e873183dca9f2822b9a8ab91&w=826"/>
  </swiper-slide>
  <swiper-slide style={{width:'100%'}}>
  <img style={{width:'100%',height:'300px'}} src="https://img.freepik.com/foto-gratis/muelle-lago-hallstatt-austria_181624-44201.jpg?size=626&ext=jpg" alt=""/>
  </swiper-slide>
  <swiper-slide style={{width:'100%'}}>
  <img style={{width:'100%',height:'300px'}} src="https://img.freepik.com/foto-gratis/colorido-paisaje-retro-vaporwave_23-2148949186.jpg?t=st=1713546089~exp=1713549689~hmac=58e4b2f6ef8042efcd37d2745afacd167c5ad65ff2c330a85e8c7d51767b12ce&w=740" alt=""/>
  </swiper-slide>
  </swiper-container>
  
    </>

  );
};