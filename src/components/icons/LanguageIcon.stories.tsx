import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LanguageIcon } from './index';

const meta: Meta = {
  title: 'Icons',
  component: LanguageIcon,
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

const Template: Story<any> = (args) => <LanguageIcon {...args} />;

export const IconLanguage = Template.bind({});

IconLanguage.args = {};
