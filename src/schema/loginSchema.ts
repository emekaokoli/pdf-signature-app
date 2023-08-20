import { loginPayload } from '@/modules/auth/login';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const loginPayloadSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Email is required')
    .min(3, 'Email must be at least 3 characters')
    .max(50),
  entry_point: Yup.string().required(' Entry point is required '),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});
export const loginResolver = yupResolver(loginPayloadSchema);

export const loginDefaultValues: loginPayload = {
  email: '',
  entry_point: '',
  password: '',
};
