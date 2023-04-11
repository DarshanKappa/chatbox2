import React from "react";
import Button from "./Button";
import "./Button.css"


export default {
    title: 'Form/Button',
    component: Button,
    // decorators: [story => <Center>{story()}</Center>]
}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Error = () => <Button variant="error">Error</Button>


const Template = args => <Button {...args} />


export const PrimaryA = Template.bind({})
PrimaryA.args = {
    children: "Primary Args",
    style: { color: "pink" }
}