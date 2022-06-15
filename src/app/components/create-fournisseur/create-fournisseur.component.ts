import { Component, OnInit } from "@angular/core";
import { NotifierService } from "angular-notifier";
import { Fournisseur } from "src/app/models/fournisseur";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-create-fournisseur",
    templateUrl: "./create-fournisseur.component.html",
    styleUrls: ["./create-fournisseur.component.scss"],
})
export class CreateFournisseurComponent implements OnInit {
    public fournisseur: Fournisseur;
    public successMsg: String = "";
    public errorMsg: String = "";

    constructor(
        private userService: UserService,
        private notifier: NotifierService
    ) {
        this.fournisseur = new Fournisseur();
    }

    ngOnInit(): void {}

    createFournisseur() {
        this.userService.createFournisseur(this.fournisseur).subscribe(
            (res: any) => {
                this.successMsg = "Fournisseur added successfully!";
                setTimeout(() => {
                    window.location.href = "/fournisseurs";
                }, 2000);
            },
            (err) => {
                console.log("err", err);
                this.notifier.show({
                    type: "error",

                    message: "Tous les champs sont Obligatoire SVP!",
                    id: "THAT_NOTIFICATION_ID", // Again, this is optional
                });
            }
        );
    }
}
