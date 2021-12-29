import * as React from 'react';
import styled from 'styled-components';
import { utils } from '../../styles/utils';
import { CommonTheme } from '../../styles/theme';

const Wrap = styled.div`
  ${utils.flex.flexBetweenCenter}
  ${utils.flex.flexBetweenCenter}
  width: 100%;
  border-bottom: ${utils.isMoible(1)} solid
    ${CommonTheme.colorPalette.secondary.purpleLight};
`;

type TTabItem = {
  isDisabledStyle: any;
  isActiveStyle: any;
};
const TabItem = styled.div<TTabItem>`
  padding-bottom: ${utils.isMoible(14)};
  position: relative;
  ${utils.flex.flexCenterCenter}
  ${CommonTheme.typography.h4}
  ${(props: any) => {
    if (props.isDisabledStyle) {
      return `color: ${CommonTheme.colorPalette.neutral.grey400} !important;`;
    } else {
      if (props.isActiveStyle) {
        return `color: ${CommonTheme.colorPalette.primary.purple} !important;`;
      } else {
        return `color: ${CommonTheme.colorPalette.neutral.grey500} !important;`;
      }
    }
  }}
  color: ${CommonTheme.colorPalette.neutral.grey500};
  ${(props: any) => {
    if (props.isActiveStyle) {
      return `
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: ${utils.isMoible(2)};
        left: 0px;
        bottom: 0px;
        background: ${CommonTheme.colorPalette.primary.purple};
      }
    `;
    }
    return ``;
  }}
`;

interface ITabBar {
  tabList: any[];
  getSelectedTab: (id: number) => void;
}

export const TabBar: React.FC<ITabBar> = ({
  getSelectedTab,
  tabList = [
    { id: 0, title: 'Active', isDisabled: false },
    { id: 1, title: 'Inactive', isDisabled: false },
    { id: 2, title: 'Disabled', isDisabled: true },
  ],
}) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const onHandleClickItem = (id: number) => {
    if (!tabList[id].isDisabled) {
      setActiveTab(id);
      getSelectedTab && getSelectedTab(id);
    }
  };

  return (
    <Wrap>
      {tabList.map((item: any) => (
        <TabItem
          key={item.id}
          onClick={() => onHandleClickItem(item.id)}
          isDisabledStyle={item.isDisabled}
          isActiveStyle={activeTab === item.id}
          style={{ width: `calc(100% / ${tabList.length})` }}
        >
          {item.title}
        </TabItem>
      ))}
    </Wrap>
  );
};
