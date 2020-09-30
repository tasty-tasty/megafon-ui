import * as React from 'react';
import * as PropTypes from 'prop-types';
import './BubbleHint.less';
import detectTouch from 'utils/detectTouch';

export interface IBubbleHintProps {
    /** Custom class name */
    className?: string;
    /** Padding in popup */
    popupPadding: 'normal' | 'bottom-small' | 'none';
    /** Align in popup */
    popupAlign: 'left' | 'center' | 'right';
    /** Width popup */
    popupWidth: 'small' | 'normal' | 'big';
    /** Use margin left */
    marginLeft: boolean;
    /** Activation on click (default hover) */
    click: boolean;
    /** Popup position */
    placement: 'top' | 'right' | 'bottom' | 'left';
    /** Trigger */
    trigger: JSX.Element[] | Element[] | JSX.Element | string | Element;
    children: JSX.Element[] | Element[] | JSX.Element | string | Element;
    /** MouseEnter handler */
    onMouseEnter?: (e: React.SyntheticEvent<EventTarget>) => void;
    /** MouseLeave handler */
    onMouseLeave?: (e: React.SyntheticEvent<EventTarget>) => void;
    /** Click handler */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface IBubbleHintState {
    show: boolean;
}

class BubbleHint extends React.Component<Partial<IBubbleHintProps>, IBubbleHintState> {
    static propTypes = {
        popupPadding: PropTypes.oneOf(['normal', 'bottom-small', 'none']),
        popupAlign: PropTypes.oneOf(['left', 'center', 'right']),
        popupWidth: PropTypes.oneOf(['small', 'normal', 'big']),
        marginLeft: PropTypes.bool,
        click: PropTypes.bool,
        placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        trigger: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
            PropTypes.string,
        ]),
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
            PropTypes.string,
        ]),
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        popupAlign: 'left',
        popupWidth: 'normal',
        popupPadding: 'normal',
        placement: 'top',
    };

    container: HTMLElement | null = null;
    trigger: HTMLElement | null = null;
    touchClick: string = detectTouch() ? 'touchstart' : 'click';
    isTouch: boolean = detectTouch();

    constructor(props: IBubbleHintProps) {
        super(props);
        this.state = { show: false };
    }

    componentDidMount() {
        document.addEventListener(this.touchClick, this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener(this.touchClick, this.handleClickOutside);
    }

    handleMouseEnter = e => {
        this.setState({ show: true });
        this.props.onMouseEnter && this.props.onMouseEnter(e);
    }

    handleMouseLeave = (e: React.SyntheticEvent<EventTarget>): void => {
        this.setState({ show: false });
        this.props.onMouseLeave && this.props.onMouseLeave(e);
    }

    handleClick = (e: React.MouseEvent<HTMLElement>): void | boolean => {
        if (this.trigger && e.target && this.trigger.contains(e.target as HTMLElement)) {
            this.setState({ show: !this.state.show });
            this.props.onClick && this.props.onClick(e);
        }

        return false;
    }

    handleClickOutside = (e: React.SyntheticEvent<EventTarget> | Event): void | boolean => {
        if ((this.container && this.container.contains(e.target as HTMLElement)) || !this.state.show) {
            return;
        }

        this.setState({ show: false });
    }

    closePopup(): void {
        this.setState({ show: false });
    }

    getHandlers(): {} {
        if (this.isTouch || this.props.click) {
            return {
                onClick: this.handleClick,
            };
        }

        return {
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
        };
    }

    getContainer = (elem: HTMLDivElement): void => {
        this.container = elem;
    }

    getTrigger = (elem: HTMLDivElement): void => {
        this.trigger = elem;
    }

    render() {
        return (
            <div> old BubbleHint </div>
        );
    }
}

export default BubbleHint;
