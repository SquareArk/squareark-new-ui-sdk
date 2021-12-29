import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PhoneIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: PhoneIcon,
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

const Template: Story<any> = (args) => <PhoneIcon {...args} />;

export const IconPhone = Template.bind({});

IconPhone.args = {};
