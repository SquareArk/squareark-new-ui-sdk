import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconButton } from './index';
import { PlusIcon } from '../icons/index';

const meta: Meta = {
  title: 'IconButton',
  component: IconButton,
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

const Template: Story<any> = (args) => (
  <IconButton icon={<PlusIcon height="24px" width="24px" />} {...args} />
);

export const Default = Template.bind({});

Default.args = {};
