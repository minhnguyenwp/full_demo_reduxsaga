/**
 * PartialNotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

export default function NotFound() {
    return (<div className="partial-not-found-page">
        <div className="pnfp-content">
            <div className="title">Page 404</div>
            <div className="description">The page you requested could not be found</div>
        </div>
    </div>);
}
