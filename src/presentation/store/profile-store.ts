import { create } from 'zustand';

export interface ProfileState {
    name: string;
    email: string;

    changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>()( (set, get) => ({
    name: 'Peter Parker',
    email: 'spiderman@gmail.com',

    changeProfile: (name: string, email: string) => {
        set({ name: name, email: email }) // redundante, sería set({ name, email })
    },
}) );
