import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ViewIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: ViewIcon,
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

const Template: Story<any> = (args) => <ViewIcon {...args} />;

export const IconView = Template.bind({});

IconView.args = {};
