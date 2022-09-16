import { useController } from 'react-hook-form';
import FormInput from '../FormInput/FormInput';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { type } from '@testing-library/user-event/dist/type';

export function InputField({
  name,
  control,
  label,
  type,
  comment,
  ...inputProps
}) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid },
  } = useController({
    name,
    control,
  });

  return (
    <FormInput
      required
      label={label}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      inputRef={ref}
      error={invalid}
      type={type}
      inputProps={inputProps}
      comment={comment}
    />
  );
}
