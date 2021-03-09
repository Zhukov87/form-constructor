import "./pad.css";

export const Pad = ({ title, onClick }) => (
  <div className="pad" onClick={() => onClick(title.toLowerCase())}>
    <h4 className="pad-title">{title}</h4>
  </div>
);

export default Pad;
