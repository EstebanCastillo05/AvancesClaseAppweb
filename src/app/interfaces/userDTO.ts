export interface UserDTO{
    name: string;
    lastName?: string;
    age: number;
    email?: string;
    password?: string;
    confirmPassword?: string;
    lenguagues?: lenguage[];

}

export interface lenguage {
    name: string;
    code: string;
}

export interface LoginDTO {
    user: string;
    password: string;
}

export interface User {
    id?: number;
    username: string;
    names: string;
    lastnames: string;
    age: number;
    gender: string;
    password: string;
    email: string;
}

export interface Login {
    username: string;
    password: string;
}