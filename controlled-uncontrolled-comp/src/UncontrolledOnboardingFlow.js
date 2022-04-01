import React, { useState } from 'react'

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {

  const [onbordingData, setOnboardingData] = useState({})
  const [currentIdx, setCurrentIdx] = useState(0)

  const currentChild = React.Children.toArray(children)[currentIdx]

  const goToNext = (stepData) => {
    const nextIndex = currentIdx + 1 
    const updatedData = {
      ...onbordingData, 
      ...stepData, 
    }

    if (nextIndex < children.length) {
      setCurrentIdx(nextIndex);
    } else {
      onFinish(updatedData);
    }
    setOnboardingData(updatedData)
  }

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext })
  }

  return currentChild
}
