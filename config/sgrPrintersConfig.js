import { generateAxiosClient } from '@gdn/logging-middleware-lib';
import axios from 'axios';
import 'dotenv/config';
import HttpError from '../error/httpError.js';

const sgrBaseUrl = process.env.SGR_URL;

const userID = process.env.SGR_PRINT_USER;
const userPassword = process.env.SGR_PRINT_PASSWORD;
const docID = process.env.SGR_PRINT_ID;
const sgrModule = process.env.SGR_PRINT_MODULE;

const authPayload = {
  userName: userID,
  password: userPassword,
  docID: docID,
  module: sgrModule,
};

const authClient = axios.create({
  baseURL: sgrBaseUrl,
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export async function createSgrPrintersClient() {
  try {
    const response = await authClient.post('/stockcount/auth/tokens', authPayload);
    const token = response.data.token;
    if (!token)
      throw new HttpError('No se ha podido obtener el token de SGR', 428, 'BU_SGR_PRINT_004');

    const printersClient = generateAxiosClient({
      baseURL: sgrBaseUrl,
      timeout: 4000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return printersClient;
  } catch (error) {
    console.error('Error al obtener el token o crear el cliente:', error.message);
    throw error;
  }
}
