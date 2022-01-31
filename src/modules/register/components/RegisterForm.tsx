import {
  Box, Button, InputLabel, TextField, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { postRegister } from '../Action/Register.Reducer';
import { RegisteruserInterface } from '../interface/register.interface';
import { registerSchema } from '../validator/Validator.register';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const {
    getFieldProps, handleSubmit, errors, touched,
  } = useFormik<RegisteruserInterface>({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: async ( formValues ) => {
      console.log( formValues );
      dispatch( postRegister( formValues ));
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
    >

      <Box mt={5} mb={5}>
        <InputLabel
          htmlFor="userName"
          error={touched.userName && !!errors.userName}
        >
          <Typography fontWeight="bold" fontSize={12}>Nombre de usuario</Typography>
        </InputLabel>
        <TextField
          size="small"
          id="userName"
          fullWidth
          variant="standard"
          placeholder="Nombre de usuario"
          error={touched.userName && !!errors.userName}
          helperText={touched.userName && errors.userName}
          {...getFieldProps( 'userName' )}
        />
      </Box>

      <Box mt={5} mb={5}>
        <InputLabel
          htmlFor="correo"
          error={touched.email && !!errors.email}
        >
          <Typography fontWeight="bold" fontSize={12}>Correo</Typography>
        </InputLabel>
        <TextField
          size="small"
          id="correo"
          fullWidth
          variant="standard"
          placeholder="Correo electrónico"
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          {...getFieldProps( 'email' )}
        />
      </Box>
      <Box mb={5}>
        <InputLabel
          htmlFor="password"
          error={touched.password && !!errors.password}
        >
          <Typography fontWeight="bold" fontSize={12}>Contraseña</Typography>
        </InputLabel>
        <TextField
          size="small"
          id="password"
          fullWidth
          variant="standard"
          placeholder="Correo electrónico"
          error={touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          {...getFieldProps( 'password' )}
        />
      </Box>
      <Button type="submit" fullWidth>Enviar</Button>
    </form>
  );
};
