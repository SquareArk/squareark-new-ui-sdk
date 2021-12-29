import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SettingIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: SettingIcon,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    (Story) => <div style={{ fontFamily: 'Airbnb Cereal App' }}>{Story()}</div>,
  ],
};

export default meta;

const Template: Story<any> = (args) => <SettingIcon {...args} />;

export const IconSetting = Template.bind({});

IconSetting.args = {};
