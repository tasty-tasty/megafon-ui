import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import cnCreate from 'utils/cnCreate';
import Tile from 'components/Tile/Tile';
import './Tooltip.less';

export const Placement = {
    LEFT: 'left',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
} as const;

type PlacementType = typeof Placement[keyof typeof Placement];

export interface ITooltipProps {
    referenceElement: Element;
    placement?: PlacementType;
    className?: string;
    children?: React.ReactNode[];
}
const cn = cnCreate('mfui-beta-tooltip');
const Tooltip: React.FC<ITooltipProps>  = ({
    referenceElement,
    placement = Placement.TOP,
    className,
    children,
}) => {
    // const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
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

    return (
        <div
            className={cn([className])}
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
    );
};

export default Tooltip;
