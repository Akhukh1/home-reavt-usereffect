import React from 'react';
import { useState } from "react";

export default function List(props) {
  const { users, onSelectUser, id } = props;

  return (
    <div className = "users">
      {
        users.map(user => {
          return (
            <div key = { user.id } className = { user.id == id ? 'active' : 'name-list' } id = { user.id } onClick = { onSelectUser }>
              {user.name}
            </div>
          )
        })
      }
    </div>
  )
}
