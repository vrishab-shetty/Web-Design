import CardList from "../components/CardList/CardList";
import { useState, useEffect } from "react";

export const Home = () => {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setProfiles(users);
      });
  });

  return (
    <div className="tc">
      <h1>Home</h1>
      <CardList profiles={profiles} />
    </div>
  );
} 