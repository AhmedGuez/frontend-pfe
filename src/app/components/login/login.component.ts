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
                if (res?.token) {
                    window.location.href = "/dashboard";
                }
            });
    }
}
