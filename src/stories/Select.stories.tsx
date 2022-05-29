// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '../components/Select';

export default {
  title: 'Select',
  component: Select,
  decorators: [
    (Store) => {
      return (
        <div style={{background: '#eee', padding: 30, paddingBottom: 150}}>
          <Store />
        </div>
      )
    }
  ]
} as ComponentMeta<typeof Select>;

const Template = (args: any) => <Select {...args} />
export const Primary = Template.bind({})

Primary.args = {
  options: [
    {value: 'value 1', label: 'Test 1'},
    {value: 'value 2', label: 'Test 2'},
    {value: 'value 3', label: 'Test 3'},
    {value: 'value 4', label: 'Test 4'},
    {value: 'value 4', label: 'Test 5'},
    {value: 'value 4', label: 'Test 6'},
    {value: 'value 4', label: 'Test 7'},
  ],
  placeholder: 'Select item',
}
