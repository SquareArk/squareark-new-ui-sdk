import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SuccessIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: SuccessIcon,
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

const Template: Story<any> = (args) => <SuccessIcon {...args} />;

export const IconSuccess = Template.bind({});

IconSuccess.args = {};
