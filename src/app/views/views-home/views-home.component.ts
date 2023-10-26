import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-views-home',
    templateUrl: './views-home.component.html',
    styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent {
    statisticsData = [
        {
            value: 22,
            label: 'Favourites',
        },
        {
            value: 967,
            label: 'Page View',
        },
        {
            value: 30,
            label: 'Users',
        },
    ];

    itemsData = [
        {
            image: 'https://semantic-ui.com/images/wireframe/image.png',
            title: 'Couch',
            description: 'This is fantastic couch to sit on',
        },
        {
            image: 'https://semantic-ui.com/images/wireframe/image.png',
            title: 'Dresser',
            description: 'This is a great dresser to put in',
        },
    ];
}
