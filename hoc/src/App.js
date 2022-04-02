
import './App.css';
import { printProps } from './printProps'
import { UserInfo } from './UserInfo'
import { withUser } from './withUser';
import { UserInfoForm } from './UserInfoForm';
const UserInfoWrapped = printProps(UserInfo)

const UserInfoWithLoader = withUser(UserInfo, '234')

function App() {
  return (
    <>
      <UserInfoWithLoader a={123}/>
    </>
  );
}

export default App;
