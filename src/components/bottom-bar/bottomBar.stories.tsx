import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BottomBar } from './index';
import { HomeIcon, ProductsIcon, AccountIcon, CartIcon, HomeFilledIcon, ProductsFilledIcon, CartFilledIcon, AccountFilledIcon } from '../icons/index';

const meta: Meta = {
    title: 'BottomBar',
    component: BottomBar,
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
        (Story) => (
            <div style={{ fontFamily: 'Airbnb Cereal App' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

const Icons = [
    {
        id: 0,
        path: "/",
        icon: <HomeIcon height="24px" width="24px" />,
        activeIcon: <HomeFilledIcon height="24px" width="24px" />,
    },
    {
        id: 1,
        path: "/products/",
        icon: <ProductsIcon height="24px" width="24px" />,
        activeIcon: <ProductsFilledIcon height="24px" width="24px" />,
    },
    {
        id: 2,
        path: "/fitting-room/",
        icon: <CartIcon height="24px" width="24px" />,
        activeIcon: <CartFilledIcon height="24px" width="24px" />,
    },
    {
        id: 3,
        path: "/account/",
        icon: <AccountIcon height="24px" width="24px" />,
        activeIcon: <AccountFilledIcon height="24px" width="24px" />,
    }
]

const Template: Story<any> = (args) => <BottomBar icons={Icons} {...args} />;

export const Default = Template.bind({});

Default.args = {};
