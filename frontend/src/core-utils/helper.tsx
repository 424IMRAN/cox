export const getMappedVariant = (variant: string) => {
  switch (variant) {
    case 'heading1':
      return 'h1'
    case 'heading2':
      return 'h2'
    case 'heading3':
      return 'h3'
    case 'heading4':
      return 'h4'
    case 'subtitle1':
      return 'subtitle1'
    case 'subtitle2':
      return 'subtitle2'
    case 'body1':
      return 'body1'
    case 'body2':
      return 'body2'
    case 'caption1':
      return 'h5'
    case 'caption2':
      return 'h6'
    case 'overline':
      return 'overline'
    default:
      return 'body1'
  }
}

export const textFieldVariants = (variant: string | undefined) => {
  switch (variant) {
    case 'filled':
      return 'filled'
    case 'standard':
      return 'standard'
    default:
      return 'outlined'
  }
}

export const textFieldmargin = (margin: string | undefined) => {
  switch (margin) {
    case 'dense':
      return 'dense'
    case 'normal':
      return 'normal'
    default:
      return 'none'
  }
}

export const getSwitchColors = (color: string | undefined) => {
  switch (color) {
    case 'primary':
      return 'primary'
    case 'secondary':
      return 'secondary'
    default:
      return 'default'
  }
}
