
const DisabledClassesButton = () => {
    return (
        <button className="rounded-full bg-gray-400  w-10 h-10 flex ml-auto transition duration-300" disabled >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-current m-auto">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        </button>
    );
};

export default DisabledClassesButton;