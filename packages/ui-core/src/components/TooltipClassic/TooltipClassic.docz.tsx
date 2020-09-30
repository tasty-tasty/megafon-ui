import * as React from 'react';

export const TooltipClassicWrapper = ({ children }) => {
    const [ isOpened, setIsOpen ] = React.useState<boolean>();

    const closeDrop = (): void => setIsOpen(o => !o);

    return (
        <div style={{ height: '400px', display: 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
            {children({isOpened, closeDrop})}
        </div>
    );
};
