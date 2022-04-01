import './App.css';
import { useState } from 'react'
import { UncontrolledForm } from './UncontrolledForm'
import { ControlledForm } from './ControlledForm'
import { ControlledModal } from './ControlledModal';

function App() {

  const [shouldShowModal, setShouldShowModal] = useState(false)

  return (
    <>
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      <ControlledModal shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}>
          <h1>Hello</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? 'Hide' : 'Show'}
      </button>
      {/* </ControlledModal> */}
    </>
  );
}

export default App;
