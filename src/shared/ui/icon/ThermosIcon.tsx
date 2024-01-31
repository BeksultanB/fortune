const ThermosIcon = ({ arcColor = "rgba(5, 7, 13, 0.10)", ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} width="110" height="111" viewBox="0 0 110 111" fill="none">
            <rect y="0.518616" width="110" height="110" rx="55" fill={arcColor} />
            <path d="M71 66.6667V74.6667C71 79.0667 67.4 82.6667 63 82.6667H47C42.6 82.6667 39 79.0667 39 74.6667V63.9733C39 62.5067 40.2 61.3067 41.6933 61.3067L49.3733 61.3333C51.2133 61.3333 53.0267 61.7333 54.7067 62.5333C56.5467 63.3867 58.4933 64 60.5467 64H68.3333C69.8 64 71 65.2 71 66.6667Z" fill="white" />
            <path d="M69.4267 49.0933L63.7733 43.44C63.2667 42.9333 63 42.2667 63 41.5733V37.0933C64.5467 36.56 65.6667 35.0667 65.6667 33.3333C65.6667 31.12 63.88 29.3333 61.6667 29.3333H48.3333C46.12 29.3333 44.3333 31.12 44.3333 33.3333C44.3333 35.0667 45.4533 36.56 47 37.0933V41.5733C47 42.2667 46.7333 42.9333 46.2267 43.44L40.5733 49.0933C39.72 49.9467 39 51.68 39 52.88V54.6133C39 56.08 40.1733 57.28 41.64 57.28L49.4 57.3333C52.0133 57.3333 54.6533 57.9733 57 59.2C58.12 59.7867 59.4 60 60.6533 60H68.3333C69.8 60 71 58.8 71 57.3333V52.88C71 51.68 70.28 49.9467 69.4267 49.0933Z" fill="white" />
        </svg>
    )
}

export default ThermosIcon