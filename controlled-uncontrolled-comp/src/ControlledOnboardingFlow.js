import React from 'react';

export const ControlledOnboardingFlow = ({ children, onFinish, currentIndex, onNext }) => {
  // const [onbordingData, setOnboardingData] = useState({});
  // const [currentIdx, setCurrentIdx] = useState(0);

  // const goToNext = (stepData) => {
  //   const nextIndex = currentIdx + 1;
  //   const updatedData = {
  //     ...onbordingData,
  //     ...stepData,
  //   };

  //   if (nextIndex < children.length) {
  //     setCurrentIdx(nextIndex);
  //   } else {
  //     onFinish(updatedData);
  //   }
  //   setOnboardingData(updatedData);
  // };

  const goToNext = stepData => {
    onNext(stepData) 
  }

  const currentChild = React.Children.toArray(children)[currentIndex];

 

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};
