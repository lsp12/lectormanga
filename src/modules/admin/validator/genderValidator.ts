import * as Yup from 'yup';

export const genderSchema = Yup.object().shape({
  name: Yup.string()
    .required( 'El nombre es requerido' ),
});
