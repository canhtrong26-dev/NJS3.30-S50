'use client';

export default function LanguageSwitcher() {
    const changeLanguage = (lang) => {
        document.cookie = `preferredLanguage=${lang}; path=/`;
        window.location.pathname = `/${lang}`;
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
        </div>
    );
}