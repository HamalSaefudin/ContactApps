import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import {Image} from 'react-native';
import {IContact} from '@/types/contact';
import Layout from '@/theme/Layout';
import Colors from '@/theme/Colors';
import {getImg} from '@/utils/utils';
import Fonts from '@/theme/Fonts';

export default function SectionLastVisitedContact() {
  const {lastVisitContact} = useSelector((state: any) => state.contacts);

  const renderLastVisitedContact = useCallback(
    (prop: ListRenderItemInfo<IContact>) => {
      return (
        <View style={Layout.alignItemsCenter}>
          <View style={styles.lastVisitedContactContainer}>
            <Image
              source={{uri: getImg(prop.item.photo)}}
              style={[Layout.fullSize, {borderRadius: moderateScale(50 / 2)}]}
            />
          </View>
          <Text>{`${prop.item.firstName} ${prop.item.lastName}`}</Text>
        </View>
      );
    },
    [],
  );

  if (lastVisitContact.length === 0) {
    return null;
  }

  return (
    <>
      <Text style={Fonts.headingMedium.h3}>Last Visited Contact</Text>
      <FlatList
        testID="list-last-visited-contact"
        data={lastVisitContact}
        horizontal
        style={{marginVertical: moderateScale(16)}}
        contentContainerStyle={{gap: moderateScale(20)}}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderLastVisitedContact}
      />
      <View style={styles.border} />
    </>
  );
}

const styles = StyleSheet.create({
  lastVisitedContactContainer: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(50) / 2,
  },
  border: {
    ...Layout.fullWidth,
    height: 1,
    backgroundColor: Colors.common.border,
  },
});
