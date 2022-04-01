import './App.css';
import { useState } from 'react';
// import { UncontrolledForm } from './UncontrolledForm'
// import { ControlledForm } from './ControlledForm'
// import { ControlledModal } from './ControlledModal';
// import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow'

function App() {
  // const [shouldShowModal, setShouldShowModal] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [onbordingData, setOnboardingData] = useState({});

  const onNext = stepData => {
    setOnboardingData({ ...onbordingData, ...stepData });
    setCurrentIndex(currentIndex + 1)
  }

  const StepOne = ({ goToNext }) => (
    <>
      <h2>Step 1</h2>
      <button onClick={() => goToNext({ name: 'Alex' })}>Next</button>
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
      <button onClick={() => goToNext({ hairColor: 'Red' })}>Next</button>
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

      <ControlledOnboardingFlow
        onFinish={(data) => console.log(data)}
        currentIndex = { currentIndex }
        onNext = { onNext }
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
