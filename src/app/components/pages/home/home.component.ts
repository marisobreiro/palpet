import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    pets = 'pets';
    plink = '/pets'

    agenda = 'calendar_month';
    agdlink = '/agenda';


    adoption = 'volunteer_activism';
    adptlink = '/adoption';

    constructor() { }

    ngOnInit(): void {
    }

}
