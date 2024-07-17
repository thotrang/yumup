
export const apiUrl = 'https://yumup-api.onrender.com/api/';
// export const apiUrl = 'http://localhost:1337/api/';


export const getChannels = async () => {
    const res = await fetch(apiUrl + `channels?populate=*`, {
        cache: "no-cache",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};

export const getHeadlines = async () => {
    const res = await fetch(apiUrl + `headlines?populate=*`, {
        cache: "no-cache",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};

export const getSettingHome = async () => {
    const settings = await fetch(
        apiUrl + `settings?populate=*&filters[page]=homepage&sort[0]=sort:asc`, {
            cache: "no-cache",
        }
    );
    if (!settings.ok) {
        throw new Error("Failed to fetch data");
    }
    return settings.json();
}
export const getSettingAboutUs = async () => {
    const settings = await fetch(
        apiUrl + `settings?populate=*&filters[page]=about&sort[0]=sort:asc`, {
            cache: "no-cache",
        }
    );
    if (!settings.ok) {
        throw new Error("Failed to fetch data");
    }
    return settings.json();
}

