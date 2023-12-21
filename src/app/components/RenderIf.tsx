import { FC } from "react";

interface IRenderIf {
    children: JSX.Element;
    isTrue: boolean;
}

const RenderIf: FC<IRenderIf> = ({ isTrue, children }) => {
    return isTrue ? children : null;
};

export default RenderIf;