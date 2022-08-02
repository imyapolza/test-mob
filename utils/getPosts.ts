import axios from 'axios';
import { baseUrl } from '../constants/fakeData';

const getPosts: (arg: string) => Promise<any> = async (access_token: string | undefined) => {
  const resp = await axios.get(`${baseUrl}/660/user`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return resp;
};

export default getPosts;
