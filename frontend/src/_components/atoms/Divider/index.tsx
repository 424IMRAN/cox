import MUIDivider from '@material-ui/core/Divider'
import { CSSProperties } from 'react'

type DividerProps = {
  variant?: 'fullWidth' | 'inset' | 'middle' | undefined
  orientation?: 'horizontal' | 'vertical' | undefined
  customStyle?: CSSProperties
  customClass?: any
  [restProps: string]: unknown
}

const Divider = ({
  variant,
  orientation,
  customStyle,
  customClass,
  ...restProps
}: DividerProps) => {
  return (
    <MUIDivider
      variant={variant}
      orientation={orientation}
      style={customStyle}
      className={customClass}
      {...restProps}
      data-testid="dividerTest"
    />
  )
}

Divider.defaultProps = {
  variant: undefined,
  orientation: undefined,
  customStyle: undefined,
  customClass: undefined,
}

export default Divider
