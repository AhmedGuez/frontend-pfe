import { Component, OnInit } from "@angular/core";
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

    constructor(private serviceProvider: ServiceUserService) {
        this.service = new ServiceModel();
    }

    ngOnInit(): void {}

    createService() {
        this.serviceProvider.addService(this.service).subscribe((res: any) => {
            this.successMsg = "service added successfully!";
            setTimeout(() => {
                window.location.href = "/services";
            }, 2000);
        });
    }
}
