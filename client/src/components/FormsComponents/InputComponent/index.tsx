import React from "react";
import { DivInput, LabelCheckBox } from "./styles";

interface IInputComponent {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: any;
  value?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  type?: string;
  children?: React.ReactNode;
  checked?: boolean;
  labelStyle?: object;
}

const InputComponent: React.FC<IInputComponent> = ({
  label,
  onChange,
  value,
  required,
  placeholder,
  name,
  type,
  children,
  checked,
  labelStyle,
}) => {
  return (
    <DivInput>
      {label && type != "checkbox" && <label style={labelStyle}>{label}</label>}
      {label && type == "checkbox" ? (
        <LabelCheckBox style={labelStyle}>
          <input
            key={checked ? "with" : "nothing"}
            name={name}
            value={value}
            required={required || false}
            type={type || "text"}
            placeholder={placeholder}
            onChange={onChange}
            checked={checked}
          />
          {label}
        </LabelCheckBox>
      ) : (
        value !== undefined && (
          <input
            name={name}
            value={value}
            required={required || false}
            type={type || "text"}
            placeholder={placeholder}
            onChange={onChange}
            checked={checked}
          />
        )
      )}

      {children}
    </DivInput>
  );
};

export default InputComponent;
