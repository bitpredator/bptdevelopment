# Events

## Handlers

These events **should not** be triggered by any other scripts.

### bpt_doorlock:stateChanged

Triggered when a doors state is updated.

```lua
AddEventHandler('bpt_doorlock:stateChanged', function(source, doorId, state, usedItem) end)
```

- source: `number` or `nil`
- doorId: `number`
- state: `boolean`
- usedItem: `string` or `false` or `nil`