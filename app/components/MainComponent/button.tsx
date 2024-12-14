interface InputProps {
  className?: string;
  onClick?: any;
}

const Button: React.FC<InputProps> = ({ className, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        add
      </button>
    </>
  );
};

export default Button;
