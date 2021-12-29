import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MoreIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: MoreIcon,
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

const Template: Story<any> = (args) => <MoreIcon {...args} />;

export const IconMore = Template.bind({});

IconMore.args = {};
