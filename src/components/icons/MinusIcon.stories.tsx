import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MinusIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: MinusIcon,
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

const Template: Story<any> = (args) => <MinusIcon {...args} />;

export const IconMinus = Template.bind({});

IconMinus.args = {};
