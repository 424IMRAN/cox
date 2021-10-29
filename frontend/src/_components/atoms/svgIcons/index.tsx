import React from 'react'
export interface IconCompProps {
  icon?: string | undefined
  iconColor?: string
  className?: string
  width?:string
  height?:string
}
const SvgIcon: React.FC<IconCompProps> = ({ icon,iconColor,className,width,height}) => {
  return (

    <img src={icon} alt="icon" data-testid="svgicon" width={width} height={height} color={iconColor} className={className} />
    
  )
}
export default SvgIcon