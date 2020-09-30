import { useState, useEffect, useCallback } from 'react';
import detectTouch from 'utils/detectTouch';

const outsideEventName = detectTouch() ? 'touchstart' : 'click';

export default function useDrop(dropRef: React.RefObject<Element>, isOpened: boolean = false) {
    const [isOpen, setIsOpen] = useState<boolean>(isOpened);

    const openDrop = useCallback((): void => setIsOpen(true), []);
    const closeDrop = useCallback((): void => setIsOpen(false), []);
    const toggleDrop = useCallback((): void => setIsOpen(open => !open), [isOpen]);

    const handleOutsideEvent = useCallback((e: MouseEvent): void => {
        if (e.target instanceof Node && dropRef.current && !dropRef.current.contains(e.target) || isOpened) {
            closeDrop();
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) { document.addEventListener(outsideEventName, handleOutsideEvent); }

        return () => {
            document.removeEventListener(outsideEventName, handleOutsideEvent);
        };
    });

    return [
        isOpen,
        openDrop,
        closeDrop,
        toggleDrop,
    ] as const;
}
