import { LoginObject } from './loginObject';

export interface LoginActionReturnObject {
    type: string;
    loginObject: LoginObject;
}