import React from 'react';
import { Meta, Story } from '@storybook/react';
import { QuestionIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: QuestionIcon,
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

const Template: Story<any> = (args) => <QuestionIcon {...args} />;

export const IconQuestion = Template.bind({});

IconQuestion.args = {};
