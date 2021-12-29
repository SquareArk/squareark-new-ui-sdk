import * as React from 'react';
import styled from 'styled-components';
import {
  HomeIcon,
  ProductsIcon,
  AccountIcon,
  CartIcon,
  HomeFilledIcon,
  ProductsFilledIcon,
  CartFilledIcon,
  AccountFilledIcon,
} from '../icons/index';
import { utils } from '../../styles/utils';

type TWrap = {};

const Wrap = styled.div<TWrap>`
  background-color: #f3f3f3;
  height: ${utils.isMoible(68)};
  width: 100%;
  ${utils.flex.flexBetweenCenter}
  border-radius: ${utils.isMoible(32)};
  padding-left: ${utils.isMoible(40)};
  padding-right: ${utils.isMoible(40)};
  box-sizing: border-box;
`;

const IconContainer = styled.div`
  width: ${utils.isMoible(24)};
  height: ${utils.isMoible(24)};
`;

interface IBottomBar {
  navs?: any;
  onSelectedNav?: (id: number) => void;
}

export const BottomBar: React.FC<IBottomBar> = ({
  onSelectedNav,
  navs = [
    {
      id: 0,
      path: '/',
      icon: <HomeIcon />,
      activeIcon: <HomeFilledIcon />,
    },
    {
      id: 1,
      path: '/products/',
      icon: <ProductsIcon />,
      activeIcon: <ProductsFilledIcon />,
    },
    {
      id: 2,
      path: '/fitting-room/',
      icon: <CartIcon />,
      activeIcon: <CartFilledIcon />,
    },
    {
      id: 3,
      path: '/account/',
      icon: <AccountIcon />,
      activeIcon: <AccountFilledIcon />,
    },
  ],
}) => {
  const [selectedIndex, setselectedIndex] = React.useState(0);

  const onTabChange = (icon: any) => {
    setselectedIndex(icon.id);
    onSelectedNav && onSelectedNav(icon.id);
  };

  return (
    <Wrap>
      {navs.map((icon: any) => (
        <>
          {icon.id == selectedIndex ? (
            <IconContainer key={icon.id} onClick={() => onTabChange(icon)}>
              {icon.activeIcon}
            </IconContainer>
          ) : (
            <IconContainer key={icon.id} onClick={() => onTabChange(icon)}>
              {icon.icon}
            </IconContainer>
          )}
        </>
      ))}
    </Wrap>
  );
};
