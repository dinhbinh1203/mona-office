import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import FormInput from '../FormInput/FormInput';

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  comment: PropTypes.bool,
};

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
