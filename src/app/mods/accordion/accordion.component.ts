import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
    @Input() items: Array<any> = [];
    opnedItemIndex = 0;

    onClick = (index: number) => {
        if (this.opnedItemIndex === index) {
            this.opnedItemIndex = -1;
        } else {
            this.opnedItemIndex = index;
        }
    };
}
