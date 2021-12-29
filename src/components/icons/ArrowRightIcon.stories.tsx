import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ArrowrightIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: ArrowrightIcon,
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

const Template: Story<any> = (args) => <ArrowrightIcon {...args} />;

export const IconArrowright = Template.bind({});

IconArrowright.args = {};
