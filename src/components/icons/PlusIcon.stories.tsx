import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PlusIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: PlusIcon,
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

const Template: Story<any> = (args) => <PlusIcon {...args} />;

export const IconPlus = Template.bind({});

IconPlus.args = {};
