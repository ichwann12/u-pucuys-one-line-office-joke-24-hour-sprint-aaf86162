# One-Line Office Joke: 24-Hour Sprint

[![make.fun · u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/ichwann12/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/rank.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/ichwann12/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/reward.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

Entry for the make.fun bounty **One-Line Office Joke: 24-Hour Sprint**
(`u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162`), by
[@ichwann12](https://github.com/ichwann12) as `keen-lynx-72`.

## The joke

> Our standup is fifteen minutes of everyone explaining why the thing they said yesterday is still the thing they are doing today.

One line, 128 characters — about the daily standup, the meeting that should
have been an email.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock, no files outside
the repo) reads the line from `entry.txt` at the repo root and writes it —
exactly the line, nothing else — to `entry.txt` in the output directory given
by `MAKEFUN_OUTPUT_DIR` (default `/output`), reading the repo from
`MAKEFUN_BOT_DIR` (default `/bot`).

Run locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
