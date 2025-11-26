import React, { createContext, useState, useContext, useEffect } from 'react';

const ContentContext = createContext();

export const useContent = () => useContext(ContentContext);

const initialContent = {
    home: {
        hero: {
            title: "Support a Causes you care about",
            subtitle: "Inspiration",
            buttonText: "Join With Us"
        },
        reason: {
            title: "Reason of Helping",
            description: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software."
        }
    },
    about: {
        title: "About Us",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
};

export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState(initialContent);

    useEffect(() => {
        const storedContent = localStorage.getItem('siteContent');
        if (storedContent) {
            setContent(JSON.parse(storedContent));
        }
    }, []);

    const updateContent = (section, key, value) => {
        setContent(prevContent => {
            const newContent = {
                ...prevContent,
                [section]: {
                    ...prevContent[section],
                    [key]: value
                }
            };
            localStorage.setItem('siteContent', JSON.stringify(newContent));
            return newContent;
        });
    };

    const updateNestedContent = (section, subsection, key, value) => {
        setContent(prevContent => {
            const newContent = {
                ...prevContent,
                [section]: {
                    ...prevContent[section],
                    [subsection]: {
                        ...prevContent[section][subsection],
                        [key]: value
                    }
                }
            };
            localStorage.setItem('siteContent', JSON.stringify(newContent));
            return newContent;
        });
    }

    return (
        <ContentContext.Provider value={{ content, updateContent, updateNestedContent }}>
            {children}
        </ContentContext.Provider>
    );
};
