// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../components/Input/index';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Input',
  component: Input,
  decorators: [
    (Store) => {
      return (
        <div style={{background: '#eee', padding: 30}}>
          <Store />
        </div>
      )
    }
  ]
} as ComponentMeta<typeof Input>;

const Template = (args: any) => <Input {...args} />
export const Primary = Template.bind({})
export const Suffix = Template.bind({})
export const Prepend = Template.bind({})



Primary.args = {
  type: 'text',
  placeholder: 'Search',
  disabled: false,
}

Suffix.args = {
  type: 'text',
  placeholder: 'Search',
  prefix: <span>T</span>,
}

Prepend.args = {
  type: 'text',
  placeholder: 'Search',
  prepend: 'http://'
}
