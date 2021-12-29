import React from 'react';
import { Meta, Story } from '@storybook/react';
import { UploadIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: UploadIcon,
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

const Template: Story<any> = (args) => <UploadIcon {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const IconUpload = Template.bind({});

IconUpload.args = {};
