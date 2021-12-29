import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert } from './index';

const meta: Meta = {
  title: 'Alert',
  component: Alert,
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
    (Story) => (
      <div style={{ fontFamily: 'Airbnb Cereal App' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

const Template: Story<any> = (args) => <Alert {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
