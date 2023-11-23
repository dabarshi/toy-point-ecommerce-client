export const randomHello = () => {
    const languages = {
        english: "Hello",
        spanish: "Hola",
        french: "Bonjour",
        german: "Hallo",
        italian: "Ciao",
        russian: "Привет",
        chinese: "你好",
        japanese: "こんにちは",
        arabic: "مرحبا",
        hindi: "नमस्ते",
        MandarinChinese: "Nǐ hǎo",
        Thai: "S̄wạs̄dī",
        Swahili: "Jambo",
        HatianCreole: "Bonjou",
        Portuguese: "Olá",
        Zulu: "Sawubona",
        Japanese: "Kon’nichiwa",
        Arabic: "Marhabaan",
        Bengali: "Hyālō",
        Hmong: "Nyob zoo",
        Filipino: "Kamusta",
        Maori: "Kia ora",
        Xhosa: "Mholweni",
        Vietnamese: "xin chào",
        Korean: "annyeonghaseyo",
        Greek: "geia"
        // Add more languages and greetings as needed
    };

    const languageKeys = Object.keys(languages);
    const randomLanguage = languageKeys[Math.floor(Math.random() * languageKeys.length)];
    return languages[randomLanguage];
}