import React from 'react';
import styled from 'styled-components';
import { CommonTheme } from '../../styles/theme';
import { utils } from '../../styles/utils';

type TWrap = {
  modeStyle?: string;
  styleWidth?: string;
  styleHeight?: string;
  disabledStyle?: boolean;
};

const Wrap = styled.button<TWrap>`
  ${CommonTheme.typography.h4}
  height: ${(props: any) => {
    if (props.styleHeight === 'unset') return 'unset';
    else {
      return props.styleHeight.indexOf('px') === -1
        ? utils.isMoible(48)
        : props.styleHeight;
    }
  }};
  width: ${(props: any) => props.styleWidth};
  ${(props: any) => {
    if (props.modeStyle === 'unfill') return `background: none;`;
    else if (props.modeStyle === 'tab') {
      return `background: ${
        props.disabledStyle
          ? CommonTheme.colorPalette.neutral.greyLight
          : CommonTheme.colorPalette.neutral.grey200
      };`;
    } else {
      return `background: ${
        props.disabledStyle
          ? CommonTheme.colorPalette.neutral.grey200
          : CommonTheme.colorPalette.primary.gradient
      };`;
    }
  }};
  border-radius: ${utils.isMoible(20)};
  border: ${(props: any) => {
    if (props.modeStyle === 'unfill') {
      return props.disabledStyle
        ? `${utils.isMoible(1)} solid ${
            CommonTheme.colorPalette.neutral.grey300
          };`
        : `${utils.isMoible(1)} solid ${
            CommonTheme.colorPalette.primary.pinkDark
          };`;
    } else {
      return `none;`;
    }
  }};
  outline: none;
  text-align: center;
  color: ${(props: any) => {
    if (props.modeStyle === 'unfill') {
      return props.disabledStyle
        ? CommonTheme.colorPalette.neutral.grey200
        : CommonTheme.colorPalette.primary.pinkDark;
    } else if (props.modeStyle === 'tab') {
      return props.disabledStyle
        ? CommonTheme.colorPalette.neutral.grey400
        : CommonTheme.colorPalette.neutral.grey500;
    } else {
      return CommonTheme.colorPalette.neutral.white;
    }
  }};
`;

interface IButton {
  mode?: string;
  text?: string | JSX.Element;
  width?: string;
  height?: string;
  disabled?: boolean;
}

export const Button: React.FC<IButton> = ({
  mode = 'fill',
  text = 'Active',
  width = '100%',
  height = 'calc(100vw * 48 / 375)',
  disabled = false,
}) => {
  return (
    <Wrap
      styleWidth={width}
      styleHeight={height}
      disabledStyle={disabled}
      modeStyle={mode}
    >
      {text}
    </Wrap>
  );
};
