import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
.add('Primary', () => <Button type="primary" >Hello</Button>)
.add('Danger', () => <Button type="danger" >Hello</Button>)
.add('Success', () => <Button type="success" >Hello</Button>)
.add('Warning', () => <Button type="warning" >Hello</Button>)
.add('Default', () => <Button type="default" >Hello</Button>)
