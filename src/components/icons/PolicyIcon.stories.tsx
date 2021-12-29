import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PolicyIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: PolicyIcon,
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

const Template: Story<any> = (args) => <PolicyIcon {...args} />;

export const IconPolicy = Template.bind({});

IconPolicy.args = {};
