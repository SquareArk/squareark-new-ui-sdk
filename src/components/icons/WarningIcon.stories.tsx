import React from 'react';
import { Meta, Story } from '@storybook/react';
import { WarningIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: WarningIcon,
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

const Template: Story<any> = (args) => <WarningIcon {...args} />;

export const IconWarning = Template.bind({});

IconWarning.args = {};
