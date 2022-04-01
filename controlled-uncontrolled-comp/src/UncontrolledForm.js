import React from 'react'

export const UncontrolledForm = () => {

  const nameInput = React.createRef()
  const ageInput = React.createRef();
  const hairColorInput = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(
      nameInput.current.value,
      ageInput.current.value,
      hairColorInput.current.value
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          ref={nameInput} />
        <input
          type="text"
          name="age"
          placeholder="age"
          ref={ageInput} />
        <input
          type="text"
          name="hairColor"
          placeholder="Hair Color"
          ref={hairColorInput} />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

