import './App.css';
// import { CurrentUserLoader } from './CurrentUserLoader';
// import { UserLoader } from './UserLoader';
// import { ResourceLoader } from './ResourceLoader';
import { DataSource } from './DataSource';
import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';
import React from "react";

const getServerData = url => async () => {
  const response = await fetch(url)
  const data = response.json()
  return data
}

const getLocalStorageData = key => () => {
  return localStorage.getItem(key)
}

const Text = ({ message }) => {
 return <h1>{message}</h1>
}

function App() {
  return (
    <>
      <DataSource
        // getDataFunc={async () => {
        //   const response = await fetch('/users/345');
        //   const data = response.json();
        //   return data;
        // }}
        getDataFunc={getServerData('/users/345')}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>

      <DataSource
        getDataFunc={async () => {
          const response = await fetch('/products/3456');
          const data = response.json();
          return data;
        }}
        resourceName="product"
      >
        <ProductInfo />
      </DataSource>

      <DataSource
        getDataFunc={getLocalStorageData('message')}
        resourceName='message'
      >
        <Text /> 
      </DataSource>
    </>
  );
}

export default App;
