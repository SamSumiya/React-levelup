import './App.css';
import { useState } from 'react';
// import { UncontrolledForm } from './UncontrolledForm'
// import { ControlledForm } from './ControlledForm'
// import { ControlledModal } from './ControlledModal';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);


  const StepOne = ({ goToNext }) => (
    <>
      <h2>Step 1</h2>
      <button onClick={() => goToNext({name: 'Alex'})}>Next</button>
    </>
  );
  const StepTwo = ({ goToNext }) => (
    <>
      <h2>Step 2</h2>
      <button onClick={() => goToNext({ age: 22 })}>Next</button>
    </>
  );
  const StepThree = ({ goToNext }) => (
    <>
      <h2>Step 3</h2>
      <button onClick={() => goToNext({hairColor: 'Red'})}>Next</button>
    </>
  );

  return (
    <>
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      {/* <ControlledModal shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}>
          <h1>Hello</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? 'Hide' : 'Show'}
      </button> */}
      {/* </ControlledModal> */}

      <UncontrolledOnboardingFlow onFinish={data => console.log(data)}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
    </>
  );
}

export default App;
