import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StoreIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: StoreIcon,
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

const Template: Story<any> = (args) => <StoreIcon {...args} />;

export const IconStore = Template.bind({});

IconStore.args = {};
