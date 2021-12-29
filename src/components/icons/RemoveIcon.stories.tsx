import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RemoveIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: RemoveIcon,
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

const Template: Story<any> = (args) => <RemoveIcon {...args} />;

export const IconRemove = Template.bind({});

IconRemove.args = {};
