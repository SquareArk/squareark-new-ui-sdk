import React from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import {
  VietamIcon,
  IndiaIcon,
  HongkongIcon,
  ChinaIcon,
  ArrowChevronDownIcon,
} from '../icons';
import { CommonTheme } from '../../styles/theme';
import { utils } from '../../styles/utils';

const Container = styled.div`
  position: relative;
`;

const PhoneCode = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: ${utils.isMoible(120)};
  ${utils.flex.flexCenterCenter}
`;

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
  padding-left: ${utils.isMoible(116)};
  padding-right: ${utils.isMoible(24)};
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

const Head = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  border-radius: ${utils.isMoible(20)};
  border: ${utils.isMoible(1)} solid #f6e5f4;
  position: absolute;
  width: 100%;
  background: transparent;
  top: ${utils.isMoible(52)};
  left: 0px;
  background: ${CommonTheme.colorPalette.neutral.white};
`;
const PostCode = styled.div`
  ${CommonTheme.typography.bodyNormal}
  color: ${CommonTheme.colorPalette.neutral.grey400};
  position: absolute;
  left: ${utils.isMoible(72)};
  top: ${utils.isMoible(12)};
`;
const PostCodeItem = styled.div`
  ${CommonTheme.typography.bodyNormal}
  color: ${CommonTheme.colorPalette.neutral.grey400};
  margin-left: ${utils.isMoible(8)};
`;

const DownIconContainer = styled.div`
  position: absolute;
  left: ${utils.isMoible(48)};
  top: ${utils.isMoible(16)};
  width: ${utils.isMoible(16)};
  height: ${utils.isMoible(16)};
  transition: all 0.2s;
  transform-origin: center;
  margin-left: ${utils.isMoible(4)};
  ${utils.flex.flexCenterCenter}
`;

const PhoneItem = styled.div`
  ${utils.flex.flexStartCenter}
  height: ${utils.isMoible(48)};
  padding-left: ${utils.isMoible(20)};
`;

type FlagContainerType = {
  isStyleDropdown?: any;
};

const FlagContainer = styled.div<FlagContainerType>`
  ${utils.flex.flexCenterCenter}
  transition: all 0.2s;
  transform-origin: center;
  position: absolute;
  left: ${utils.isMoible(20)};
  top: ${utils.isMoible(12)};
  ${(props) => {
    if (props.isStyleDropdown) {
      return `transform: rotate(180deg)`;
    } else {
      return ``;
    }
  }}
`;

interface IPhoneInput {
  listPhone?: any;
  value?: any;
  isDisabled?: any;
  placeholder?: any;
  onChange?: (e: any) => void;
  helperText?: any;
  error?: any;
}

export const PhoneInput: React.FC<IPhoneInput> = ({
  value,
  isDisabled = false,
  placeholder = 'Phone number',
  onChange,
  helperText,
  error,
  listPhone = [
    {
      id: 0,
      flag: <VietamIcon />,
      code: '+84',
    },
    {
      id: 1,
      flag: <IndiaIcon />,
      code: '+91',
    },
    {
      id: 2,
      flag: <HongkongIcon />,
      code: '+852',
    },
    {
      id: 3,
      flag: <ChinaIcon />,
      code: '+86',
    },
  ],
}) => {
  const [internalValue, setInternalValue] = React.useState(value);
  const [togglePhoneCode, setTogglePhoneCode] = React.useState(false);
  const [activePhoneCode, setActivePhoneCode] = React.useState(listPhone[0]);

  const onChangeInput = (e: any) => {
    setInternalValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const onHandleClickHead = () => {
    setTogglePhoneCode(!togglePhoneCode);
  };

  const onHandleClickOutside = () => {
    setTogglePhoneCode(false);
  };

  const onClickPhoneCodeItem = (item: any) => {
    setTogglePhoneCode(false);
    setActivePhoneCode(item);
  };

  return (
    <>
      <Container>
        <OutsideClickHandler onOutsideClick={onHandleClickOutside}>
          <PhoneCode>
            <Head onClick={onHandleClickHead}>
              <FlagContainer isStyleDropdown={togglePhoneCode}>
                {activePhoneCode.flag}
              </FlagContainer>
              <DownIconContainer>
                <ArrowChevronDownIcon
                  width="calc(100vw * 16 / 375)"
                  height="calc(100vw * 16 / 375)"
                />
              </DownIconContainer>
              <PostCode>{activePhoneCode.code}</PostCode>
            </Head>
            {togglePhoneCode && (
              <Content>
                {listPhone.map((item: any) => (
                  <PhoneItem onClick={() => onClickPhoneCodeItem(item)}>
                    {item.flag}
                    <PostCodeItem>{item.code}</PostCodeItem>
                  </PhoneItem>
                ))}
              </Content>
            )}
          </PhoneCode>
        </OutsideClickHandler>

        <InputX
          type="text"
          value={internalValue || ''}
          onChange={onChangeInput}
          placeholder={placeholder}
          disabled={isDisabled}
          isDisabledStyle={isDisabled}
          isErrorStyle={error !== undefined}
        />
      </Container>

      {helperText !== undefined && <HelperText>{helperText}</HelperText>}
      {error !== undefined && <ErrorText>{error}</ErrorText>}
    </>
  );
};
