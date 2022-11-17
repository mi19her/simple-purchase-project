import React from "react";
import Expenses from "./Expenses";
import { render, screen } from "@testing-library/react";

const ITEMS = [{
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
},
{
    id: 'e2',
    title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)
},
]

describe('test Expenses', () => {
    test('Render component',
        () => {
            render(<Expenses items={ITEMS} />)
        })
    test('Items vacio',
        () => {
            render(<Expenses items={[]} />)
            screen.getByText('Found no expenses.')
        })
})

