import PropTypes from "prop-types";
// import '../../css/button.css'

PrimaryButton.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node
};

export default function PrimaryButton({
    className = "",
    variant = "primary",
    processing,
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
