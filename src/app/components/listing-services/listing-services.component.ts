import { Component, OnInit } from "@angular/core";
import { ServiceUserService } from "src/app/services/service-user.service";

@Component({
    selector: "app-listing-services",
    templateUrl: "./listing-services.component.html",
    styleUrls: ["./listing-services.component.scss"],
})
export class ListingServicesComponent implements OnInit {
    public services: any;
    constructor(private serviceProvider: ServiceUserService) {}

    ngOnInit(): void {
        this.serviceProvider.getAllServices().subscribe((res: any) => {
            this.services = res.data;
        });
    }
}
