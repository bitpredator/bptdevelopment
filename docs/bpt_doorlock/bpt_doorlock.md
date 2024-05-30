# bpt_doorlock

Source code: https://github.com/bitpredator/bpt_doorlock

A door management resource that can be used standalone or alongside qb-core, and es_extended.

### Install all resource dependencies.
- [oxmysql](https://github.com/overextended/oxmysql/releases)
- [ox_lib](https://github.com/overextended/ox_lib/releases)

### Download a [release](https://github.com/bitpredator/bpt_doorlock/releases) or build the source code.

```bash
git clone https://github.com/bitpredator/bpt_doorlock.git
cd bpt_doorlock/web
pnpm i
pnpm build
```

## Opening the UI

If you have installed and started the resource, you can use `/doorlock` to open the UI.

- If the cursor is displayed but not the UI then you have not built it.
- You may not be authorised to use the command.

  - Enter `test_ace player.1 command.doorlock` in the server console (replace 1 with your server id).

## Convert doors

Door configuration files written for nui_doorlock (and its fork, qb-doorlock) can be automatically added to your MySQL database.

- Any files with the `.lua` extension placed in the `bpt_doorlock/convert` directory will be read on resource start.
- If the directory doesn't exist, you can create it.
- Conversion cannot be guaranteed, especially if the config was not written for nui_doorlock.

## Adding new native audio

A guide can be found [here](https://forum.cfx.re/t/how-to-make-a-simplesound-using-native-audio/5156001) for adding new native audio.