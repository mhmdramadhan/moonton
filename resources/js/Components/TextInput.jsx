import { forwardRef, useEffect, useRef } from "react";
import PropType from "prop-types";

export default forwardRef(function TextInput(
    {
        type = PropType.oneOf(["text", "email", "password", "number", "file"]),
        className = PropType.string,
        variant = PropType.string,
        isFocused = PropType.bool,
        isError = PropType.bool,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none ${
                isError && "input-error"
            } input-${variant} ${className}`}
            ref={input}
        />
    );
});
