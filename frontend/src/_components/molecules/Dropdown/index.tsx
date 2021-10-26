import { MenuItem, Select, ThemeProvider } from '@material-ui/core'
import React, { CSSProperties } from 'react'
import theme from '../../../core-utils/theme'
import Typography from '../../atoms/Typography'

export interface SelectButtonProps {
  options: any[]
  styles: CSSProperties | undefined
  variant: 'filled' | 'outlined' | 'standard' | undefined
  placeholderValue: string | undefined
  placeholderColor: string | undefined
  value: string
  handleChange: () => void
}

const SelectComponent: React.FC<SelectButtonProps> = ({
  options,
  styles,
  variant,
  placeholderValue,
  placeholderColor,
  value,
  handleChange,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Select
        placeholder="select"
        data-testid="selectTest"
        variant={variant}
        value={value}
        onChange={handleChange}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          getContentAnchorEl: null,
        }}
        defaultValue="none"
        style={styles}
        displayEmpty
      >
        {placeholderValue === undefined ? (
          <MenuItem value="">
            <Typography variant="body2">1</Typography>
          </MenuItem>
        ) : (
          <MenuItem value="" disabled>
            <Typography variant="body2" styles={{ color: placeholderColor }}>
              {placeholderValue}
            </Typography>
          </MenuItem>
        )}

        {options.map((option) => (
          <MenuItem value={option} key={option}>
            <Typography variant="body2">{option}</Typography>
          </MenuItem>
        ))}
      </Select>
    </ThemeProvider>
  )
}

export default SelectComponent
