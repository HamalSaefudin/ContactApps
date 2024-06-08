import Header from '@/components/Header';
import Icon, {ICON_CATEGORY} from '@/components/Icons';
import Colors from '@/theme/Colors';
import Fonts from '@/theme/Fonts';
import Layout, {screenHeight} from '@/theme/Layout';
import {IContact} from '@/types/contact';
import React, {useMemo} from 'react';
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import DetailContactAvatar from './DetailContactAvatar';
import SimpleInput from './SimpleInput';

type Props = {
  onBackPress: () => void;
  onDeletePress: () => void;
  isFetchingDetail: boolean;
  onPressAvatar: () => void;
  formData: IContact;
  onPressSubmit: () => void;
  onInputChange: (value: string, fieldName: string) => void;
  onHideAlert: () => void;
  onAgreeDelete: () => void;
  isShowAlertDelete: boolean;
  pageTitle: string;
  btnTitle: string;
  isBtnLoading: boolean;
};

function DetailContactView({
  onBackPress,
  onDeletePress,
  onPressAvatar,
  isFetchingDetail,
  formData,
  onInputChange,
  onHideAlert,
  onAgreeDelete,
  onPressSubmit,
  isShowAlertDelete,
  pageTitle,
  btnTitle,
  isBtnLoading,
}: Props) {
  const {top, bottom} = useSafeAreaInsets();

  const renderModal = useMemo(() => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        visible={isShowAlertDelete}
        onRequestClose={onHideAlert}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.btnClose} onPress={onHideAlert}>
              <Icon
                category={ICON_CATEGORY.ANT_DESIGN}
                name="close"
                styles={{
                  fontSize: moderateScale(20),
                  color: Colors.typography.black,
                }}
              />
            </TouchableOpacity>
            <Icon
              category={ICON_CATEGORY.FEATHER}
              name="alert-triangle"
              styles={{
                fontSize: moderateScale(48),
                color: Colors.typography.red,
              }}
            />
            <Text style={styles.modalText}>
              Did you really want to delete this contact ?
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onAgreeDelete}>
              <Text style={styles.textStyle}>Agree</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }, [isShowAlertDelete, onAgreeDelete, onHideAlert]);

  return (
    <LinearGradient
      colors={['#2C2B77', '#282671', '#36329A']}
      start={{x: 1, y: 1}}
      useAngle
      style={[Layout.fill, {paddingTop: top}]}>
      {renderModal}
      <Header onBackPress={onBackPress} onDeletePress={onDeletePress} />
      <View style={styles.containerUpperSection}>
        <DetailContactAvatar
          isLoading={isFetchingDetail}
          onPress={onPressAvatar}
          source={formData.photo}
        />
        <Text style={styles.pageTitle}>{pageTitle}</Text>
      </View>
      <View style={[styles.contentContainer, {paddingBottom: bottom}]}>
        <View>
          <SimpleInput
            value={formData.firstName}
            fieldName="firstName"
            onChangeText={onInputChange}
            title="First Name"
            isLoading={isFetchingDetail}
          />
          <SimpleInput
            value={formData.lastName}
            fieldName="lastName"
            onChangeText={onInputChange}
            title="Last Name"
            isLoading={isFetchingDetail}
          />
          <SimpleInput
            value={String(formData.age)}
            fieldName="age"
            onChangeText={onInputChange}
            title="Age"
            isLoading={isFetchingDetail}
            keyboardType="number-pad"
          />
        </View>
        <TouchableOpacity style={styles.btnCreate} onPress={onPressSubmit}>
          <Text
            style={[Fonts.headingMedium.h2, {color: Colors.typography.white}]}>
            {btnTitle}
          </Text>
          {isBtnLoading && <ActivityIndicator color={Colors.common.white} />}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default DetailContactView;

const styles = StyleSheet.create({
  contentContainer: {
    shadowColor: Colors.common.black,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flex: 1,
    backgroundColor: Colors.common.white,
    borderTopRightRadius: moderateScale(40),
    borderTopLeftRadius: moderateScale(40),
    ...Layout.globalPadding,
    paddingTop: moderateScale(40),
    gap: moderateScale(20),
    justifyContent: 'space-between',
  },
  title: {
    ...Fonts.headingRegular.h2,
    color: Colors.typography.subtitle,
  },
  btnCreate: {
    backgroundColor: Colors.typography.secondary,
    padding: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(4),
    flexDirection: 'row',
    gap: moderateScale(10),
  },
  containerUpperSection: {
    ...Layout.alignItemsCenter,
    ...Layout.justifyContentCenter,
    height: screenHeight * 0.3,
  },
  pageTitle: {...Fonts.headingMedium.h1, color: Colors.typography.white},
  centeredView: {
    flex: 1,
    paddingTop: screenHeight * 0.2,
    backgroundColor: Colors.common.black05,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: moderateScale(10),
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    ...Layout.globalHorizontalPadding,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: moderateScale(40),
    textAlign: 'center',
    ...Fonts.bodyMedium.body1,
    color: Colors.typography.red,
  },
  btnClose: {
    position: 'absolute',
    right: moderateScale(15),
    top: moderateScale(15),
  },
});
