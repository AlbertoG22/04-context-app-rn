import { create } from "zustand";


export interface ProfileState {
    name: string;
    email: string;
}

export const useProfileStore = create<ProfileState>()( (set) => ({
    name: 'Peter Parker',
    email: 'spiderman@gmail.com'
}) );