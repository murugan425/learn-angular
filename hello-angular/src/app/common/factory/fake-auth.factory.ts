import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function FakeAuthProviderFactory(mockBackEnd: MockBackend, reqOptions: BaseRequestOptions) {
    // tslint:disable-next-line:max-line-length
    const admintoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyNjQ0MCIsIm5hbWUiOiJNdXJ1Z2FuIE5hZ2FyYWphbiIsImFkbWluIjp0cnVlfQ.JZrogUs3GNEzenoZcgevl9Kj67goSTeOnScwq3ogNYo';
    const nonadmintoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyNjQ0MCIsIm5hbWUiOiJNdXJ1Z2FuIE5hZ2FyYWphbiIsImFkbWluIjpmYWxzZX0.CYtS5zu87b4nvpx6_vIAKKxcBfwWHXN6ftAcec4Bdds';
    mockBackEnd.connections.subscribe((connection: MockConnection) => {
      // We are using the setTimeout() function to simulate an asynchronous call
      // to the server that takes 1 second.
      setTimeout(() => {
        //
        // Fake implementation of /api/authenticate
        //
        if (connection.request.url.endsWith('/login/authenticate') &&
            connection.request.method === RequestMethod.Post) {
            const body = JSON.parse(connection.request.getBody());

            if (body.email === 'murugan425@gmail.com' && body.password === '1234') {
              connection.mockRespond(new Response(
                new ResponseOptions({
                  status: 200,
                  body: { token: admintoken }
                })
              ));
            } else {
              connection.mockRespond(new Response(
                new ResponseOptions({
                    status: 200
                })
              ));
            }
        }
      }, 100);
    });
    return new Http(mockBackEnd, reqOptions);
}
