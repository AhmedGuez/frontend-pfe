import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Intervention } from "src/app/models/intervention";
import { InterventionService } from "src/app/services/intervention.service";

@Component({
    selector: "app-intervention-details",
    templateUrl: "./intervention-details.component.html",
    styleUrls: ["./intervention-details.component.scss"],
})
export class InterventionDetailsComponent implements OnInit {
    public intervention: Intervention;
    constructor(
        private interventionService: InterventionService,
        private router: ActivatedRoute
    ) {}

    ngOnInit(): void {
        console.log(this.router);
        let idIntervention = this.router.params["id"];
        console.log(idIntervention);
        this.interventionService
            .getInterventionById(this.router.params)
            .subscribe((res) => {
                console.log(res);
            });
    }
}
