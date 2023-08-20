import { registerPayload } from '@/modules/auth/register';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const registerPayloadSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email()
    .required('Email is required')
    .min(3, 'Email must be at least 3 characters')
    .max(50),
  role: Yup.string().required(' Entry point is required '),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});
export const registerResolver = yupResolver(registerPayloadSchema);

export const registerDefaultValues: registerPayload = {
  first_name:'',
  last_name:'',
  email: '',
  role: '',
  password: '',
};
