import axios from 'axios';
import { IFormgender } from '../interface/FormgenderInterface';

const API = 'http://localhost:4000';
export const postGenderHttp = async ( data:IFormgender ) => {
  const res = await axios.post( `${API}/genders`, data );
  return res.data;
};
