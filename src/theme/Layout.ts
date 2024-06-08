import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const screen = Dimensions.get('screen');

export const {width: screenWidth, height: screenHeight} = screen;

const height = screenHeight < screenWidth ? screenWidth : screenHeight;
const width = screenWidth < screenHeight ? screenWidth : screenHeight;

export function percentageWidth(percent: number): number {
  return width * (percent / 100);
}

export function percentageHeight(percent: number): number {
  return height * (percent / 100);
}

export default StyleSheet.create({
  colReverse: {
    flexDirection: 'column-reverse',
  },
  colCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colVCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  colHCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  /* Row Layouts */
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowVCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowHCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  /* Default Layouts */
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemsStretch: {
    alignItems: 'stretch',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentAround: {
    justifyContent: 'space-around',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentEvenly: {
    justifyContent: 'space-evenly',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  selfStart: {
    alignSelf: 'flex-start',
  },
  selfEnd: {
    alignSelf: 'flex-end',
  },
  /* Sizes Layouts */
  fillScrollview: {
    flexGrow: 1,
  },
  fill: {
    flex: 1,
  },
  globalHorizontalPadding: {
    paddingHorizontal: moderateScale(16),
  },
  globalPadding: {
    padding: moderateScale(16),
  },
  fullSize: {
    height: '100%',
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  halfWidth: {
    width: '50%',
  },
  fullHeight: {
    height: '100%',
  },
  floatingButton: {
    bottom: percentageWidth(12),
    position: 'absolute',
    right: percentageWidth(4.2),
  },
});
