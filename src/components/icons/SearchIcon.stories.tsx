import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SearchIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: SearchIcon,
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

const Template: Story<any> = (args) => <SearchIcon {...args} />;

export const IconSearch = Template.bind({});

IconSearch.args = {};
