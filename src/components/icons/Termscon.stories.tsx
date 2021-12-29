import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TermsIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: TermsIcon,
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

const Template: Story<any> = (args) => <TermsIcon {...args} />;

export const IconTerms = Template.bind({});

IconTerms.args = {};
