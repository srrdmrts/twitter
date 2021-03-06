import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Button from '../components/ui/Button';
import NavButton from '../components/ui/NavigationButton';
import Navigation from '../components/common/Navigation';
import TextTitle from '../components/ui/TextTitle';
import { Messages } from '../components/icons'
import ThemeButton from '../components/ui/ThemeButton'

export default {
	title: 'Buttons',
	decorators: [withKnobs]
}

export const Normal = () => (<Button>Button Story</Button>)
export const NavigationButton = () => <NavButton>
	<Messages />
	<TextTitle>Messages</TextTitle>
</NavButton>
export const NavigationMenu = () => {
	const flat = boolean("Flat", false)
	return (<Navigation flat={flat} selectedKey="home" />)
}
export const TextTitleStory = () => <TextTitle>TextTitle</TextTitle>
export const ThemeButtonStory = () => <div>
	<ThemeButton>Theme Button</ThemeButton><br />
	<ThemeButton full>Theme Button Full</ThemeButton><br />
	<ThemeButton big>Theme Button Big</ThemeButton>
</div>