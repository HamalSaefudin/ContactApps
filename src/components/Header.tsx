import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import Layout from '@/theme/Layout';
import Icon, {ICON_CATEGORY} from './Icons';
import Colors from '@/theme/Colors';
import {moderateScale} from 'react-native-size-matters';
import Fonts from '@/theme/Fonts';

interface IHeader {
  onBackPress?: () => void;
  onDeletePress?: () => void;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
}

const Header: React.FC<IHeader> = ({
  onBackPress,
  onDeletePress,
  title = '',
  titleStyle,
}) => {
  return (
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity style={styles.iconContainer}>
          <Icon
            category={ICON_CATEGORY.ANT_DESIGN}
            name="arrowleft"
            onPress={onBackPress}
            styles={styles.icon}
          />
        </TouchableOpacity>
      )}
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {onDeletePress && (
        <TouchableOpacity
          onPress={onDeletePress}
          style={styles.iconContainerDelete}>
          <Icon
            category={ICON_CATEGORY.ANT_DESIGN}
            name="delete"
            onPress={onDeletePress}
            styles={styles.iconDelete}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Layout.row,
    ...Layout.justifyContentBetween,
    ...Layout.alignItemsCenter,
  },
  iconContainer: {
    ...Layout.globalPadding,
  },
  iconContainerDelete: {
    padding: moderateScale(8),
    backgroundColor: Colors.common.white,
    marginRight: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(40),
  },
  icon: {
    color: Colors.common.white,
    fontSize: moderateScale(26),
  },
  iconDelete: {
    color: Colors.common.red,
    fontSize: moderateScale(26),
  },
  title: {
    ...Fonts.headingMedium.h2,
    color: Colors.common.white,
  },
});

export default Header;
