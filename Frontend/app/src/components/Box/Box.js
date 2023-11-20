import './Box.css';

function Box({children ,title, max_width }) {
  const style = {
    maxWidth: max_width,
  };

  let box_title = null;
  if(title !== undefined) box_title = (<div className="box_title">{title}</div>)

  return (
    <div className="box" style={style}>
        { box_title }
        { children }
    </div>
  );
}

export default Box;
