import "./App.css";
import Persondetails from "./components/Persondetails";

const App = () => {
  const Personobj = [
    { Name: "Ralph", Hobby: "Singing", Course: "Software Dev" },
    { Name: "Toke", Hobby: "Surfing the net", Course: "Frontend Dev" },
  ];
  return (
    <>
      {Personobj.map((Eachperson) => {
        return (
          <Persondetails
            Name={Eachperson.Name}
            Hobby={Eachperson.Hobby}
            Course={Eachperson.Course}
          ></Persondetails>
        );
      })}
    </>
  );
};
export default App;
