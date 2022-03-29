import React from "react";
import { ButtonCreate } from "./styles";

interface ISubmitButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  disable?: boolean;
  style?: object;
  type?: any;
}
// useEffect
const SubmitButton: React.FC<ISubmitButton> = ({
  label,
  onClick,
  disable,
  style,
  type,
}) => {
  return (
    <ButtonCreate
      style={style}
      type={type ? type : "submit"}
      disabled={disable}
      onClick={onClick}
    >
      {label}
    </ButtonCreate>
  );
};

export default SubmitButton;
