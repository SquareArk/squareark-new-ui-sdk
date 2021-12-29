import * as React from 'react';
import styled from 'styled-components';
import { CommonTheme } from '../../styles/theme';

type TWrap = {
  styleSize?: string;
  disabledStyle?: boolean;
};

const Wrap = styled.button<TWrap>`
  ${CommonTheme.typography.h4}
  background: ${(props: any) =>
    props.disabledStyle
      ? CommonTheme.colorPalette.neutral.grey300
      : CommonTheme.colorPalette.primary.gradient};
  border: none;
  height: ${(props: any) => props.styleSize};
  width: ${(props: any) => props.styleSize};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface IconButtonProps {
  disabled?: boolean;
  size?: string;
  icon?: React.FC;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  disabled = false,
  size = '48px',
  icon,
  onClick,
}) => {
  const onHandleClick = () => {
    if (onClick !== undefined && !disabled) onClick();
  };

  return (
    <Wrap styleSize={size} disabledStyle={disabled} onClick={onHandleClick}>
      {icon}
    </Wrap>
  );
};
