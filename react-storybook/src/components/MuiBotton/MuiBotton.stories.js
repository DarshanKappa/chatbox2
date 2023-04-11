import React from "react";
import { Button, Box } from "@mui/material"
import { action, /*actions*/ } from "@storybook/addon-actions"
import { text, boolean, number, withKnobs } from "@storybook/addon-knobs"



export default {
    title: "MUI/Button",
    component: Button,
    // decorators: [withKnobs],
    argTypes: {
        variant: {control: "text"},
        children: {control: "text"},
        onClick: {action: "Button clicked!"}
    }
}

const Template = args => <Button {...args} />

export const SuccessArgs = Template.bind({})

SuccessArgs.args = {
    variant: 'contained',
    color: 'success',
    children: "Success Args"

}

export const Success = () => <Button color="success" variant="contained" onClick={action('clicked')}>Success</Button>
export const Danger = () => <Button color="error" variant="contained" onMouseOver={action('hover event handler')} >Danger</Button>
export const Login = () => <Button variant="contained" onClick={()=>console.log('Logined!')}>Login</Button>


export const knobs = () => (
    <Button color={text('color', 'error')} variant={text('variant', 'text')} disabled={boolean('Disabled', false)}>
        {text("label", "Button Label")}
    </Button>
)

export const Text = () => (
    <Box sx={{fontSize: number("font size", 16)}}>{text("text", "Enter something")}</Box>
)