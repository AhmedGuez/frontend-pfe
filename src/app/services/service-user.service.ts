import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ServiceUserService {
    public base_Url = "http://localhost:5000";

    constructor(private http: HttpClient) {}

    public addService(service) {
        return this.http.post(this.base_Url + "/services/add-service", {
            name: service.name,
            email: service.email,
            tel: service.tel,
        });
    }

    public getAllServices() {
        return this.http.get(this.base_Url + "/services/getAllSerives");
    }

    public deleteService(id) {
        let token = localStorage.getItem("token");
        let headers = new HttpHeaders({
            "x-auth-token": token ? token : "",
        });
        return this.http.delete(
            this.base_Url + `/services/delete/${id}`,

            { headers }
        );
    }
}
