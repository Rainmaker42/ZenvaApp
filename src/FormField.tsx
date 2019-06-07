import React from "react";

interface Props {
    labelText: string;
    children?: React.ReactNode;
    id: string;
}

export const FormField: React.FC<Props> = (props: Props) => (
    <div className="create_field" id={props.id}>
        <label>{props.labelText}</label>
        <br />
        <>{props.children}</>
    </div>
);