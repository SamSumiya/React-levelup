export const Button = ({ size, color, text, ...props }) => {
  
  return (
    <button
      style={{
        padding: size === 'large' ? '32px' : '10px',
        fontSize: size === 'large' ? '32px' : '10px',
        backgroundColor: color, 
      }}
      { ... props }
    >{text}</button>
  );
}

export const DangerButton = props => {
  return (
    <Button {...props} color='red' />
  )
}

<DangerButton /> 