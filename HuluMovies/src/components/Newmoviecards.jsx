import './Newmoviecards.css'
import NorthHollywood from '../assets/NorthHollywood.jpg'



const Newmoviecards=({movieimg, title, details, caption})=>{

  return(
    <>
    <div id="moviewrap">
      <div id="moviecontent">
        <img id='cardimage'    src={movieimg} alt="" />
        <div id="titleanddetails">
          <div id="title"> {title} </div>
          <div id="details"><p>{details} </p></div>
        </div>
        <div id="moviecaption"> {caption} </div>
        <div id="slider"> </div>

      </div>
    </div>
    
    </>
  )
}

export default Newmoviecards