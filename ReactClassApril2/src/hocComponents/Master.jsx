






const Master = (ChildComponent) => {
  return (props) => {
    return (
      <>
        <div>
          This is higher order component on it's own and my status is {props.status}
        </div>
        <div>
          <ChildComponent {...props} />
        </div>
      </>
    );
  };
};

export default Master;
