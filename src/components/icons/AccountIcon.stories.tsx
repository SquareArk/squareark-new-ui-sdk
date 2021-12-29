import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AccountIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: AccountIcon,
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

const Template: Story<any> = (args) => <AccountIcon {...args} />;

export const IconAccount = Template.bind({});

IconAccount.args = {};
