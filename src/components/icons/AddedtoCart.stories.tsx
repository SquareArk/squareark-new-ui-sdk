import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AddedtoCartIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: AddedtoCartIcon,
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

const Template: Story<any> = (args) => <AddedtoCartIcon {...args} />;

export const IconAddedtoCart = Template.bind({});

IconAddedtoCart.args = {};
