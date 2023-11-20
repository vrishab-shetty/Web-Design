import "./TextBox.css";

function TextBox({ title, inputAttrs, style, onInputChange }) {

  return (
    <div style={style}>
      <span className="title">{title}</span>
      <input
        className="edit_text"
        id={inputAttrs.id}
        type={inputAttrs.type}
        required={inputAttrs.required}
        onChange={(e) => onInputChange(e.target.value)}
      />
      
    </div>
  );
}

export default TextBox;
