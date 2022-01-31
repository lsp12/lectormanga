import axios from 'axios';
import { RegisteruserInterface } from '../interface/register.interface';

const API = 'http://localhost:4000';

export const postRegisterhttp = async ( data:RegisteruserInterface ):Promise<any> => {
  const res = await axios.post( `${API}/users`, data );
  return res.data;
};
