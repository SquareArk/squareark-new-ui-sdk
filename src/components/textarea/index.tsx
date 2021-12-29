import React from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import { CommonTheme } from '../../styles/theme';
import { utils } from '../../styles/utils';

type ContainerType = {
  styledFocus?: any;
  styleDisabled?: any;
  isErrorStyle?: any;
};

const Container = styled.div<ContainerType>`
  position: relative;
  height: ${utils.isMoible(96)};
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
  box-sizing: border-box;
  border-radius: ${utils.isMoible(20)};
  box-sizing: border-box;
  padding-top: ${utils.isMoible(24)};
  padding-left: ${utils.isMoible(24)};
  padding-right: ${utils.isMoible(24)};
  padding-bottom: ${utils.isMoible(8)};
`;

type PlaceholderType = {
  isFocusStyle?: any;
  isErrorStyle?: any;
};

const Placeholder = styled.div<PlaceholderType>`
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

type TextareaRealType = {
  isStyleDisable?: any;
};

const TextareaReal = styled.textarea<TextareaRealType>`
  ${CommonTheme.typography.h9}
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;

  ${(props) => {
    if (props.isStyleDisable) {
      return `background: transparent; !important`;
    } else {
      return `background: transparent;`;
    }
  }}
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

interface ITextarea {
  value?: any;
  isDisabled?: any;
  placeholder?: any;
  onChange?: (e: any) => void;
  helperText?: any;
  error?: any;
}

export const Textarea: React.FC<ITextarea> = ({
  value,
  isDisabled = false,
  placeholder = 'Placeholder',
  onChange,
  helperText,
  error,
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
        <Container
          onClick={onHandleClickWrap}
          styledFocus={isFocus}
          styleDisabled={isDisabled}
          isErrorStyle={error !== undefined}
        >
          <Placeholder
            isFocusStyle={isFocus}
            isErrorStyle={error !== undefined}
          >
            {placeholder}
          </Placeholder>
          <TextareaReal
            disabled={isDisabled}
            isStyleDisable={isDisabled}
            ref={inputRef}
            value={internalValue || ''}
            onChange={onChangeInput}
          />
        </Container>
      </OutsideClickHandler>
      {helperText !== undefined && <HelperText>{helperText}</HelperText>}
      {error !== undefined && <ErrorText>{error}</ErrorText>}
    </>
  );
};
