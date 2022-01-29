import {
  Box,
  Button, InputLabel, TextField, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const {
    getFieldProps, handleSubmit, errors, touched,
  } = useFormik<any>({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    onSubmit: async ( formValues ) => {
      if ( formValues.email === 'dinero' && formValues.password === 'nohay' ) {
        navigate( '/admin/configuration' );
      } else {
        navigate( '/troleado' );
      }
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
}

export default LoginForm;
