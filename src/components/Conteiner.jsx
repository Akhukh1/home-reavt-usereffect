import React from 'react';
import { useState, useEffect } from "react";
import List from '../components/List';
import Details from '../components/Details';

export default function Conteiner() {

  const [users, setUsers] = useState([]);
  const [id, setUser] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Ой, ошибка в fetch: ' + response.statusText);
      }
      return response.json();
    })
    .then(jsonData => setUsers(jsonData))
    .catch(error => console.error('Ошибка при исполнении запроса: ', error));
  }, []);

  

  const onSelectUser = (e) => {
    setUser(e.target.id);
  }

  return (
    <div className = "conteiner">
      <>
        <List users = { users } onSelectUser = { onSelectUser } id = { id } />
        <Details id = { id } />
      </>

    </div>
  )

}
