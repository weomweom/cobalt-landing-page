function Arrow() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="var(--main-text-color)" className="w-10 h-10 p-3 rounded-full bg-gray-200/10 transition duration-300 hover:stroke-[--accent-text-color] hover:bg-gray-200/15">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
    );
}

export default Arrow;