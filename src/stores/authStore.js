import { create } from 'zustand'

const useAuthStore = create((set, get) => ({
  user: null,

  login: ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(
      (user) =>
        user.email.toLowerCase() === email.trim().toLowerCase() &&
        user.password === password
    );

    if (existingUser) {
      set({ user: existingUser });
      return { success: true };
    } else {
      return { success: false, message: 'Email atau password salah!' };
    }
  },

  register: ({ name, email, password }) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const isEmailExist = users.some(
      (user) => user.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (isEmailExist) {
      return { success: false, message: 'Email sudah terdaftar!' };
    }

    const newUser = {
      name,
      email: email.trim().toLowerCase(),
      password,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true };
  },

  logout: () => {
    set({ user: null });
  },

  deleteUser: () => {
    const currentUser = get().user;
    if (!currentUser) {
      return { success: false, message: 'User tidak ditemukan' };
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const filteredUsers = users.filter(user => user.email !== currentUser.email);

    localStorage.setItem('users', JSON.stringify(filteredUsers));
    set({ user: null });

    return { success: true };
  },
}));

export default useAuthStore;
