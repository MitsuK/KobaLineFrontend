// src/components/Task.stories.js
import { Story, Meta } from '@storybook/react';

import React from 'react';

import Channel from './Channel';

export default {
    component: Channel,
    title: 'Channel',
} as Meta;

type Props = {
    id: string;
    title: string;
    state: boolean;
}

const Template: Story<Props> = args => <Channel {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: '1',
    title: 'Test Task',
    state: true,
};

/*
export const Pinned = Template.bind({ });
Pinned.args = {
        task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({ });
Archived.args = {
        task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
};
*/