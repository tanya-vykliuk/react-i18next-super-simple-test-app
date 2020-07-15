import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = props => {
    const { t, i18n } = useTranslation();

    const changeLanguage = event => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div onChange={changeLanguage}>
            <input
                type="radio"
                value="en"
                name="language"
                checked={i18n.language === 'en'}
            />
            English
            <input
                type="radio"
                value="ua"
                name="language"
                checked={i18n.language === 'uk'}
            />
            Ukrainian
        </div>
    );
};

export default LanguageSelector;
