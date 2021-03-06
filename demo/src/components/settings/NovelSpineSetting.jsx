import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectReaderSetting,
  FONT_SIZE_RANGE,
  CONTENT_PADDING_RANGE,
  LINE_HEIGHT_RANGE,
} from '@ridi/react-viewer';
import { ViewerSpinType } from '../../constants/SettingConstants';
import Stepper from './Stepper';
import SvgIcons from '../icons/SvgIcons';

const NovelSpineSetting = ({ item, onChanged, setting }) => (
  <li className="setting_list" key={item}>
    <SvgIcons
      svgName={`svg_${item}_2`}
      svgClass={`setting_title_icon svg_${item}_icon`}
    />

    <Stepper
      title={ViewerSpinType.toString(item)}
      buttonTarget={`set_${item}`}
      value={{
        [ViewerSpinType.FONT_SIZE]: setting.fontSizeInEm,
        [ViewerSpinType.LINE_HEIGHT]: setting.lineHeightInEm,
        [ViewerSpinType.PADDING]: setting.contentPaddingInPercent,
      }[item]}
      min={{
        [ViewerSpinType.FONT_SIZE]: FONT_SIZE_RANGE[0],
        [ViewerSpinType.LINE_HEIGHT]: LINE_HEIGHT_RANGE[0],
        [ViewerSpinType.PADDING]: CONTENT_PADDING_RANGE[0],
      }[item]}
      max={{
        [ViewerSpinType.FONT_SIZE]: FONT_SIZE_RANGE[1],
        [ViewerSpinType.LINE_HEIGHT]: LINE_HEIGHT_RANGE[1],
        [ViewerSpinType.PADDING]: CONTENT_PADDING_RANGE[1],
      }[item]}
      onChange={newLevel => onChanged({ [ViewerSpinType.toReaderSettingType(item)]: newLevel })}
    />
  </li>
);

NovelSpineSetting.propTypes = {
  item: PropTypes.string.isRequired,
  onChanged: PropTypes.func.isRequired,
  setting: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  setting: selectReaderSetting(state),
});

export default connect(mapStateToProps)(NovelSpineSetting);
