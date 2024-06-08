import Icon, {ICON_CATEGORY} from '@/components/Icons';
import Colors from '@/theme/Colors';
import Layout from '@/theme/Layout';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import {moderateScale} from 'react-native-size-matters';

type Props = {
  isLoading: boolean;
  onPress: () => void;
  source: string;
};

function DetailContactAvatar({isLoading, onPress, source}: Props) {
  return (
    <ShimmerPlaceholder
      visible={!isLoading}
      LinearGradient={LinearGradient}
      shimmerStyle={styles.contentImg}>
      <TouchableOpacity
        testID="contact-avatar-btn"
        onPress={onPress}
        style={styles.contentImg}>
        <Image
          testID="contact-avatar-image"
          source={{
            uri: source,
          }}
          style={styles.img}
        />
        <View style={styles.contentImgCreate}>
          <Icon
            testID="contact-avatar-icon"
            category={ICON_CATEGORY.FONTISTO}
            name="spinner-refresh"
          />
        </View>
      </TouchableOpacity>
    </ShimmerPlaceholder>
  );
}
const styles = StyleSheet.create({
  contentImg: {
    height: moderateScale(150),
    width: moderateScale(150),
    borderRadius: moderateScale(75),
    backgroundColor: Colors.common.border,
    marginBottom: moderateScale(16),
    ...Layout.justifyContentCenter,
    ...Layout.alignItemsCenter,
  },
  contentImgCreate: {
    height: moderateScale(25),
    width: moderateScale(25),
    borderRadius: moderateScale(25),
    backgroundColor: Colors.common.border,
    ...Layout.justifyContentCenter,
    ...Layout.alignItemsCenter,
    position: 'absolute',
    right: moderateScale(20),
    bottom: 0,
  },
  img: {
    ...Layout.fullSize,
    borderRadius: moderateScale(75),
  },
});

export default DetailContactAvatar;
