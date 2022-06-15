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

    public getServices() {
        this.serviceProvider.getAllServices().subscribe((res: any) => {
            this.services = res.data;
        });
    }
    ngOnInit(): void {
        this.serviceProvider.getAllServices().subscribe((res: any) => {
            this.services = res.data;
        });
    }
    deleteService(id) {
        this.serviceProvider.deleteService(id).subscribe((res) => {
            this.getServices();
        });
    }
}
