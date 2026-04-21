import * as yup from 'yup';
import type {IFormElement} from '@lmb-it/kitsconcerto';
import type {ILoginElementOptions} from '../../models/auth.form.types';

export const getLoginElements = (options: ILoginElementOptions): IFormElement[] => [
    {
        id: 'email',
        type: 'Email',
        initialValue: '',
        label: 'email',
        leftAddon: options.FiMail,
        isDisabled: options.isLoading,
        schema: yup
            .string()
            .min(4, 'emailError')
            .required('emailError'),
        localProps: {
            ignoreDirection: true,
        },
        colSpan: 12,
    },
    {
        id: 'password',
        type: 'Password',
        label: 'password',
        toggleEye: true,
        leftAddon: options.FiLock,
        initialValue: '',
        localProps: {
            ignoreDirection: true,
        },
        isDisabled: options.isLoading,
        schema: yup.string().min(8, 'Password Too Short').required(),
        colSpan: 12,
    },
];
