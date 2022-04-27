import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

    back = 'arrow_back'
    link = '/home'

    selected!: Date | null

    constructor() { }

    ngOnInit(): void {
    }

}
