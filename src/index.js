
import OktaAuth from '@okta/okta-auth-js';

var routeMap = {
    router_employee: 'https://{{your okta tenant}}/app/UserHome',
    router_external: '[application url to redirect user to]'
}

var config = {
    issuer: 'https://{{your okta tenant}}',
    clientId: '[client id]',
    redirectUri: '[redirect uri]',
    tokenManager: {
        storage: 'sessionStorage'
    },
    authorizeUrl: 'https://{{your okta tenant}}/oauth2/v1/authorize'

};

var authClient = new OktaAuth(config);

export function route() {
    authClient.token.getWithoutPrompt({
        responseType: 'id_token',
        scopes: ['openid', 'groups']
    }).then(function(tokenOrTokens) {
        console.log(JSON.stringify(tokenOrTokens));
        var token = authClient.token.decode(tokenOrTokens['idToken']);
        if(token && token.payload && token.payload.groups) {
            token.payload.groups.forEach(function (val) {
                if (routeMap[val]) {
                    window.location.href = routeMap[val];
                }
            });
        } else {
            window.localhost.href = ''
        }
    }).catch(function(err) {
        console.log(err);
    });
}
