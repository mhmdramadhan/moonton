import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default forwardRef(function TextInput(
    {
        type = PropTypes.oneOf(["text", "email", "password", "number", "file"]),
        className = PropTypes.string,
        variant = PropTypes.string,
        isFocused = PropTypes.bool,
        isError = PropTypes.bool,
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
