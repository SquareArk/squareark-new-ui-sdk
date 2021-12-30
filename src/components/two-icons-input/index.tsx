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
            background: transparent;
        `;
    } else {
      if (props.isErrorStyle) {
        return `
            border: ${utils.isMoible(1)} solid ${
          CommonTheme.colorPalette.secondary.red
        };
            background: transparent;
        `;
      } else {
        return `
            border: ${utils.isMoible(1)} solid ${
          CommonTheme.colorPalette.secondary.purpleLight
        };
            background: transparent;
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
  value?: any;
  isDisabled?: any;
  placeholder?: any;
  onChange?: (e: any) => void;
  helperText?: any;
  error?: any;
}

export const TwoIconsInput: React.FC<ITwoIconsInput> = ({
  leftIcon = <LockIcon />,
  rightIcon = <ViewIcon />,
  value,
  isDisabled = false,
  placeholder = 'Placeholder',
  onChange,
  helperText,
  error,
  ...rest
}) => {
  const [internalValue, setInternalValue] = React.useState(value);

  const onChangeInput = (e: any) => {
    setInternalValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <Container>
        {leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
        <InputX
          {...rest}
          value={internalValue || ''}
          onChange={onChangeInput}
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
