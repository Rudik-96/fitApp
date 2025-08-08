import { makeAutoObservable, runInAction } from 'mobx';
import auth from '@react-native-firebase/auth';

class AuthStore {
  user: any = null;
  error: string = '';

  constructor() {
    makeAutoObservable(this);
    auth().onAuthStateChanged(user => {
      runInAction(() => {
        this.user = user;
      });
    });
  }

  async signUp(email: string, password: string) {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      runInAction(() => {
        this.error = '';
      });
    } catch (err: any) {
      runInAction(() => {
        this.error = err.message;
      });
    }
  }

  async login(email: string, password: string) {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      runInAction(() => {
        this.error = '';
      });
    } catch (err: any) {
      runInAction(() => {
        this.error = err.message;
      });
    }
  }

  async logout() {
    try {
      await auth().signOut();
    } catch (err: any) {
      console.log('Logout error:', err.message);
    }
  }
}

export const authStore = new AuthStore();
