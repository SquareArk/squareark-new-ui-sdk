import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HideIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: HideIcon,
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

const Template: Story<any> = (args) => <HideIcon {...args} />;

export const IconHide = Template.bind({});

IconHide.args = {};
