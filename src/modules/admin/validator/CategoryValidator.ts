import * as Yup from 'yup';

export const categorySchema = Yup.object().shape({
  name: Yup.string()
    .required( 'El nombre es requerido' ),
  description: Yup.string()
    .required( 'La descripción es requerida' ),
});
