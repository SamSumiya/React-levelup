import './App.css';
import { CurrentUserLoader } from './CurrentUserLoader'
import { UserLoader } from './UserLoader'
import { ResourceLoader } from './ResourceLoader';
import { UserInfo } from './UserInfo'

function App() {
  return (
    <>
      <ResourceLoader
        resourceUrl='/users/345'
        resourceName='user'
      >
        <UserInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
