import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    public email?: string;
    public password?: string;
    constructor(private userService: UserService, private router: Router) {
        this.email = "";
        this.password = "";
    }

    ngOnInit(): void {}

    handleSubmit() {
        console.log("user : ", this.email, this.password);
        this.userService
            .login(this.email, this.password)
            .subscribe((res: any) => {
                localStorage.setItem("token", res?.token);
                localStorage.setItem("role", res?.role);
                if (res?.token && res?.role === "ADMIN") {
                    window.location.href = "/dashboard";
                } else if (res?.token && res?.role == "EMPLOYEE") {
                    window.location.href = "/create-intervention";
                } else if (res?.token) {
                    window.location.href = "/dashboard-client";
                }
            });
    }
}
