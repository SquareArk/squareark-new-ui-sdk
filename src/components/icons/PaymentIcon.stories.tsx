import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PaymentIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: PaymentIcon,
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

const Template: Story<any> = (args) => <PaymentIcon {...args} />;

export const IconPayment = Template.bind({});

IconPayment.args = {};
