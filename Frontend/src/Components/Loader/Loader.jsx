import "./Loader.scss";

const Loader = () => {
  return (
    <div className="Loader">
      <div className="container">
        <div className="loader"></div>
        <div className="loader"></div>
        <div className="loader"></div>
      </div>
      <p>Please wait. we are contacting our servers</p>
    </div>
  );
};

export default Loader;
