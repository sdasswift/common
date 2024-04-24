import { atomWithStorage } from 'jotai/utils';

// dark mode state
export const darkModeAtom = atomWithStorage<boolean>('darkMode', false);
