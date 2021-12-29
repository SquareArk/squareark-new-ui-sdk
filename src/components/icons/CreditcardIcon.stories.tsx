import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CreditcardIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: CreditcardIcon,
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

const Template: Story<any> = (args) => <CreditcardIcon {...args} />;

export const IconCreditcard = Template.bind({});

IconCreditcard.args = {};
