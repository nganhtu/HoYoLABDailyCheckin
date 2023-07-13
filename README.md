# HoYoLAB Daily Check-in

A minimal Chrome extension automatically check-in to HoYoLAB to claim rewards for Honkai Impact 3rd, Genshin Impact, and Honkai: Star Rail.

**Update:** Since miHoYo may add a CAPTCHA to the check-in process, this extension will **not** work on the days when CAPTCHA is required. Presently, the only game that *may* require CAPTCHA completion at check-in is Genshin Impact.

## Requirements

This extension only works on Chromium-based browsers.

## How to Use

1. Clone this repository, or download ZIP and then extract it.
2. Sign in to [HoYoLAB](https://www.hoyolab.com/) if you haven't done so on this browser within a year.
3. On your browser, go to `Manage extensions`; or go to `chrome://extensions/`.
4. Enable `Developer Mode`.
5. Choose `Load unpacked`, and then choose the folder you got after step 1.

All steps above are one-time processes. After that, you need to start your browser at least once per day (UTC+8) to claim HoYoLAB Daily Check-in rewards.

This extension is loaded unpacked, so it will **not** be synced to your Google account. That means if you want to use this extension on another PC, you'll need to do each step manually again. In addition, you need to stay signed in to HoYoLAB by signing in at least once per year.

## Permissions

Every time you start Chrome, this extension sends a [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) request to HoYoLAB's public check-in API for each game. Its body contains only one property, `act_id`, which is only game-dependent and is the same for all accounts. Therefore:

1. It doesn't need to know any of your sensitive data.
2. You need to sign in to [HoYoLAB](https://www.hoyolab.com/) first.

## Assets Sources

Favicon: [HoYoLAB.png](https://genshin-impact.fandom.com/vi/wiki/HoYoLAB?file=HoYoLAB.png).
