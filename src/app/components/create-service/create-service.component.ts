import { Component, OnInit } from "@angular/core";
import { NotifierService } from "angular-notifier";
import { ServiceModel } from "src/app/models/service-model";
import { ServiceUserService } from "src/app/services/service-user.service";

@Component({
    selector: "app-create-service",
    templateUrl: "./create-service.component.html",
    styleUrls: ["./create-service.component.scss"],
})
export class CreateServiceComponent implements OnInit {
    public service: ServiceModel;
    public successMsg: String = "";
    public errorMsg: String = "";

    constructor(
        private serviceProvider: ServiceUserService,
        private notifier: NotifierService
    ) {
        this.service = new ServiceModel();
    }

    ngOnInit(): void {}

    createService() {
        this.serviceProvider.addService(this.service).subscribe(
            (res: any) => {
                this.successMsg = "service added successfully!";
                setTimeout(() => {
                    window.location.href = "/services";
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
