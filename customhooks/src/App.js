import './App.css';
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';

function App() {
  return (
    <>
      <UserInfo userId="123" />
      <UserInfo userId="234" />
      <ProductInfo productId="1234" />
    </>
  );
}

export default App;
