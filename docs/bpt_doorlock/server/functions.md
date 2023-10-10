# Functions

Gets data for a door with the given id, matching the id for the database entry.

## getDoor

```lua
exports.bpt_doorlock:getDoor(doorId)
```

Gets data for a door with the given `id`, matching the id for the database entry.

- id: `number`

Return:

- door: `table`

## getDoorFromName

```lua
exports.bpt_doorlock:getDoorFromName(name)
```

Gets data for a door with the given `name`, matching the name for the database entry.

- name: `string`

Return:

- door: `table`

## editDoor

```lua
exports.bpt_doorlock:editDoor(doorId, data)
```

Edit configuration for the given doorId.

- doorId: `number`
- data: `table`

### setDoorState

```lua
exports.bpt_doorlock:setDoorState(doorId, state)
```

Sets a door with the given doorId as locked if state is `true` or `1`.

- doorId: `number`
- state: `0` or `1` or `boolean`