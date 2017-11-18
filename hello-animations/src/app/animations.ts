import { trigger, state, transition,  style, animate } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
        animate('0.5s') // FYI: 500 = 0.5s
    ])
]);

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-10px)'}),
        animate('0.5s')
    ]),
    transition(':leave', [
        animate('0.5s', style({ transform: 'translateX(-50%)'}))
    ])
]);
