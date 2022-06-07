import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-create-user",
    templateUrl: "./create-user.component.html",
    styleUrls: ["./create-user.component.scss"],
})
export class CreateUserComponent implements OnInit {
    public user: User;
    public successMsg: String = "";
    public errorMsg: String = "";
    constructor(private userService: UserService) {
        this.user = new User();
    }

    ngOnInit(): void {}

    createUser() {
        this.userService.createUser(this.user).subscribe((res: any) => {
            this.successMsg = "User added successfully!";
            setTimeout(() => {
                window.location.href = "/users";
            }, 2000);
        });
    }
}
