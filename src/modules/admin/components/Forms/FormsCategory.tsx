import {
  Box, Button, InputLabel, TextField, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { postCategory } from '../../action/CategoryReducer';
import { IFormCategory } from '../../interface/FormCategoryInterface';
import { categorySchema } from '../../validator/CategoryValidator';

export const FormsCategory = () => {
  const dispatch = useAppDispatch();
  const {
    getFieldProps, handleSubmit, errors, touched,
  } = useFormik<IFormCategory>({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: categorySchema,
    onSubmit: async ( formValues ) => {
      dispatch( postCategory( formValues ));
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Box mt={5} mb={5}>
        <InputLabel
          htmlFor="correo"
          error={touched.name && !!errors.name}
        >
          <Typography fontWeight="bold" fontSize={12}>Nombre Categoria</Typography>
        </InputLabel>
        <TextField
          size="small"
          id="correo"
          fullWidth
          variant="standard"
          placeholder="Cateogria"
          error={touched.name && !!errors.name}
          helperText={touched.name && errors.name}
          {...getFieldProps( 'name' )}
        />
      </Box>

      <Box mt={5} mb={5}>
        <InputLabel
          htmlFor="correo"
          error={touched.description && !!errors.description}
        >
          <Typography fontWeight="bold" fontSize={12}>Descipcion</Typography>
        </InputLabel>
        <TextField
          size="small"
          id="correo"
          fullWidth
          variant="standard"
          placeholder="Description"
          error={touched.description && !!errors.description}
          helperText={touched.description && errors.description}
          {...getFieldProps( 'description' )}
        />
      </Box>

      <Button type="submit" fullWidth>Enviar</Button>
    </form>
  );
};
