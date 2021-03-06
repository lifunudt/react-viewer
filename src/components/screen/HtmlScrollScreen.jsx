import React from 'react';
import { connect } from 'react-redux';
import { fromEvent } from 'rxjs';
import {
  selectReaderContentsCalculations,
  selectReaderCalculationsTotal,
  selectReaderFooterCalculations, selectReaderCalculationsTargets,
} from '../../redux/selector';
import Footer from '../footer/Footer';
import {
  setScrollTop,
  waitThenRun,
} from '../../util/BrowserWrapper';
import PropTypes, {
  FooterCalculationsType,
  ContentCalculationsType,
} from '../prop-types';
import BaseScreen, {
  mapDispatchToProps as readerBaseScreenMapDispatchToProps,
  mapStateToProps as readerBaseScreenMapStateToProps,
} from './BaseScreen';
import Connector from '../../service/connector';
import HtmlContent from '../content/HtmlContent';
import { FOOTER_INDEX, PRE_CALCULATION } from '../../constants/CalculationsConstants';
import DOMEventConstants from '../../constants/DOMEventConstants';
import { ViewType } from '../../constants/SettingConstants';
import { getStyledContent, getStyledFooter } from '../styled';
import { ContentFormat } from '../../constants/ContentConstants';
import EventBus, { Events } from '../../event';

class HtmlScrollScreen extends BaseScreen {
  static defaultProps = {
    ...BaseScreen.defaultProps,
    contentFooter: null,
  };

  static propTypes = {
    ...BaseScreen.propTypes,
    contentsCalculations: PropTypes.arrayOf(ContentCalculationsType),
    calculationsTotal: PropTypes.number.isRequired,
    actionUpdateContent: PropTypes.func.isRequired,
    actionUpdateContentError: PropTypes.func.isRequired,
    footerCalculations: FooterCalculationsType.isRequired,
    contentFooter: PropTypes.node,
    calculationsTargets: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  constructor(props) {
    super(props);
    this.moveToOffset = this.moveToOffset.bind(this);
  }

  componentDidMount() {
    super.componentDidMount();

    EventBus.on(Events.MOVE_TO_OFFSET, this.moveToOffset, this);
    this.scrollEventSubscription = fromEvent(window, DOMEventConstants.SCROLL)
      .subscribe(event => EventBus.emit(Events.SCROLL, event));
  }

  componentWillUnmount() {
    super.componentWillUnmount();

    EventBus.offByTarget(this);
    if (this.scrollEventSubscription) {
      this.scrollEventSubscription.unsubscribe();
      this.scrollEventSubscription = null;
    }
  }

  moveToOffset(offset) {
    waitThenRun(() => {
      setScrollTop(offset);
      EventBus.emit(Events.MOVED);
    }, 0);
  }

  renderFooter() {
    const { footer, footerCalculations } = this.props;
    const { containerVerticalMargin } = this.props.setting;
    return (
      <Footer
        key="footer"
        isCalculated={footerCalculations.total !== PRE_CALCULATION}
        content={footer}
        containerVerticalMargin={containerVerticalMargin}
        startOffset={Connector.calculations.getStartOffset(FOOTER_INDEX)}
        StyledFooter={getStyledFooter(ContentFormat.HTML, ViewType.SCROLL)}
      />
    );
  }

  renderContent(content, StyledContent) {
    const {
      contentFooter,
    } = this.props;
    const { offset, total } = Connector.calculations.getCalculation(content.index);
    const isLastContent = Connector.calculations.isLastContent(content.index);

    return (
      <HtmlContent
        key={`${content.uri}:${content.index}`}
        ref={this.getContentRef(content.index)}
        content={content}
        isCalculated={total !== PRE_CALCULATION}
        startOffset={offset}
        contentFooter={isLastContent ? contentFooter : null}
        StyledContent={StyledContent}
      />
    );
  }

  renderContents() {
    const { contents, calculationsTargets } = this.props;
    const StyledContent = getStyledContent(ContentFormat.HTML, ViewType.SCROLL);
    return contents
      .filter(({ isInScreen, index }) => isInScreen || calculationsTargets.includes(index))
      .map(content => this.renderContent(content, StyledContent));
  }
}

const mapStateToProps = state => ({
  ...readerBaseScreenMapStateToProps(state),
  contentsCalculations: selectReaderContentsCalculations(state),
  calculationsTotal: selectReaderCalculationsTotal(state),
  footerCalculations: selectReaderFooterCalculations(state),
  calculationsTargets: selectReaderCalculationsTargets(state),
});

const mapDispatchToProps = dispatch => ({
  ...readerBaseScreenMapDispatchToProps(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HtmlScrollScreen);
