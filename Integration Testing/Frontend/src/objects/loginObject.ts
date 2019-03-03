export interface LoginObject {
    username: string;
    password: string;
    type: string;
    token: string;
    roles: Array<string>;
    isLoggedIn: boolean;
}