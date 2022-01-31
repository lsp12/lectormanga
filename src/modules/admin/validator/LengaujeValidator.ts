import * as Yup from 'yup';

export const LengaujeSchema = Yup.object().shape({
  locale: Yup.string()
    .required( 'El nombre es requerido' ),
  code: Yup.string()
    .required( 'La descripción es requerida' ),
  languageLocale: Yup.string()
    .required( 'La descripción es requerida' ),
});
