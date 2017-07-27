import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
    constructor(private _http: Http) {
    }

    getUser() {
        return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
            .map((res: Response) => res.json());
    }

}