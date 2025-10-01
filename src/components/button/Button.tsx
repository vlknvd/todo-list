import './button.css';

interface ButtonProps {
  className: string;
  text: string;
  id?: string;
  onClick?: () => void;
}

const Button = ({ className, text, onClick, id }: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={onClick} id={id}>
      {text}
    </button>
  );
};

export default Button;
