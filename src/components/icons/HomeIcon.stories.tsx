import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HomeIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: HomeIcon,
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

const Template: Story<any> = (args) => <HomeIcon {...args} />;

export const IconHome = Template.bind({});

IconHome.args = {};
