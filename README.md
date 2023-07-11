# HoYoLAB Daily Check-in

A minimal Chrome extension automatically check-in to HoYoLAB to claim rewards for Honkai Impact 3rd, Genshin Impact, and Honkai: Star Rail.

*Update: Since miHoYo may add a CAPTCHA to the check-in process, this extension doesn't always work.*

## Requirements

This extension only works with Chromium-based browsers.

## How to Use

1. Clone this repository, or download ZIP and then extract it.
2. In case you haven't done this, log in to [HoYoLAB](https://www.hoyolab.com/).
3. Go to `chrome://extensions/`.
4. Enable `Developer Mode`.
5. Choose `Load unpacked`, and then choose the folder you got after step 1.

All steps above are one-time processes. After that, you need to use Chrome everyday to claim HoYoLAB Daily Check-in rewards.

This extension is loaded unpacked, so it will **not** be synced to your Google account. That means if you want to use this extension on another PC, you'll need to do each step manually again.

## Permissions

Every time you start Chrome, this extension sends a POST request to HoYoLAB's public check-in API for each game. Therefore:

1. It doesn't need to know any of your sensitive data.
2. You need to log in to [HoYoLAB](https://www.hoyolab.com/) first.

## Assets Sources

Favicon: [HoYoLAB.png](https://genshin-impact.fandom.com/vi/wiki/HoYoLAB?file=HoYoLAB.png).
