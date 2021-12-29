import React from 'react';
import { Meta, Story } from '@storybook/react';
import { EditIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: EditIcon,
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

const Template: Story<any> = (args) => <EditIcon {...args} />;

export const IconEdit = Template.bind({});

IconEdit.args = {};
