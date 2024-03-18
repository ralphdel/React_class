


const Validation=({inputlenght})=>{


    const  Validationmessage="Text too short";
    return (
    <>
    <h2>{ inputlenght<= 5?Validationmessage:"Text too long"} </h2>
    </>
    )
}

export default Validation