import * as React from 'react';
import useDrop from 'hooks/useDrop';

export const TooltipWrapper = ({ children }) => {
    const [referenceElement, setReferenceElement] = React.useState<Element | null>(null);

    const dropRef = React.useRef<Element>(null);
    const [ isOpen, openDrop, closeDrop, toggleDrop ] = useDrop(dropRef);

    return (
        <div style={{ height: '400px', display: 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
            {children({
                referenceElement,
                setReferenceElement,
                dropRef,
                isOpen,
                openDrop,
                closeDrop,
                toggleDrop,
            })}
        </div>
    );
};
