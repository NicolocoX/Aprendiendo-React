import { useState } from "react"

export const Square = ({ children, index, initIsSelected, onClick }) => {
  const [isSelected, setIsSelected] = useState(initIsSelected)
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const [marca, setMarca] = useState("")


  return (
    <div className={className} onClick={() => onClick(index)}>
      {children}
    </div>
  )
}