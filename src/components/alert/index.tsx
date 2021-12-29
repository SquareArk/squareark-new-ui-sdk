import React from 'react';
import styled from 'styled-components';
import { CommonTheme } from '../../styles/theme';
import { utils } from '../../styles/utils';
import { CloseIcon } from '../icons';

enum AlertType {
  INFORMATION = 'INFORMATION',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  SUCCESS = 'SUCCESS',
}

type TWrap = {
  typeStyle: AlertType;
};

const Wrap = styled.div<TWrap>`
  position: relative;
  padding: ${utils.isMoible(12)} ${utils.isMoible(20)};
  border-radius: ${utils.isMoible(16)};
  background-color: ${(props: any) => {
    if (props.typeStyle === AlertType.INFORMATION) {
      return CommonTheme.colorPalette.secondary.purpleLight;
    } else if (props.typeStyle === AlertType.ERROR) {
      return CommonTheme.colorPalette.secondary.redLight;
    } else if (props.typeStyle === AlertType.WARNING) {
      return CommonTheme.colorPalette.secondary.orangeLight;
    } else {
      return CommonTheme.colorPalette.secondary.greenLight;
    }
  }};
`;

const Description = styled.span`
  ${CommonTheme.typography.bodyTiny}
`;

const CloseIconWrap = styled.div`
  position: absolute;
  right: ${utils.isMoible(20)};
  top: ${utils.isMoible(14)};
`;

type TTitleContainer = {
  typeStyle: AlertType;
};
const TitleContainer = styled.div<TTitleContainer>`
  ${CommonTheme.typography.h4}
  margin-bottom: ${utils.isMoible(4)};
  color: ${(props: any) => {
    if (props.typeStyle === AlertType.INFORMATION) {
      return CommonTheme.colorPalette.primary.purple;
    } else if (props.typeStyle === AlertType.ERROR) {
      return CommonTheme.colorPalette.secondary.red;
    } else if (props.typeStyle === AlertType.WARNING) {
      return CommonTheme.colorPalette.primary.orange;
    } else {
      return CommonTheme.colorPalette.secondary.green;
    }
  }};
`;
interface IAlert {
  type: AlertType;
  title: string;
  description: string;
  onCancel: () => {};
}

export const Alert: React.FC<IAlert> = ({
  type = AlertType.WARNING,
  title = 'Alert',
  description = 'Alert info not available',
  onCancel = () => {},
}) => {
  return (
    <Wrap typeStyle={type}>
      <CloseIconWrap onClick={onCancel}>
        <CloseIcon
          width="calc(100vw * 16 / 375)"
          height="calc(100vw * 16 / 375)"
        />
      </CloseIconWrap>
      <TitleContainer typeStyle={type}>{title}</TitleContainer>
      <Description>{description}</Description>
    </Wrap>
  );
};
