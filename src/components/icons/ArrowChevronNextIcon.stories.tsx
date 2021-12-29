import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ArrowChevronNextIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: ArrowChevronNextIcon,
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

const Template: Story<any> = (args) => <ArrowChevronNextIcon {...args} />;

export const IconArrowChevronNext = Template.bind({});

IconArrowChevronNext.args = {};
