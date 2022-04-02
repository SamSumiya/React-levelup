import React from 'react';
import withEditableUser from './withEditableUser';
import { withEditableResource } from './withEditableResource';

// export const UserInfoForm = () => {
export const UserInfoForm = withEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

    return user ? (
      <>
        <label>
          Name:
          <input
            type="text"
            onChange={(e) => onChangeUser({ name: e.target.value })}
            value={name}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            onChange={(e) => onChangeUser({ age: e.target.value })}
            value={age}
          />
        </label>
        <label>
          Hair Color:
          <input
            type="text"
            onChange={(e) => onChangeUser({ hairColor: e.target.value })}
            value={hairColor}
          />
        </label>
        <button onClick={onSaveUser}>Save</button>
        <button onClick={onResetUser}>Reset</button>
      </>
    ) : (
      <h1>'Loading'</h1>
    );
  },
  `/users/123`,
  'user'
);
// };
