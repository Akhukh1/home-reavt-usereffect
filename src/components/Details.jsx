import React from 'react';
import { useState, useEffect } from "react";

export default function Details(props) {
  const { id } = props;

  if ( id ) {

    const [user, setRenderUser] = useState(null);
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/' + id + '.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ой, ошибка в fetch: ' + response.statusText);
        }
        return response.json();
      })
      .then(jsonData => setRenderUser(jsonData))
      .catch(error => console.error('Ошибка при исполнении запроса: ', error));
    }, [id]);

 
    if ( user ) {
      return (
        <div className = "user">
          <img src = { user.avatar } alt = { user.name }/>
          <div className = "name"> { user.name } </div>
          <div> City: { user.details.city } </div>
          <div> Company: { user.details.company } </div>
          <div> Pompany: { user.details.position } </div>
        </div>
      )
    }

  }
}
