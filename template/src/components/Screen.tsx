import React from 'react';
import {StatusBar, StatusBarProps, StyleProp, ViewStyle} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {ScaledSheet} from 'react-native-size-matters';
import tinyColor from 'tinycolor2';

import {AppColors} from '../enums';

interface Props {
  edges?: Edge[];
  statusBarProps?: StatusBarProps;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default React.memo((props: Props) => {
  const {edges, statusBarProps, children, style} = props;

  const {backgroundColor, barStyle, ...restStatusBarProps} =
    statusBarProps || {};

  const statusBarBackgroundColor = backgroundColor || AppColors.BACKGROUND;

  return (
    <SafeAreaView style={[styles.container, style]} edges={edges}>
      <StatusBar
        backgroundColor={statusBarBackgroundColor}
        barStyle={
          barStyle || tinyColor(statusBarBackgroundColor as string).isLight()
            ? 'dark-content'
            : 'light-content'
        }
        {...restStatusBarProps}
      />
      {children}
    </SafeAreaView>
  );
});

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.BACKGROUND,
  },
});
