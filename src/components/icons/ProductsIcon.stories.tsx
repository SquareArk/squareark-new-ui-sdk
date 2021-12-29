import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ProductsIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: ProductsIcon,
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

const Template: Story<any> = (args) => <ProductsIcon {...args} />;

export const IconProducts = Template.bind({});

IconProducts.args = {};
