import "./App.css";
import Child from "./hocComponents/Child";
import Master from "./hocComponents/Master";


const ReturnedMaster = Master(Child)


const App=()=>{

  return(
    <>
    <ReturnedMaster  status={'online'}/>
    </>
  )
}

export default App;
