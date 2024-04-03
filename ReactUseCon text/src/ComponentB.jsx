import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <>
      <div className="box">
        <h3> ComponentB</h3>
      </div>
      <ComponentC />
    </>
  );
};

export default ComponentB;
