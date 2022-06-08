// eslint-disable-next-line import/named
import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'
import {Button} from './Button'

export default {
  title: 'ui/form/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>ボタン</Button>

export const Default = Template.bind({})
Default.args = {
  color: 'default',
  size: 'm'
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  size: 's'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  size: 'l'
}
