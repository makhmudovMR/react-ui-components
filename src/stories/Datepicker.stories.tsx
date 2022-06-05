// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Datepicker } from '../components/Datepicker';

export default {
  title: 'Datepicker',
  component: Datepicker,
  decorators: [(Story) => (
    <div style={{background: '#ddd', padding: 30}}>
      <Story />
    </div>
  )]
} as ComponentMeta<typeof Datepicker>;

export const Primary: ComponentStory<typeof Datepicker> = () => <Datepicker />;
