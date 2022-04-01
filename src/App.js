import './App.css';
import { CurrentUserLoader } from './CurrentUserLoader'
import { UserLoader } from './UserLoader'
import { ResourceLoader } from './ResourceLoader';
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';

function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/345" resourceName="user">
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl="/products/3456" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
