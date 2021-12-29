import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ArrowleftIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: ArrowleftIcon,
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

const Template: Story<any> = (args) => <ArrowleftIcon {...args} />;

export const IconArrowleft = Template.bind({});

IconArrowleft.args = {};
