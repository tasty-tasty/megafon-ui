import * as React from 'react';
import * as PropTypes from 'prop-types';
import { cnCreate } from '../../utils/cn';
import './Carousel.less';
import CarouselArrow from './CarouselArrow';
import Slider from "react-slick";

const cn = cnCreate('mfui-carousel');
class Carousel extends React.Component {
    static propTypes = {
        options: PropTypes.objectOf(
            PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.number,
                PropTypes.string,
                PropTypes.array,
            ]),
        ),
        children: PropTypes.node,
        onClickNext: PropTypes.func,
        onClickPrev: PropTypes.func
    };

    handleClickNext = () => {
        const { onClickNext } = this.props;
        onClickNext && onClickNext();
    };

    handleClickPrev = () => {
        const { onClickPrev } = this.props;
        onClickPrev && onClickPrev();
    };

    render() {
        const { options, children } = this.props;

        return (
            <div className={cn('')}>
                <Slider
                    {...options}
                    nextArrow={<CarouselArrow {...options} onClickArrow={this.handleClickNext} />}
                    prevArrow={<CarouselArrow {...options} onClickArrow={this.handleClickPrev} />}
                >
                    {children}
                </Slider>
            </div>
        );
    }
}

export default Carousel;
