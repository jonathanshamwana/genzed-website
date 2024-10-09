import React, { useEffect, useState } from 'react';

const Typewriter = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return <p className="typewriter">{displayedText}</p>;
};

export default Typewriter;
