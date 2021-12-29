import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CopyIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: CopyIcon,
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

const Template: Story<any> = (args) => <CopyIcon {...args} />;

export const IconCopy = Template.bind({});

IconCopy.args = {};
