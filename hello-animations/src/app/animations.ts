import { trigger, state, transition,  style, animate, keyframes, animation, useAnimation } from '@angular/animations';

// create a reusable animation
export let bounceOutLeftAnimation = animation(
    animate('1s ease-in',
    keyframes([
        style({offset: .2, opacity: 1, transform: 'translateX(20px)'}),
        style({offset: 1, opacity: 0, transform: 'translateX(-100%)'})
    ]))
);

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
        style({backgroundColor: 'red'}),
        animate('0.2s'),
        useAnimation(bounceOutLeftAnimation)
    ])
]);

// Using Parameters will be useful in case of customized complex animation scenarios.
export let fadeInWithParamsAnimation = animation([
        style({ opacity: 0 }),
        animate('{{duration}} {{easing}}')
    ], {
        // default values to these parameters
    params: {
        duration: '1s',
        easing: 'ease-out'
    }
});

export let fadeOutWithParamsAnimation = animation([
    animate('{{duration}} {{easing}}', style({ opacity: 0 }))
    ], {
        // default values to these parameters
    params: {
        duration: '1s',
        easing: 'ease-in'
    }
});


export let fadeWithParams = trigger('fadeWithParams', [
    transition(':enter', [
        useAnimation(fadeInWithParamsAnimation, {
            // override the default values - optional params
            params: {
                duration: '0.5s',
            }
        })
    ]),
    transition(':leave', [
        useAnimation(fadeOutWithParamsAnimation, {
            params: {
                duration: '0.5s',
            }
        })
    ])
]);

export let zippyExpCollapse = trigger('zippyExpCollapse', [
    state('collapsed',
        style({ height: 0, paddingTop: 0, paddingBottom: 0 })
    ),
    transition('collapsed => expanded',
        [animate('300ms ease-out')]),
    transition('expanded => collapsed',
        [animate('300ms ease-in')]),
]);
