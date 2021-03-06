# DiscordMail
The Discord to Email client, connecting the past to the future.

![Discord Mail](server/static/img/favicon.png)

- Invite: https://discordapp.com/oauth2/authorize?=&client_id=330003632298917889&scope=bot&permissions=0
- Guild: https://discord.gg/wHgdmf4
- Website: https://discordmail.com/
- GitHub: https://github.com/moustacheminer/discordmail

---

## How?
DiscordMail uses Eris and Mailgun JS to send and recieve emails, and routing emails back and forth from Discord to Mailgun. This means you can send Emails from anywhere to anyone.

## Installation

0. Have at least `Node.js 9.1.0`, `RethinkDB 2.3.6`, `npm 5.5.1` and `git`
1. `git clone`
2. `npm i`
3. Edit `config/default.json`, using `config/default.rename.json` as a template
4. Create a database in Rethink with tables: `registrations`, `emails`, `i18n`, `users` and `ratelimit`
5. Set up mailgun so that `/api/mail` is a webhook based listener for emails
6. `npm start`

## DiscordMail `2.2.1` to `3.0.0`

DiscordMail now uses a new database structure for storing registrations. Please run the `convert.js` script before upgrading to `3.0.0`

## Translations

Thinking of translating DiscordMail?

Language               | Code      | Progress       | Translator(s)
---------------------- | --------- | -------------- | --------------------------
English (GB)           | en-gb     | Main           | [@lepon01](https://github.com/lepon01) (7coil#3175)
English (USA)          | en-us     | Done           | [@lepon01](https://github.com/lepon01) (7coil#3175)
German (Germany)       | de-de     | Done           | [@Crypti-x](https://github.com/Crypti-x) (CodingGuy#9320)
English (Slang)        | en-slang  | Updated Nov. 24th, 2017 | [@iDerp](https://github.com/iDerp) (iDerp#3616)
French (France)        | fr-fr     | Updates Needed | [@iDroid27210](https://github.com/iDroid27210) (iDroid#4441), [@lepeli](https://github.com/lepeli) (Yvan#5087)
Spanish (Spain)        | es-es     | Updates Needed | [@Mdstumpfy123](https://github.com/Mdstumpfy123) (🎃 Spoopy Memes 🎃#2545)
Portuguese (Portugal)  | pt-pt     | Updates Needed | [@PillGP](https://github.com/PillGP) (PillGP#2767)
Portuguese (Brazil)    | pt-br     | Updates Needed | [@natanbc](https://github.com/natanbc) (Natan#1289)
English (Pirate)       | en-pirate | Announced      |

Translations required:

Description  | Location
------------ | ----------------------
General Text | `locales/{code}.json`

