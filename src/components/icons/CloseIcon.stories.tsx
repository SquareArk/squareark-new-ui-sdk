import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CloseIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: CloseIcon,
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

const Template: Story<any> = (args) => <CloseIcon {...args} />;

export const IconClose = Template.bind({});

IconClose.args = {};
