import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-listing-users",
    templateUrl: "./listing-users.component.html",
    styleUrls: ["./listing-users.component.scss"],
})
export class ListingUsersComponent implements OnInit {
    public users: User[];
    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.getAllUsers().subscribe((res: any) => {
            this.users = res.data;
        });
    }
}
