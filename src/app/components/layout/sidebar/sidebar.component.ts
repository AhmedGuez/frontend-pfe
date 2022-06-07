import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
    public sidebarItems = [
        {
            path: "/dashboard",
            title: "Dashboard",
            icon: "grid",
        },
        {
            path: "/users",
            title: "Users",
            icon: "users",
        },
        {
            path: "/interventions",
            title: "Interventions",
            icon: "info",
        },
        { path: "/commandes", title: "commandes", icon: "list", class: "" },
        {
            path: "/create-user",
            title: "Create user",
            icon: "user",
        },
        {
            path: "/user-profile",
            title: "User Profile",
            icon: "settings",
        },

        {
            path: "/notifications",
            title: "Notifications",
            icon: "bell",
            class: "",
        },
    ];
    constructor() {}

    ngOnInit(): void {}
}
