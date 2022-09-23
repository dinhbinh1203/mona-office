import React from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../../components/FormFields/InputField';
import Loading from '../../components/Loading/Loading';
import { useState } from 'react';
import { default as ButtonDefault } from '../../components/Button/Button';

function UserForm({ initialValues, onSubmit, nameSubmit }) {
  const [error, setError] = useState('');
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: initialValues,
  });

  const handleFormSubmit = async (formValues) => {
    console.log('Submit:', formValues);
    try {
      setError('');
      await onSubmit?.(formValues);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name="name" control={control} label="Tên" type="text" />
        <InputField
          name="phone"
          control={control}
          label="Số điện thoại"
          type="text"
        />
        <InputField
          name="address"
          control={control}
          label="Địa chỉ"
          type="text"
        />
        <ButtonDefault type="submit" disabled={isSubmitting} primary>
          {nameSubmit}
        </ButtonDefault>
      </form>
    </div>
  );
}

export default UserForm;
