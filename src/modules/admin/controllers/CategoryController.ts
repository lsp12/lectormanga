import axios from 'axios';
import { IFormCategory } from '../interface/FormCategoryInterface';

const API = 'http://localhost:4000';

export const postCategoryHttp = async ( data: IFormCategory ) => {
  const res = await axios.post( `${API}/categories`, data );
  return res.data;
};
