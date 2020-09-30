import React, { useEffect, useState, useCallback, useRef } from 'react';
import { usePopper } from 'react-popper';
import cnCreate from 'utils/cnCreate';
import detectTouch from 'utils/detectTouch';
import Tile from 'components/Tile/Tile';
import './TooltipClassic.less';

export const Placement = {
    LEFT: 'left',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
} as const;

type PlacementType = typeof Placement[keyof typeof Placement];

export interface ITooltipClassicProps {
    isOpened?: boolean;
    triggerElement: JSX.Element;
    placement?: PlacementType;
    className?: string;
    children?: React.ReactNode[];
}

const outsideEventName = detectTouch() ? 'touchstart' : 'click';

const cn = cnCreate('mfui-beta-tooltip-classic');
const TooltipClassic: React.FC<ITooltipClassicProps>  = ({
    isOpened = false,
    triggerElement,
    placement = Placement.TOP,
    className,
    children,
}) => {
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
    const options = {
        placement,
        modifiers: [
            {
                name: 'arrow',
                options: { element: arrowElement },
            },
            {
                name: 'offset',
                options: {
                    offset: [0, 15],
                },
            },
            {
                name: 'flip',
                options: {
                    fallbackPlacements: ['left', 'right' , 'top' , 'bottom'],
                },
            },
        ],
    };
    const { styles, attributes } = usePopper(referenceElement, popperElement, options);

    const [isOpen, setIsOpen] = useState<boolean>(isOpened);
    const dropRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsOpen(isOpened);
    }, [isOpened]);

    const closeDrop = (): void => setIsOpen(false);
    const toggleDrop = (): void => setIsOpen(prevState => !prevState);

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

    return (
        <div className={cn([className])}>
            <div
                ref={setReferenceElement}
                className={cn('trigger')}
                onClick={toggleDrop}
            >
                {triggerElement}
            </div>
            <div
                className={cn('drop', {open: isOpen})}
                ref={dropRef}
            >
                <div
                    className={cn('drop-inner')}
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    <div
                        ref={setArrowElement}
                        className={cn('arrow')}
                        style={styles.arrow}
                    />
                    <Tile
                        shadowLevel="high"
                        radius="rounded"
                        className={cn('content')}
                    >
                        {children}
                    </Tile>
                </div>
            </div>
        </div>
    );
};

export default TooltipClassic;
