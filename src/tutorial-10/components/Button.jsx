const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={(e) => {
        e.preventDefault();
        props.getUserData();
      }}
      className={props.className}
    >
      {props.children}
    </button>
  );
};

export default Button;
