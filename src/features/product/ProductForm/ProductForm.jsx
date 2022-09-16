import React from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../../../components/FormFields/InputField';
import { SelectField } from '../../../components/FormFields/SelectField';
import { selectCategoriesOptions } from '../../../store/categories/categories.selector';
import { useSelector } from 'react-redux';
import Loading from '../../../components/Loading/Loading';
import { useState } from 'react';

function ProductForm({ initialValues, onSubmit }) {
  const categoriesOptions = useSelector(selectCategoriesOptions);
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
      // Clear previous submission error
      setError('');

      await onSubmit?.(formValues);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="grid wide">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField
          name="name"
          control={control}
          label="Tên sản phẩm"
          type="text"
        />
        <InputField name="imageUrl" control={control} label="Link ảnh" />
        <InputField
          name="prevPrice"
          control={control}
          label="Giá trước đây"
          type="number"
        />
        <InputField
          name="price"
          control={control}
          label="Giá bán"
          type="number"
        />
        <InputField
          name="description"
          control={control}
          label="Mô tả sản phẩm"
          comment={true}
          type="text"
        />

        <SelectField
          name="categoryId"
          control={control}
          label="Danh mục sản phẩm"
          options={categoriesOptions}
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loading />}
          Cập nhật
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
