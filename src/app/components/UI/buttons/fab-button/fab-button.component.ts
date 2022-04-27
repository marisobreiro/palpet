import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-fab-button',
    templateUrl: './fab-button.component.html',
    styleUrls: ['./fab-button.component.css']
})
export class FabButtonComponent implements OnInit {

    @Input() icon: any = '';
    @Input() link: any = '';

    constructor() { }

    ngOnInit(): void {
    }

}
