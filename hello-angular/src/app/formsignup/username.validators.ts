import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UserNameValidators {
    // Custom Validation
    static noBlankSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0 ) {
            return { noblankspace: true};
        }
        return null;
    }

    // Custom Async Validation
    static uniqueUserName(control: AbstractControl): Promise<ValidationErrors | ValidationErrors> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // console.log('Server request is done to retreive the usernames from DB');
                const userNameInDB: string[] = ['MURUGAN', 'TAMIL'];
                if (!userNameInDB.indexOf((control.value as string).toUpperCase())) {
                    resolve({ nouniqueness: true}); }
                // tslint:disable-next-line:one-line
                else {
                    resolve(null); }
            }, 1000);
        });
    }
}
