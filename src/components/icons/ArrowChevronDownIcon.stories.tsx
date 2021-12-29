import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ArrowChevronDownIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: ArrowChevronDownIcon,
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

const Template: Story<any> = (args) => <ArrowChevronDownIcon {...args} />;

export const IconArrowChevronDown = Template.bind({});

IconArrowChevronDown.args = {};
