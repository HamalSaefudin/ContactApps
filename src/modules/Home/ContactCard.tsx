import moment from 'moment';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {FadeInDown} from 'react-native-reanimated';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import {moderateScale} from 'react-native-size-matters';

import Icon, {ICON_CATEGORY} from '@/components/Icons';
import Colors from '@/theme/Colors';
import Fonts from '@/theme/Fonts';
import Layout from '@/theme/Layout';
import {IContact} from '@/types/contact';
import {getImg} from '@/utils/utils';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface ICardProps {
  onPress: (item: IContact) => void;
  isLoading?: boolean;
  item: IContact;
  index: number;
}

const ContactCard: React.FC<ICardProps> = ({
  item,
  index,
  onPress,
  isLoading = true,
}) => {
  return (
    <AnimatedTouchable
      testID="contact-card"
      onPress={() => {
        onPress(item);
      }}
      entering={FadeInDown.delay(index * 100)}
      style={styles.cardContainer}>
      <View style={styles.cardContentContainer}>
        <ShimmerPlaceholder
          visible={!isLoading}
          LinearGradient={LinearGradient}
          shimmerStyle={styles.cardImgContainer}>
          <View style={styles.cardImgContainer}>
            <Image
              testID="img-contact-card"
              source={{uri: getImg(item.photo)}}
              style={styles.cardImg}
            />
          </View>
        </ShimmerPlaceholder>
        <View style={styles.textContainer}>
          <View>
            <ShimmerPlaceholder
              visible={!isLoading}
              LinearGradient={LinearGradient}>
              <Text testID="contact-card-text-name" style={styles.txtName}>
                {`${item.firstName} ${item.lastName}`}
              </Text>
            </ShimmerPlaceholder>
            <ShimmerPlaceholder
              visible={!isLoading}
              LinearGradient={LinearGradient}>
              <Text testID="contact-card-text-age" style={styles.txtAge}>
                {`${item.age} Years Old`}
              </Text>
            </ShimmerPlaceholder>
          </View>
          <ShimmerPlaceholder
            visible={!isLoading}
            LinearGradient={LinearGradient}>
            <Text
              testID="contact-card-call-history"
              style={styles.txtCallHistory}>
              {moment(item.callHistory).format('MMMM DD, YYYY')}
            </Text>
          </ShimmerPlaceholder>
        </View>
      </View>
      <ShimmerPlaceholder
        visible={!isLoading}
        LinearGradient={LinearGradient}
        shimmerStyle={styles.iconArrowShimmer}>
        <Icon category={ICON_CATEGORY.ANT_DESIGN} name="rightcircle" />
      </ShimmerPlaceholder>
    </AnimatedTouchable>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: Colors.common.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContentContainer: {
    flexDirection: 'row',
    gap: moderateScale(15),
  },
  textContainer: {
    justifyContent: 'space-between',
  },
  iconArrowShimmer: {
    width: moderateScale(16),
    height: moderateScale(16),
    borderRadius: moderateScale(8),
  },
  cardImgContainer: {
    width: moderateScale(52),
    height: moderateScale(52),
    borderRadius: moderateScale(26),
    backgroundColor: Colors.common.border,
  },
  cardImg: {
    ...Layout.fullSize,
    borderRadius: moderateScale(26),
  },
  txtName: {
    ...Fonts.bodyBold.body1,
    color: Colors.typography.primary,
  },
  txtAge: {
    ...Fonts.bodyBold.body3,
    color: Colors.typography.secondary,
  },
  txtCallHistory: {
    ...Fonts.bodyRegular.body3,
    color: Colors.typography.subtitle,
  },
});
