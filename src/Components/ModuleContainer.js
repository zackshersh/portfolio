import React from 'react';

function ModuleContainer({children,id}) {
    return (
        <div id={id} className='Module-Container'>
            {children}
        </div>
    );
}

export default ModuleContainer;