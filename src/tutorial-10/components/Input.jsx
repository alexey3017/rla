const Input = ({ className, setUserInput, userInput, onChangeSearch }) => {
  const onInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <input
      value={userInput}
      onChange={(e) => {
        onInputChange(e);
        onChangeSearch();
      }}
      className={className}
      type='text'
      placeholder='Укажите GitHub-аккаунт'
    />
  );
};

export default Input;
