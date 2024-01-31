
const BagIcon = ({ arcColor = "rgba(5, 7, 13, 0.10)", ...props }) => {
    return (
        <svg width="110" height="111" viewBox="0 0 110 111" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect y="0.779297" width="110" height="110" rx="55" fill={arcColor} />
            <path d="M65.6668 47.3334C64.5735 47.3334 63.6668 46.4267 63.6668 45.3334V36C63.6668 33.12 61.8802 31.3334 59.0002 31.3334H51.0002C48.1202 31.3334 46.3335 33.12 46.3335 36V45.3334C46.3335 46.4267 45.4268 47.3334 44.3335 47.3334C43.2402 47.3334 42.3335 46.4267 42.3335 45.3334V36C42.3335 30.9067 45.9068 27.3334 51.0002 27.3334H59.0002C64.0935 27.3334 67.6668 30.9067 67.6668 36V45.3334C67.6668 46.4267 66.7602 47.3334 65.6668 47.3334Z" fill="white" />
            <path d="M44.3336 71.4134C43.2402 71.4134 42.3336 70.5067 42.3336 69.4134C42.3336 68.2934 43.2402 67.4134 44.3336 67.4134H75.6936C76.4936 67.4134 77.1069 66.72 77.0269 65.92L75.2136 50.7467C74.5736 45.5734 73.6669 41.3334 64.6002 41.3334H45.4002C36.3336 41.3334 35.4269 45.5734 34.8136 50.7467L32.4136 70.7467C31.6402 77.3067 33.6669 82.6667 43.0269 82.6667H66.9736C75.4002 82.6667 77.8802 78.32 77.7469 72.6667C77.7202 71.9467 77.1336 71.4134 76.4136 71.4134H44.3336Z" fill="white" />
        </svg>

    );
};

export default BagIcon;