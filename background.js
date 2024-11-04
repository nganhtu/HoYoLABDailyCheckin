'use strict';

const TIMEOUT = 1852;

const GAMES = [
    {
        name: "Honkai Impact 3",
        url: "https://sg-public-api.hoyolab.com/event/mani/sign",
        actId: "e202110291205111"
    },
    {
        name: "Genshin Impact",
        url: "https://sg-hk4e-api.hoyolab.com/event/sol/sign",
        actId: "e202102251931481"
    },
    {
        name: "Honkai: Star Rail",
        url: "https://sg-public-api.hoyolab.com/event/luna/os/sign",
        actId: "e202303301540311"
    },
    {
        name: "Zenless Zone Zero",
        url: "https://sg-public-api.hoyolab.com/event/luna/zzz/os/sign",
        actId: "e202406031448091",
        customHeaders: {
            'x-rpc-signgame': 'zzz'
        }
    }
];

const DEFAULT_HEADERS = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'x-rpc-app_version': '2.34.1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'x-rpc-client_type': '4',
    'Referer': 'https://act.hoyolab.com/',
    'Origin': 'https://act.hoyolab.com',
};

const checkIn = async (game) => {
    try {
        const response = await fetch(game.url, {
            method: "POST",
            body: JSON.stringify({ act_id: game.actId }),
            headers: {
                ...DEFAULT_HEADERS,
                ...game.customHeaders
            }
        });
        console.log(await response.text());
    } catch (e) {
        console.error(`Check-in ${game.name} error: ${e.message}`);
        setTimeout(onload, TIMEOUT);
    }
};

const onload = async () => {
    for (const game of GAMES) {
        await checkIn(game);
    }
};

chrome.runtime.onStartup.addListener(() => {
    setTimeout(onload, TIMEOUT);
});
