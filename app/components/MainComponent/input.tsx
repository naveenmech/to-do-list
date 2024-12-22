interface InputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: any;
  inputValue?: string;
  onKeyDown?: any;
}

const Input: React.FC<InputProps> = ({
  className,
  placeholder,
  onChange,
  inputValue,
  onKeyDown,
}) => {
  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default Input;
