import React from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: #fff;
  margin: 10% auto;
  padding: 10rem;
  width: 50%;
`;

export const ControlledModal = ({ shouldShow, onRequestClose, children }) => {
  return (
    <>
      {shouldShow ? (
        <ModalBackground>
          <ModalBody>
            <button onClick={onRequestClose}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      ) : null
      } 
    </>
  );
};
