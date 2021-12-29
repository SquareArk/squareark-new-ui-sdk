import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ErrorIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: ErrorIcon,
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

const Template: Story<any> = (args) => <ErrorIcon {...args} />;

export const IconError = Template.bind({});

IconError.args = {};
