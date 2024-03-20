import "./Newmovie.css";
import Newmoviecards from "./Newmoviecards";
import NorthHollywood from "../assets/NorthHollywood.jpg";
import Blackfish from "../assets/Blackfish.jpg";
import Marsh from "../assets/TheMarshkingdaughter.jpg";
import castle from "../assets/Liveinthecastle.jpg";
import abducted from "../assets/Abductedbymyteahear.jpg";

const Newaddedmovie = [
  {
    movieimg: NorthHollywood ,
    title: "NORTH HOLLYWOOD",
    details:
      "A young skater is torn between following his dream and obeying is father",
    caption: "TMVA.Comedy.Drama.Movie.2021",
  },
  {
    movieimg: Marsh,
    title: "THE MARSH KING'S DAUGHTER",
    details:
      "In this  thriller a woman returns to the wilds of her youth to face her father",
    caption: "Thriller.Movie.(2023) ",
  },

  {
    movieimg: Blackfish ,
    title: "BLACKFISH",
    details:
      "Killer whales are beloved, majestic, friendly giants, yet infamous for the abililty to kill viciously... ",
    caption: "PG13. Documentaries. Animals&..",
  },
  {
    movieimg: castle,
    title: "WE HAVE ALWAYS LIVED IN THE CASTLE",
    details:
      "The arrival of a cousin with ulterior motives threatens the claustrophobic and isolated world of two sisters... ",
    caption: "Drama. Thriller.Movie(2024)",
  },
  {
    movieimg: abducted,
    title: "ABDUCTED BY MY TEACHER",
    details:
      "Follwing the 36-day odyysey of 15-year hold Elizabeth Thomas who was abducted by her trusted teacher ha...",
    caption: "R.Thriller.Movie.(2023)",
  },
];

const Newmovie = () => {
  return (
    <>
      <div id="newmoviecontainer">
        <div id="headercontainer">
          <h3>NEWLY ADDED MOVIE</h3>
        </div>
        <div id="allcardscontainer">
        {Newaddedmovie.map((content) => {
            return(
              <Newmoviecards
                movieimg={content.movieimg}
                title={content.title}
                details={content.details}
                caption={content.caption}
              ></Newmoviecards>
             ) ;
          })}
        </div>
      </div>
    </>
  );
};

/*



*/

export default Newmovie;
