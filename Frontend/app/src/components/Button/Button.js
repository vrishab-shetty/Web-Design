import './Button.css'
function Button({id, value, disabled=false, onClick}) {

  return (
    <div>
      <div className="button" >
          <input id={id} type="submit" value={value} disabled={disabled} onClick={onClick}/>
      </div>
    </div>
  );
}

export default Button;