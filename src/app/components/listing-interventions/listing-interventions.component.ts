import { Component, OnInit } from "@angular/core";
import { InterventionService } from "src/app/services/intervention.service";

@Component({
    selector: "app-listing-interventions",
    templateUrl: "./listing-interventions.component.html",
    styleUrls: ["./listing-interventions.component.scss"],
})
export class ListingInterventionsComponent implements OnInit {
    public interventions: any;
    public intervention;
    public total = 0;
    constructor(private interService: InterventionService) {}

    ngOnInit(): void {
        this.interService.getAllInterventions().subscribe((res: any) => {
            console.log(res);
            this.total = res.length;
            this.interventions = res;
        });
    }
    setIntervention(inter) {
        console.log("here", inter);
        this.intervention = inter;
    }
}
