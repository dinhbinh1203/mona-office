import { FormHelperText, MenuItem, Select } from '@mui/material';

import { InputLabel } from '@mui/material';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { FormControl } from '@mui/material';
import { selectCategoriesOptions } from '../../store/categories/categories.selector';

export function SelectField({ name, control, label, disabled, options }) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl
      fullWidth
      variant="outlined"
      margin="normal"
      size="small"
      disabled={disabled}
      error={invalid}
    >
      <InputLabel id={`${name}_label`}>{label}</InputLabel>
      <Select
        labelId={`${name}_label`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
