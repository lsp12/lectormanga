import {
  Box, Button, InputLabel, TextField, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { postGender } from '../../action/GenderReducer';
import { IFormgender } from '../../interface/FormgenderInterface';
import { genderSchema } from '../../validator/genderValidator';

export const FormGender = () => {
  const dispatch = useAppDispatch();
  const {
    getFieldProps, handleSubmit, errors, touched,
  } = useFormik<IFormgender>({
    initialValues: {
      name: '',
    },
    validationSchema: genderSchema,
    onSubmit: async ( formValues ) => {
      dispatch( postGender( formValues ));
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
          <Typography fontWeight="bold" fontSize={12}>Genero</Typography>
        </InputLabel>
        <TextField
          size="small"
          id="correo"
          fullWidth
          variant="standard"
          placeholder="Genero"
          error={touched.name && !!errors.name}
          helperText={touched.name && errors.name}
          {...getFieldProps( 'name' )}
        />
      </Box>

      <Button type="submit" fullWidth>Enviar</Button>
    </form>
  );
};
