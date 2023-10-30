import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export const Auth0ProviderWithNavigate = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN || 'default_api_domain';
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || 'default_api_key';
    const redirectUri = process.env.REACT_APP_VERCEL_ENV === "production"
        ? `https://${window.location.hostname}`
        : window.location.origin;

    if (!(domain && clientId && redirectUri)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{ redirect_uri: redirectUri }}
        >
            {children}
        </Auth0Provider>
    );
};