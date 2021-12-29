import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MenuIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: MenuIcon,
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

const Template: Story<any> = (args) => <MenuIcon {...args} />;

export const IconMessage = Template.bind({});

IconMessage.args = {};
