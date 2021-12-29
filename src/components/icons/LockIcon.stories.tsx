import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LockIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: LockIcon,
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

const Template: Story<any> = (args) => <LockIcon {...args} />;

export const IconLock = Template.bind({});

IconLock.args = {};
