import { AdoptionService } from '../../../services/adoption/adoption.service';
import { Component, OnInit } from '@angular/core';

import { Adoption } from '../../../interfaces/Adoption';

@Component({
    selector: 'app-adoption',
    templateUrl: './adoption.component.html',
    styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {

    back = 'arrow_back';
    link = '/home';
    pets?: Adoption[];

    message: string = ''

    constructor(private service: AdoptionService) { }

    ngOnInit(): void {
        this.service.listAdoption()
        .subscribe(dados => this.pets = dados);
    }

    onClick() {
        this.message = 'Entre em contato com nosso time petpal!';
    }

}
