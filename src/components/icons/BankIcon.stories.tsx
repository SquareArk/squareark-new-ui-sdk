import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BankIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: BankIcon,
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

const Template: Story<any> = (args) => <BankIcon {...args} />;

export const IconBank = Template.bind({});

IconBank.args = {};
