import React from 'react'
import { ButtonCreate } from './styles'

interface ISubmitButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  label: string
  disable?: boolean
  style?: object
}
// useEffect
const SubmitButton: React.FC<ISubmitButton> = ({
  label,
  onClick,
  disable,
  style,
}) => {
  return (
    <ButtonCreate
      style={style}
      type="submit"
      disabled={disable}
      onClick={onClick}
    >
      {label}
    </ButtonCreate>
  )
}

export default SubmitButton
