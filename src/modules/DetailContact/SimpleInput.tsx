import Icon, {ICON_CATEGORY} from '@/components/Icons';
import Colors from '@/theme/Colors';
import Layout from '@/theme/Layout';
import React, {useRef} from 'react';
import {KeyboardTypeOptions, StyleSheet, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import {moderateScale} from 'react-native-size-matters';

type Props = {
  value: string;
  onChangeText: (text: string, fieldName: string) => void;
  title: string;
  keyboardType?: KeyboardTypeOptions;
  isLoading?: boolean;
  fieldName: string;
};

function SimpleInput(props: Props) {
  const ref = useRef<TextInput>(null);
  return (
    <ShimmerPlaceholder
      visible={!props.isLoading}
      LinearGradient={LinearGradient}
      shimmerStyle={[Layout.fullWidth, {height: moderateScale(40)}]}>
      <TextInput
        ref={ref}
        value={props.value}
        keyboardType={props.keyboardType || 'default'}
        placeholder={props.title}
        onChangeText={val => props.onChangeText(val, props.fieldName)}
        style={styles.input}
      />
      <View style={styles.icEdit}>
        <Icon
          testID="icon-pencil"
          category={ICON_CATEGORY.OCTICONS}
          name="pencil"
        />
      </View>
    </ShimmerPlaceholder>
  );
}

const styles = StyleSheet.create({
  icEdit: {
    position: 'absolute',
    right: moderateScale(20),
    top: moderateScale(20),
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Colors.common.border,
    paddingVertical: moderateScale(20),
  },
});

export default SimpleInput;
