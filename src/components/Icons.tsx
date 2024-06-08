import Colors from '@/theme/Colors';
import React from 'react';
import {
  ColorValue,
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import FontAwsome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwsome6Pro from 'react-native-vector-icons/FontAwesome6Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

export enum ICON_CATEGORY {
  ANT_DESIGN = 'AntDesign',
  ENTYPO = 'Entypo',
  EVILICONS = 'EvilIcons',
  FEATHER = 'Feather',
  FONT_AWESOME = 'FontAwesome',
  FONT_AWESOME_5 = 'FontAwesome5',
  FONT_AWESOME_5_Pro = 'FontAwesome5Pro',
  FONT_AWESOME_6 = 'FontAwesome6',
  FONT_AWESOME_6_PRO = 'FontAwesome6Pro',
  FONTISTO = 'Fontisto',
  FOUNDATION = 'Foundation',
  ION_ICONS = 'IonIcons',
  MATERIAL_ICONS = 'MaterialIcons',
  MATERIAL_COMMUNITY_ICONS = 'MaterialCommunityIcons',
  OCTICONS = 'Octicons',
  SIMPLE_LINE_ICONS = 'SIMPLE_LINE_ICONS',
  ZOCIAL = 'Zocial',
  CUSTOM = 'Custom',
}

export type IconProps = {
  category?: ICON_CATEGORY;
  name?: string;
  styles?: {color?: ColorValue; fontSize?: number};
  onPress?: () => void;
  testID?: string;
  source?: ImageSourcePropType;
  imageStyle?: ImageStyle;
  imageResizeMode?: ImageResizeMode;
};

const Icon = (props: IconProps) => {
  const {
    category = ICON_CATEGORY.ANT_DESIGN,
    name = '',
    styles = {
      color: Colors.common.black,
      fontSize: moderateScale(16),
    },
    testID,
    onPress,
    source,
  } = props;

  const renderIcon = () => {
    const iconColor = styles.color as string;
    const defaultProps = {
      testID,
    };
    const iconProps = {
      ...defaultProps,
      name,
      color: iconColor,
      size: styles.fontSize,
      onPress,
    };
    switch (category) {
      case ICON_CATEGORY.CUSTOM:
        return source ? (
          <Image
            testID={testID}
            source={source}
            style={[
              {width: styles.fontSize, height: styles.fontSize},
              props.imageStyle,
            ]}
            resizeMode={props.imageResizeMode || 'contain'}
          />
        ) : null;
      case ICON_CATEGORY.FEATHER:
        return <FeatherIcon {...iconProps} />;
      case ICON_CATEGORY.FONT_AWESOME_5:
        return <FontAwesome5 {...iconProps} />;
      case ICON_CATEGORY.ENTYPO:
        return <Entypo {...iconProps} />;
      case ICON_CATEGORY.ION_ICONS:
        return <IonIcons {...iconProps} />;
      case ICON_CATEGORY.MATERIAL_ICONS:
        return <MaterialIcons {...iconProps} />;
      case ICON_CATEGORY.MATERIAL_COMMUNITY_ICONS:
        return <MaterialComunityIcons {...iconProps} />;
      case ICON_CATEGORY.FONT_AWESOME:
        return <FontAwesome {...iconProps} />;
      case ICON_CATEGORY.OCTICONS:
        return <Octicons {...iconProps} />;
      case ICON_CATEGORY.FONT_AWESOME_5_Pro:
        return <FontAwesome5Pro {...iconProps} />;
      case ICON_CATEGORY.FONT_AWESOME_6:
        return <FontAwsome6 {...iconProps} />;
      case ICON_CATEGORY.FONT_AWESOME_6_PRO:
        return <FontAwsome6Pro {...iconProps} />;
      case ICON_CATEGORY.SIMPLE_LINE_ICONS:
        return <SimpleLineIcons {...iconProps} />;
      case ICON_CATEGORY.ZOCIAL:
        return <Zocial {...iconProps} />;
      case ICON_CATEGORY.FONTISTO:
        return <Fontisto {...iconProps} />;
      case ICON_CATEGORY.EVILICONS:
        return <EvilIcons {...iconProps} />;
      case ICON_CATEGORY.ANT_DESIGN:
      default:
        return <AntDesignIcon {...iconProps} />;
    }
  };

  return renderIcon();
};

export default Icon;
