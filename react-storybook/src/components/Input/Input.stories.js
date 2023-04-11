import Input from "./Input";
import "./Input.css"
import "../Center/Center"
import Center from "../Center/Center";


export default {
    title: "Form/Input",
    component: Input
}

export const Small = () => <Center><Input size={"small"} placeholder="Small size"/></Center>
export const Medium = () => <Center><Input size={"medium"} placeholder="Medium size"/></Center>
export const Big = () => <Center><Input size={"big"} placeholder="Big size"/></Center>