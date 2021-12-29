import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CameraIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: CameraIcon,
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

const Template: Story<any> = (args) => <CameraIcon {...args} />;

export const IconCamera = Template.bind({});

IconCamera.args = {};
