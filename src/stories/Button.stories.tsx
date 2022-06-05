import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Store) => {
      return (
        <div style={{background: '#eee', padding: 30}}>
          <Store />
        </div>
      )
    }
  ]
} as ComponentMeta<typeof Button>;

export const All = () => (
  <div
    style={{display: 'flex', justifyContent: 'space-around'}}
  >
    <Button onClick={() => {}} label='Default' />
    <Button onClick={() => {}} label='Primary' type='primary' />
    <Button onClick={() => {}} label='Success' type='success'/>
    <Button onClick={() => {}} label='Warning' type='warning'/>
    <Button onClick={() => {}} label='Danger' type='danger'/>
    <Button onClick={() => {}} label='Danger' type='danger' disabled/>
  </div>
);
