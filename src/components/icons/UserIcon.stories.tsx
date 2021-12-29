import React from 'react';
import { Meta, Story } from '@storybook/react';
import { UserIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: UserIcon,
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

const Template: Story<any> = (args) => <UserIcon {...args} />;

export const IconUser = Template.bind({});

IconUser.args = {};
