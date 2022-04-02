import { useResource } from "./useResource";
import { useDataResource } from "./useDataResource";

const serverResource = resourceUrl => async () => {
  const response = await fetch(resourceUrl);
  return response.json()
}

export const ProductInfo = ({productId}) => {

  const { resource } = useDataResource(
    serverResource(`/products/${productId}`)
  );
 
  const { name, price, description, rating } = resource || {};

  return resource ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
};
