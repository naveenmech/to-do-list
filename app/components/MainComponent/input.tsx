interface InputProps {
  className?: string;
  placeholder?: string;
  value: string;
  onChange: any;
  inputValue: string;
}

const Input: React.FC<InputProps> = ({
  className,
  placeholder,
  onChange,
  inputValue,
}) => {
  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
