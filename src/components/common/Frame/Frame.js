import "./frame.css";

export const Frame = ({ title, children }) => {
  return (
    <div className="frame-container">
      <h2 className="frame-title">{title}</h2>
      {children}
    </div>
  );
};

export default Frame;
