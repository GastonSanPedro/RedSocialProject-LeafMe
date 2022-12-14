

export interface UserResponse {
    users: IUser[];
}



export interface IUser {
    firstName: string;
    lastName:  string;
    fullName?: string;
    userName:  string;
    email:     string;
    password:  string;
    image:     string;
    birthdate: string;
    posteos?: Iposteos[];
    bio?: string;
    cover?: string
    
}

export interface Iposteos{
    ID: string;
    description: string;
    pics?: string
}
