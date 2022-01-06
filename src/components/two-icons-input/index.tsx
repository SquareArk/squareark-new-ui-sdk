import React from 'react';
import styled from 'styled-components';
import { LockIcon, ViewIcon } from '../icons';
import { CommonTheme } from '../../styles/theme';
import { utils } from '../../styles/utils';

type InputXType = {
  isDisabledStyle: any;
  isErrorStyle: any;
};

const InputX = styled.input<InputXType>`
  ${CommonTheme.typography.bodyNormal}
  height: ${utils.isMoible(48)};
  width: 100%;
  border: none;
  outline: none;
  padding: 0px;
  margin: 0px;
  border-radius: ${utils.isMoible(20)};
  padding-left: ${utils.isMoible(48)};
  padding-right: ${utils.isMoible(64)};
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: ${utils.isMoible(1)} solid
      ${CommonTheme.colorPalette.primary.purple};
  }

  ${(props: any) => {
    if (props.isDisabledStyle) {
      return `
            border: ${utils.isMoible(1)} solid ${
        CommonTheme.colorPalette.neutral.grey200
      };
            background: #ffffff;
        `;
    } else {
      if (props.isErrorStyle) {
        return `
            border: ${utils.isMoible(1)} solid ${
          CommonTheme.colorPalette.secondary.red
        };
            background: #ffffff;
        `;
      } else {
        return `
            border: ${utils.isMoible(1)} solid ${
          CommonTheme.colorPalette.secondary.purpleLight
        };
            background: #ffffff;
        `;
      }
    }
  }}
`;

const Container = styled.div`
  position: relative;
`;

const LeftIconContainer = styled.div`
  ${utils.flex.flexCenterCenter}
  position: absolute;
  top: ${utils.isMoible(12)};
  left: ${utils.isMoible(20)};
`;

const RightIconContainer = styled.div`
  ${utils.flex.flexCenterCenter}
  position: absolute;
  top: ${utils.isMoible(12)};
  right: ${utils.isMoible(20)};
`;

const HelperText = styled.div`
  ${CommonTheme.typography.bodyTiny}
  padding-left: ${utils.isMoible(24)};
  padding-right: ${utils.isMoible(24)};
  box-sizing: border-box;
  margin-top: ${utils.isMoible(4)};
`;

const ErrorText = styled.div`
  ${CommonTheme.typography.bodyTiny}
  padding-left: ${utils.isMoible(24)};
  padding-right: ${utils.isMoible(24)};
  box-sizing: border-box;
  margin-top: ${utils.isMoible(4)};
  color: ${CommonTheme.colorPalette.secondary.red};
`;

interface ITwoIconsInput extends React.InputHTMLAttributes<any> {
  leftIcon?: any;
  rightIcon?: any;
  isDisabled?: any;
  placeholder?: any;
  helperText?: any;
  error?: any;
}

export const TwoIconsInput: React.FC<ITwoIconsInput> = ({
  leftIcon = <LockIcon />,
  rightIcon = <ViewIcon />,
  isDisabled = false,
  placeholder = 'Placeholder',
  helperText,
  error,
  ...rest
}) => {
  return (
    <>
      <Container>
        {leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
        <InputX
          {...rest}
          placeholder={placeholder}
          disabled={isDisabled}
          isDisabledStyle={isDisabled}
          isErrorStyle={error !== undefined}
        />
        {rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
      </Container>

      {helperText !== undefined && <HelperText>{helperText}</HelperText>}
      {error !== undefined && <ErrorText>{error}</ErrorText>}
    </>
  );
};
