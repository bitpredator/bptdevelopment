---
sidebar_position: 2
---
# Empiretown installation

This is the official installation guide for Empiretown, Framework for FiveM roleplay servers

## Initial procedures
- make sure to register a free licence key at [Cfx.re Keymaster](https://keymaster.fivem.net/)
- When asked for an IP use the Public IPv4 IP of the server

## STEP 1)
Now you are ready to download the server you can choose between 2 versions: "main", which will be updated periodically, or you can download the latest public version.
Recommended "main" version.
- [MAIN] https://github.com/bitpredator/empiretown.git
- [STABLE] https://github.com/bitpredator/empiretown/releases

## STEP 2)
Using WinRAR or 7Zip or similar, extract the empiretown folder inside the archive.

## STEP 3)
Download the Linux or Windows artifact files depending on your device (remember to download the latest version). Create a folder inside empiretown with the name "server" and insert the artifacts you just downloaded.
- [Windows Artifact] https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/
- [Linux Artifact] https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/

## STEP 4)
For the correct start of the server you will also need to download "cfx-server-data", these files must be inserted in the path Empiretown/resources
- [cfx-server-data] https://github.com/bitpredator/cfx-server-data

## STEP 5)
Upload the sql file(database) in HeidiSQL. remember to start XAMPP and click on start MySQL.
You will find the database in empiretown/server-data/[SQL]

## STEP 6)
Use the "start.bat" file in "server-data" to start the server correctly (if you are on windows platform).
Remember that Xampp will need to be started

## STEP 7) 
Now just double-click on start.bat to start your server

## NOTES
If you have encountered a problem or need assistance, open a new request 
[NEW ISSUE] https://github.com/bitpredator/empiretown/issues