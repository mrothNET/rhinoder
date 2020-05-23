# Rhinoder

This program reloads a deno program automatically when a file in the current working directory is created, deleted or modified.

> This is a slightly modified version of the original [`rhinoder`](https://github.com/Caesar2011/rhinoder) package and
> this repository should cease to exists once all changes are incorporated into the original package.

## Install

Install as a shell command using the `deno` mechanism.

```bash
$# deno install --allow-run --allow-read https://github.com/mrothNET/rhinoder/raw/master/rhinoder.ts
```

## Usage

The following code runs `deno --allow-net example.ts` which is located in `/some/work/dir/example.ts` on start and whenever a file in the folder `/some/work/dir` changes.


```bash
/some/work/dir$ rhinoder --allow-net example.ts
```

## Thanks to

Thanks to [Caesar2011](https://github.com/Caesar2011) for the original package and to [samuelgozi](https://github.com/samuelgozi) who posted the base for this code in [this GitHub issue](https://github.com/denoland/deno/issues/4830).
