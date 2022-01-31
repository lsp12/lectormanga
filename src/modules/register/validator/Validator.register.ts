import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  userName: Yup.string()
    .min( 3, 'Username must be at least 3 characters' )
    .max( 15, 'Username must be 15 characters or less' )
    .required( 'El nombre de usuario es requerido' ),
  email: Yup.string()
    .email( 'Invalid email address' )
    .required( 'Correo es requerido' ),
  password: Yup.string()
    .min( 5, 'Password must be at least 8 characters' )
    .max( 15, 'Password must be 15 characters or less' )
    .required( 'Contraseña es requerido' ),
});
