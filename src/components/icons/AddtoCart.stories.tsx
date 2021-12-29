import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AddtoCartIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: AddtoCartIcon,
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

const Template: Story<any> = (args) => <AddtoCartIcon {...args} />;

export const IconAddtoCart = Template.bind({});

IconAddtoCart.args = {};
