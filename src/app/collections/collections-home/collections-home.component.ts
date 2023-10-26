import { Component } from '@angular/core';

@Component({
    selector: 'app-collections-home',
    templateUrl: './collections-home.component.html',
    styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
    data = [
        {
            name: 'James',
            age: 22,
            job: 'Designer',
            employeed: true,
        },
        {
            name: 'Jill',
            age: 23,
            job: 'Engineer',
            employeed: false,
        },
        {
            name: 'Alice',
            age: 24,
            job: 'Engineer',
            employeed: true,
        },
    ];

    headers = [
        { key: 'name', label: 'Name' },
        { key: 'age', label: 'Age' },
        { key: 'job', label: 'Job' },
        { key: 'employeed', label: 'Has a Job?' },
    ];
}
