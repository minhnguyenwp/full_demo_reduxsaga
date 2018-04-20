/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFound() {
    return (<div className="not-found-page">
        <div className="nfp-header">
            <div className="logo"></div>
            <div className="title">Report & Governance Platform (RGP)</div>
        </div>
        <div className="nfp-content">
            <div className="title">Page 404</div>
            <div className="description">The page you requested could not be found</div>
            <Link to='/' className="btn-go-back btn btn-primary">Go Back to Sign In</Link>
        </div>
    </div>);
}
