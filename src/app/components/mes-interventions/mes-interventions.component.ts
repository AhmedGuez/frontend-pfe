import { Component, OnInit } from "@angular/core";
import { InterventionService } from "src/app/services/intervention.service";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-mes-interventions",
    templateUrl: "./mes-interventions.component.html",
    styleUrls: ["./mes-interventions.component.scss"],
})
export class MesInterventionsComponent implements OnInit {
    public interventions: any;
    public me: any;
    public token?: any = localStorage.getItem("token");
    public intervention;
    public affectedUser: any;
    public total = 0;
    public filter;
    constructor(
        private interService: InterventionService,
        private userService: UserService
    ) {
        this.filter = {
            name: "",
            createdBy: "",
            lieu: "",
            etat: "",
        };
    }

    getInterventions(type = null) {
        this.interventions = [];
        if (this.token) {
            this.userService.getConnectedUser().subscribe((res: any) => {
                console.log(res);
                this.me = res.data;

                this.interService
                    .getAllInterventions()
                    .subscribe((res: any) => {
                        console.log(res);
                        this.total = res.length;
                        res.map((inter) => {
                            if (
                                !type &&
                                inter.name[0]
                                    .toLowerCase()
                                    .includes(this.me.role[0].toLowerCase())
                            ) {
                                this.interventions.push(inter);
                            }
                            if (type && inter.affectedBy) {
                                if (inter.affectedBy._id == this.me._id) {
                                    this.interventions.push(inter);
                                }
                            }
                        });
                    });
            });
        }
    }

    ngOnInit(): void {
        this.getInterventions();
    }

    getMesInterventions() {
        this.getInterventions("me");
    }

    setIntervention(inter) {
        console.log("here", inter);
        this.intervention = inter;
    }

    affectedToMe(intervention) {
        this.interService
            .updateInterventionStatus(intervention._id, {
                affectedBy: this.me._id,
            })
            .subscribe((res: any) => {
                window.location.reload();
            });
    }
}
