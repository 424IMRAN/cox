import React from 'react'
export interface IconCompProps {
  icon?: string | undefined
  iconColor?: string
  className?: string
}
const SvgIcon: React.FC<IconCompProps> = ({ icon}) => {
  return (
    <img src={icon} alt="icon" data-testid="svgicon"/>
    
  )
}
export default SvgIcon