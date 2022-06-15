import { Component, OnInit } from "@angular/core";
import { Fournisseur } from "src/app/models/fournisseur";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-listing-fournisseurs",
    templateUrl: "./listing-fournisseurs.component.html",
    styleUrls: ["./listing-fournisseurs.component.scss"],
})
export class ListingFournisseursComponent implements OnInit {
    public fournisseurs: Fournisseur[];

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.getAllFournisseurs().subscribe((res: any) => {
            this.fournisseurs = res.data.reverse();
        });
    }
}
