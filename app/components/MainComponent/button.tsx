interface InputProps {
  className?: string;
  onClick?: any;
  disabled?: any;
}

const Button: React.FC<InputProps> = ({ className, onClick, disabled }) => {
  return (
    <>
      <button className={className} onClick={onClick} disabled={disabled}>
        add
      </button>
    </>
  );
};

export default Button;
