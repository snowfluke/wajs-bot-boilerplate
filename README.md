# WAJS-BOT-BOILERPLATE

A boilerplate for those who wants a quick start in building a whatsapp bot via whatsapp-web.js. 

- If you're looking for REST API version, you can go here: https://github.com/snowfluke/wagate
- For dial-based bot whatsapp, visit: https://github.com/snowfluke/dial-wabot-boilerplate

## Contribution

Any features request and contribution are welcome! ^\_^

## Installation & Configuration

### Configuration

1. Make sure you clone this repo first
2. Edit `src/config/config.json` to match your use case

### Installation

1. Node.js, latest is preferable
2. yarn package manager. Install via npm with `npm i -g yarn`
3. You can go for docker for an easy setups, or if you deploy it manually you will need to install Google Chrome

#### Windows

Install Google Chrome

#### Ubuntu

On an Ubuntu server, you will need to run this command:

```bash
sudo apt-get update && sudo apt-get install -y \
    gconf-service \
    libgbm-dev \
    libasound2 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgcc1 \
    libgconf-2-4 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    ca-certificates \
    fonts-liberation \
    libappindicator1 \
    libnss3 \
    lsb-release \
    xdg-utils \
    wget
```

## Running

5. `cd` into the project directory
6. run `yarn install`
7. run `yarn build`
8. run `yarn start`
9. After that you will need to scan the QR that is printed to the terminal
10. You're basically done, or if you want to be more robust, you can use `pm2` for a better process management

## Debugging

In case a bug happen, try to delete `node_modules` folder and run `yarn install` again. You will also need to delete `.wwebjs_auth` folder as well.

## Customization

You can go to `commands` folder to look for pre-built commands. In there you can duplicate the file and work through a custom commands.

REMEMBER! That filename in `commands` folder is also the bot commands when you type your prefix + your commands.
