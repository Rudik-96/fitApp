// src/store/authStore.ts
import { makeAutoObservable } from 'mobx';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from '../config/firebase';

class AuthStore {
  user: User | null = null;
  loading: boolean = false;
  error: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    this.loading = true;
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      this.user = res.user;
    } catch (e: any) {
      this.error = e.message;
    } finally {
      this.loading = false;
    }
  }

  async signUp(email: string, password: string) {
    this.loading = true;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      this.user = res.user;
    } catch (e: any) {
      this.error = e.message;
    } finally {
      this.loading = false;
    }
  }

  async logout() {
    await signOut(auth);
    this.user = null;
  }
}

export const authStore = new AuthStore();
