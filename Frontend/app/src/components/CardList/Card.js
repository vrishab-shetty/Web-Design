
function Card({name, email}) {
  return (
    <div className="dib ma3 pa3 br3 grow bw3 shadow-5">
      <img alt='profile' src='https://random.imagecdn.app/200/200' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card