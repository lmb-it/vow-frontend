import { AppState } from './toolkit';
import { IToastState } from './ui/toast.slice';

export interface IReducers extends AppState {
    toast: IToastState;
}