import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from './Colors';

const fontFamily = {
  light: 'Roboto-Light',
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
};

export default {
  headingLight: StyleSheet.create({
    h1: {
      color: Colors.typography.black,
      fontFamily: fontFamily.light,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(26),
    },
    h2: {
      color: Colors.typography.black,
      fontFamily: fontFamily.light,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(20),
    },
    h3: {
      color: Colors.typography.black,
      fontFamily: fontFamily.light,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(16),
    },
  }),

  headingRegular: StyleSheet.create({
    h1: {
      color: Colors.typography.black,
      fontFamily: fontFamily.regular,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(26),
    },
    h2: {
      color: Colors.typography.black,
      fontFamily: fontFamily.regular,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(20),
    },
    h3: {
      color: Colors.typography.black,
      fontFamily: fontFamily.regular,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(16),
    },
  }),

  headingBold: StyleSheet.create({
    h1: {
      color: Colors.typography.black,
      fontFamily: fontFamily.bold,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(26),
    },
    h2: {
      color: Colors.typography.black,
      fontFamily: fontFamily.bold,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(20),
    },
    h3: {
      color: Colors.typography.black,
      fontFamily: fontFamily.bold,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(16),
    },
  }),

  headingMedium: StyleSheet.create({
    h1: {
      color: Colors.typography.black,
      fontFamily: fontFamily.bold,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(26),
    },
    h2: {
      color: Colors.typography.black,
      fontFamily: fontFamily.medium,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(20),
    },
    h3: {
      color: Colors.typography.black,
      fontFamily: fontFamily.medium,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(16),
    },
  }),

  bodyLight: StyleSheet.create({
    body1: {
      color: Colors.typography.black,
      fontFamily: fontFamily.light,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(14),
    },
    body2: {
      color: Colors.typography.black,
      fontFamily: fontFamily.light,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(12),
    },
    body3: {
      color: Colors.typography.black,
      fontFamily: fontFamily.light,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(10),
    },
  }),

  bodyRegular: StyleSheet.create({
    body1: {
      color: Colors.typography.black,
      fontFamily: fontFamily.regular,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(14),
    },
    body2: {
      color: Colors.typography.black,
      fontFamily: fontFamily.regular,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(12),
    },
    body3: {
      color: Colors.typography.black,
      fontFamily: fontFamily.regular,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(10),
    },
  }),

  bodyMedium: StyleSheet.create({
    body1: {
      color: Colors.typography.black,
      fontFamily: fontFamily.medium,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(14),
    },
    body2: {
      color: Colors.typography.black,
      fontFamily: fontFamily.medium,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(12),
    },
    body3: {
      color: Colors.typography.black,
      fontFamily: fontFamily.medium,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(10),
    },
  }),

  bodyBold: StyleSheet.create({
    body1: {
      color: Colors.typography.black,
      fontFamily: fontFamily.bold,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(14),
    },
    body2: {
      color: Colors.typography.black,
      fontFamily: fontFamily.bold,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(12),
    },
    body3: {
      color: Colors.typography.black,
      fontFamily: fontFamily.bold,
      fontStyle: 'normal',
      fontWeight: 'normal',
      flexShrink: 1,
      fontSize: moderateScale(10),
    },
  }),
} as const;
