import { useCurrentUser } from "./useCurrentUser";
import { useUser } from "./useUser";
import { useResource } from './useResource';
import { useDataResource } from './useDataResource';

const serverResource = resourceUrl => async () => {
  const response = await fetch(resourceUrl);
  return response.json();
}

export const UserInfo = ({ userId }) => {

  // const { user } = useCurrentUser() 
  // const { user } = useUser(userId);
  
  // const { resource } = useResource(`/users/${userId}`);
  const { resource } = useDataResource(serverResource(`/users/${userId}`));


  const { name, age, hairColor, hobbies } = resource || {};
  return resource ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p> Loading </p>
  );
};
