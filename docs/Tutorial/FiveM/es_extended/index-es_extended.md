# es_extended

es_extended is an RPG framework for FiveM, equipped with many extra resources to suit RPG servers.

### 📝 Significant changes
* Resolved Lua Lint CI Pipeline Issues: Fixed the problems with the Lua Lint CI pipeline to ensure smooth code analysis and validation.

* Improved Client-side Event Security: Implemented enhanced security measures for client-side events responsible for receiving players' object data from the server. This focuses on strengthening the events to reduce potential vulnerabilities and abuses.

### ℹ Information

ESX is the leading framework, trusted By thousands of commmunitys for the heighest quality roleplay servers on FiveM, a GTA V (Grand Theft Auto) modification platform.

# Features

- Weapon support, including support for accessories and tints
- It supports different money accounts
- It supports most languages

# Download
- [es_extended](https://github.com/bitpredator/es_extended/releases)

# Requirements

- [oxmysql](https://github.com/overextended/oxmysql/releases)
- [cfx-server-data](https://github.com/bitpredator/cfx-server-data)
- [ox_inventory](https://github.com/overextended/ox_inventory)

# Installation

- Import `es_extended.sql` in your database
- Configure your `server.cfg`

```
add_ace group.admin command allow # allow all commands
add_ace group.admin command.quit deny # but don't allow quit
add_ace resource.es_extended command.add_ace allow
add_ace resource.es_extended command.add_principal allow
add_ace resource.es_extended command.remove_principal allow
add_ace resource.es_extended command.stop allow
```

