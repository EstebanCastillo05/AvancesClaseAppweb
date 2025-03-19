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