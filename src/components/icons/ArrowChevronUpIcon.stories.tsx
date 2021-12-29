import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ArrowChevronUpIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: ArrowChevronUpIcon,
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

const Template: Story<any> = (args) => <ArrowChevronUpIcon {...args} />;

export const IconArrowChevronUp = Template.bind({});

IconArrowChevronUp.args = {};
