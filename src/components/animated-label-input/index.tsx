import React from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import { ArrowChevronNextIcon } from '../icons';
import { CommonTheme } from '../../styles/theme';
import { utils } from '../../styles/utils';

type IWrap = {
  styleDisabled: any;
  styledFocus: any;
  isErrorStyle: any;
  isHavingLeftIcon: any;
};

const WrapX = styled.div<IWrap>`
  box-sizing: border-box;
  position: relative;
  height: ${utils.isMoible(48)};
  width: 100%;
  border-radius: ${utils.isMoible(20)};
  ${(props: any) => {
    if (props.styleDisabled) {
      return `border: ${utils.isMoible(1)} solid ${
        CommonTheme.colorPalette.neutral.grey200
      };`;
    } else {
      if (props.isErrorStyle) {
        return `border: ${utils.isMoible(1)} solid ${
          CommonTheme.colorPalette.secondary.red
        };`;
      } else {
        if (props.styledFocus) {
          return `border: ${utils.isMoible(1)} solid ${
            CommonTheme.colorPalette.primary.purple
          };`;
        } else {
          return `border: ${utils.isMoible(1)} solid ${
            CommonTheme.colorPalette.secondary.purpleLight
          };`;
        }
      }
    }
  }}
  padding-left: ${utils.isMoible(24)};
  padding-right: ${(props: any) => {
    if (props.isHavingLeftIcon) {
      return utils.isMoible(64);
    } else {
      return utils.isMoible(24);
    }
  }};
`;

type ILabel = {
  isFocusStyle: any;
  isErrorStyle: any;
};

const LabelX = styled.div<ILabel>`
  position: absolute;

  ${(props: any) => {
    if (props.isFocusStyle) {
      return CommonTheme.typography.bodyTiny;
    } else {
      return CommonTheme.typography.bodyNormal;
    }
  }}
  color: ${(props: any) => {
    if (props.isErrorStyle) {
      return CommonTheme.colorPalette.secondary.red;
    } else {
      if (props.isFocusStyle) {
        return CommonTheme.colorPalette.primary.purple;
      } else {
        return CommonTheme.colorPalette.neutral.greyDark;
      }
    }
  }};
  ${(props: any) => {
    if (props.isFocusStyle) {
      return `height: ${utils.isMoible(16)};`;
    } else {
      return `height: ${utils.isMoible(24)};`;
    }
  }}
  ${(props: any) => {
    if (props.isFocusStyle) {
      return `top: ${utils.isMoible(4)};`;
    } else {
      return `top: ${utils.isMoible(12)};`;
    }
  }}
  left: ${utils.isMoible(24)};
  transition: all 0.2s;
`;

const InputX = styled.input`
  ${CommonTheme.typography.h9}
  height: ${utils.isMoible(16)};
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  position: relative;
  top: ${utils.isMoible(18)};
  padding: 0px;
  margin: 0px;
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

const LeftIconContainer = styled.div`
  ${utils.flex.flexCenterCenter}
  position: absolute;
  right: ${utils.isMoible(20)};
  top: ${utils.isMoible(12)};
`;

interface IAnimatedLabelInput {
  value?: any;
  isDisabled?: any;
  placeholder?: any;
  labelText?: any;
  onChange?: (e: any) => void;
  helperText?: any;
  error?: any;
  leftIcon?: any;
}

export const AnimatedLabelInput: React.FC<IAnimatedLabelInput> = ({
  isDisabled = false,
  value,
  placeholder = 'Placeholder',
  labelText = 'Label',
  onChange,
  helperText,
  error,
  leftIcon = <ArrowChevronNextIcon />,
}) => {
  const [internalValue, setInternalValue] = React.useState(value);
  const [isFocus, setIsFocus] = React.useState(false);
  const inputRef = React.useRef<any>();

  const onHandleClickWrap = () => {
    if (!isDisabled) {
      setIsFocus(true);
      inputRef.current.focus();
    }
  };

  const onHandleClickOutside = () => {
    if (internalValue === '') setIsFocus(false);
  };

  const onChangeInput = (e: any) => {
    setInternalValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
      <OutsideClickHandler onOutsideClick={onHandleClickOutside}>
        <WrapX
          onClick={onHandleClickWrap}
          styleDisabled={isDisabled}
          styledFocus={isFocus}
          isErrorStyle={error !== undefined}
          isHavingLeftIcon={leftIcon !== undefined}
        >
          <LabelX isFocusStyle={isFocus} isErrorStyle={error !== undefined}>
            {labelText}
          </LabelX>
          <InputX
            ref={inputRef}
            value={internalValue || ''}
            onChange={onChangeInput}
            placeholder={isFocus ? placeholder : ''}
            disabled={isDisabled}
          />

          {leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
        </WrapX>
      </OutsideClickHandler>
      {helperText !== undefined && <HelperText>{helperText}</HelperText>}
      {error !== undefined && <ErrorText>{error}</ErrorText>}
    </>
  );
};
