import React from 'react';

function Condition({ title, description, cn, condition}) {
    return (
        <div className={cn}>
            <div>
                <h3>{title}</h3>
                <h1>{condition}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Condition;

