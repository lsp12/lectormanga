import {
  Button, InputLabel, TextField, Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import React from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { postLenguaje } from '../../action/LenguajeReducer';
import { IFormLenguaje } from '../../interface/FormLenguaje';
import { LengaujeSchema } from '../../validator/LengaujeValidator';

export const FromLenguaje = () => {
  const dispatch = useAppDispatch();
  const {
    getFieldProps, handleSubmit, errors, touched,
  } = useFormik<IFormLenguaje>({
    initialValues: {
      code: '',
      locale: '',
      languageLocale: '',
    },
    validationSchema: LengaujeSchema,
    onSubmit: async ( formValues ) => {
      dispatch( postLenguaje( formValues ));
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
          error={touched.code && !!errors.code}
        >
          <Typography fontWeight="bold" fontSize={12}>Codigo</Typography>
        </InputLabel>
        <TextField
          size="small"
          id="correo"
          fullWidth
          variant="standard"
          placeholder="Codigo"
          error={touched.code && !!errors.code}
          helperText={touched.code && errors.code}
          {...getFieldProps( 'code' )}
        />
      </Box>

      <Box mt={5} mb={5}>
        <InputLabel
          htmlFor="correo"
          error={touched.languageLocale && !!errors.languageLocale}
        >
          <Typography fontWeight="bold" fontSize={12}>languageLocale</Typography>
        </InputLabel>
        <TextField
          size="small"
          id="correo"
          fullWidth
          variant="standard"
          placeholder="languageLocale"
          error={touched.languageLocale && !!errors.languageLocale}
          helperText={touched.languageLocale && errors.languageLocale}
          {...getFieldProps( 'languageLocale' )}
        />
      </Box>

      <Box mt={5} mb={5}>
        <InputLabel
          htmlFor="correo"
          error={touched.locale && !!errors.locale}
        >
          <Typography fontWeight="bold" fontSize={12}>Codigo local</Typography>
        </InputLabel>
        <TextField
          size="small"
          id="correo"
          fullWidth
          variant="standard"
          placeholder="Codigo local"
          error={touched.locale && !!errors.locale}
          helperText={touched.locale && errors.locale}
          {...getFieldProps( 'locale' )}
        />
      </Box>

      <Button type="submit" fullWidth>Enviar</Button>
    </form>
  );
};
