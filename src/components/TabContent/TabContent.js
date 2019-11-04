import React from 'react';
import Spinner from '../Spinner';

export const TabContent = ({ children, isVisible }) => {
    
    if (!isVisible) {
        return <div hidden={true}>{null}</div>
    }
    return (
        <React.Suspense fallback={<Spinner />}>
            <div>{children}</div>
        </React.Suspense>
    );

}