import React, { ReactNode } from 'react';

interface BlockProps { 
    children: ReactNode;
}

export const Block = ({children}:BlockProps) => {
    return (
        <div className="page-block">
            {children}
        </div>
    )
}