export interface RegisterObject {
    username: string;
    password1: string;
    password2: string;
    type: string;
    token: string;
    isLoggedIn: boolean;
    roles: Array<string>;
}