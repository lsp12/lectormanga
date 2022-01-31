import axios from 'axios';
import { IFormLenguaje } from '../interface/FormLenguaje';

export const postLenguajeHttp = async ( data: IFormLenguaje ) => {
  const res = await axios.post( `http://localhost:4000/lenguajes`, data );
  return res.data;
};
