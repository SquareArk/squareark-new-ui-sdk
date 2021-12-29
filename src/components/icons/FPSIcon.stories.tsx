import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FPSIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: FPSIcon,
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

const Template: Story<any> = (args) => <FPSIcon {...args} />;

export const IconFPS = Template.bind({});

IconFPS.args = {};
