import { trigger, state, transition,  style, animate, keyframes } from '@angular/animations';

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
        animate('0.5s') // FYI: 500 = 0.5s
    ])
]);

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-10px)'}),
        animate('2s ease-out')
    ]),
    transition(':leave', [
        animate('2s ease-in', style({ transform: 'translateX(-100%)'}))
    ])
]);

export let bounceOutLeft = trigger('bounceOutLeft', [
    transition(':enter', [
        style({ transform: 'translateX(-10px)'}),
        animate('2s ease-out')
    ]),
    transition(':leave', [
        animate('1s ease-in',
        keyframes([
            style({offset: .2, opacity: 1, transform: 'translateX(20px)'}),
            style({offset: 1, opacity: 0, transform: 'translateX(-100%)'})
        ]))
    ])
]);
