import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FilterIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: FilterIcon,
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

const Template: Story<any> = (args) => <FilterIcon {...args} />;

export const IconFilter = Template.bind({});

IconFilter.args = {};
