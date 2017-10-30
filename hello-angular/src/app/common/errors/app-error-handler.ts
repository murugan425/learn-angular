import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        alert('Unexpected Error occurred.');
        console.log(error);
    }
}
