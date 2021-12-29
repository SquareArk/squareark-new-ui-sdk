import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ArrowChevronBackIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: ArrowChevronBackIcon,
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

const Template: Story<any> = (args) => <ArrowChevronBackIcon {...args} />;

export const IconArrowChevronBack = Template.bind({});

IconArrowChevronBack.args = {};
