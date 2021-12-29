import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ArrowtopIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: ArrowtopIcon,
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

const Template: Story<any> = (args) => <ArrowtopIcon {...args} />;

export const IconArrowtop = Template.bind({});

IconArrowtop.args = {};
