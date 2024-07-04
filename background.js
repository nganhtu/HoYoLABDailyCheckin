'use strict';

const TIMEOUT = 1852;

chrome.runtime.onStartup.addListener(() => {
    setTimeout(onload, TIMEOUT);
});

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
        url: "https://sg-act-nap-api.hoyolab.com/event/luna/zzz/os/sign",
        actId: "e202406031448091"
    }
];

const checkIn = async (game) => {
    try {
        const response = await fetch(game.url, {
            method: "POST",
            body: JSON.stringify({ act_id: game.actId })
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
