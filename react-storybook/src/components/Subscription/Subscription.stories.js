import { Primary, Secondary, Success, Error } from "../Button/Button.stories"
import { Big, Small, Medium } from "../Input/Input.stories"


export default {
    title: "Form/Subsription"
}



export const PrimarySubscription = () => (
    <>
        <Big />
        <Primary />
    </>
)

export const SecondarySubscription = () => (
    <>
        <Medium />
        <Secondary />
    </>
)

export const SuccessSubscription = () => (
    <>
        <Big />
        <Success />
    </>
)

export const ErrorSubscription = () => (
    <>
        <Small />
        <Error />
    </>
)