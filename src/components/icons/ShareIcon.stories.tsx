import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ShareIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: ShareIcon,
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

const Template: Story<any> = (args) => <ShareIcon {...args} />;

export const IconShare = Template.bind({});

IconShare.args = {};
