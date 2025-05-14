"use client";

import Button from "./button";

export default function ButtonPage() {
    return <Button 
        size="small"
        type="primary"
        icon="filledheart.svg"
        value="Click me"
        onClick={() => alert("Button clicked")}
    />;
}
