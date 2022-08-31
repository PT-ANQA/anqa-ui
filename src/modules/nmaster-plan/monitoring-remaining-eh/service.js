import { inject, Lazy } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { RestService } from '../../../utils/rest-service';
import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

const serviceUri = 'garment-master-plan/monitoring-remaining-eh';

export class Service extends RestService {

    constructor(http, aggregator, config, endpoint) {
        super(http, aggregator, config, "nmasterplan");
    }

    search(info) { 
        var endpoint = `${serviceUri}?filter=${info}`;
        return super.get(endpoint);
    }
    
    generateExcel(info) {
        var endpoint = `${serviceUri}?filter=${info}`;
        return super.getXls(endpoint);
    }
}
