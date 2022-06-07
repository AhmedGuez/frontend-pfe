import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class UserService {
    public base_Url = "http://localhost:5000";
    public isConnected: boolean = false;
    constructor(private http: HttpClient) {}

    public login(email: any, password: any) {
        return this.http.post(this.base_Url + "/users/login", {
            email: email,
            password: password,
        });
    }
    public getConnectedUser() {
        let token = localStorage.getItem("token");
        let headers = new HttpHeaders({
            "x-auth-token": token ? token : "",
        });
        if (token) {
            this.isConnected = true;
        }
        return this.http.get(this.base_Url + "/users/me", { headers });
    }

    public updateUser(id, account) {
        let token = localStorage.getItem("token");
        let headers = new HttpHeaders({
            "x-auth-token": token ? token : "",
        });

        return this.http.put(this.base_Url + "/users/update/" + id, account, {
            headers,
        });
    }

    public createUser(account) {
        let token = localStorage.getItem("token");
        let headers = new HttpHeaders({
            "x-auth-token": token ? token : "",
        });

        return this.http.post(this.base_Url + "/users/createuser", account, {
            headers,
        });
    }

    public getAllUsers() {
        let token = localStorage.getItem("token");
        let headers = new HttpHeaders({
            "x-auth-token": token ? token : "",
        });

        return this.http.get(this.base_Url + "/users", {
            headers,
        });
    }
}
