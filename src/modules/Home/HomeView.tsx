import Icon, {ICON_CATEGORY} from '@/components/Icons';
import Colors from '@/theme/Colors';
import Layout from '@/theme/Layout';
import {IContact} from '@/types/contact';
import React, {useCallback} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import ContactCard from './ContactCard';
import SectionLastVisitedContact from './SectionLastVisitedContact';

type Props = {
  contactData: IContact[];
  isFetchingContactData: boolean;
  onPressListItem: (id: IContact) => void;
  onPressAddButton: () => void;
  onRefresh: () => void;
};

const HomeView = (props: Props) => {
  const {
    contactData,
    isFetchingContactData,
    onPressListItem,
    onPressAddButton,
    onRefresh,
  } = props;

  const renderContactCard = useCallback(
    ({item, index}: ListRenderItemInfo<IContact>) => {
      return (
        <ContactCard
          item={item}
          index={index}
          isLoading={isFetchingContactData}
          onPress={onPressListItem}
        />
      );
    },
    [isFetchingContactData, onPressListItem],
  );

  return (
    <SafeAreaView style={[Layout.fill]}>
      <View style={Layout.globalHorizontalPadding}>
        <SectionLastVisitedContact />
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isFetchingContactData}
              onRefresh={onRefresh}
            />
          }
          data={contactData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderContactCard}
        />
      </View>
      <TouchableOpacity
        testID="add-button"
        style={styles.btnAdd}
        onPress={onPressAddButton}>
        <Icon
          category={ICON_CATEGORY.FEATHER}
          name="plus"
          styles={styles.iconBtnAdd}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  btnAdd: {
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: 60 / 2,
    ...Layout.floatingButton,
    backgroundColor: Colors.typography.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBtnAdd: {fontSize: moderateScale(60), color: Colors.common.white},
});
