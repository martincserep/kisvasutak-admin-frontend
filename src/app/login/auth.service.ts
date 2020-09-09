import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private eventAuthError = new BehaviorSubject<string>("")
    eventAuthError$ = this.eventAuthError.asObservable()

    constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

    getUserState() {
        return this.afAuth.authState
    }

    login(email: string, password: string, stayLoggedIn: boolean) {
        this.afAuth.signInWithEmailAndPassword(email,password)
            .catch(error => {
                this.eventAuthError.next(error)
            })
            .then( userCredential => {
                if(userCredential) {
                    if(stayLoggedIn) {
                        localStorage.setItem('userId', userCredential.user.uid)
                    } else {
                        sessionStorage.setItem('userId', userCredential.user.uid)
                    }
                    this.router.navigate(['/trains'])
                }
            })
    }

    logout() {

        localStorage.removeItem('userId')
        sessionStorage.removeItem('userId')
        this.router.navigate(['/login'])
        return this.afAuth.signOut()
    }

    isLoggedIn() {
        if(localStorage.getItem('userId')) {
            console.log("Is logged in: " + !!sessionStorage.getItem('userId'))
            return !!localStorage.getItem('userId')
        } else { 
            console.log("Is logged in: " + !!sessionStorage.getItem('userId'))
            return !!sessionStorage.getItem('userId')
        }
    }
}