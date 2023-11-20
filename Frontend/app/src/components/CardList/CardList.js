import Card from "./Card";

function CardList({ profiles: items }) {
  const profileComponent = items.map((user) => {
    return <Card key={user.id} name={user.name} email={user.email} />;
  });
  return <div>{profileComponent}</div>;
}

export default CardList;
