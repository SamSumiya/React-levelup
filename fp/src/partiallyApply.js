import React from 'react'

export const partiallyApply = (Component, partialProps) => {
  return props => (
     <Component {...partialProps} {...props} />
  )
}

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === 'large' ? '32px' : '10px',
        fontSize: size === 'large' ? '32px' : '10px',
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const DangerButton = partiallyApply(Button, { color: 'red' })