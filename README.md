# TDE 5 Drag Ruler Integration (Das Schwarze Auge)

A FoundryVTT module that adds a speed provider to Drag Ruler for TDE.

## Details

How Drag Ruler functions depends on the type of actor.

Correct attributes will be used for PC and NPC. 
Sprinting for action is indicated as second threshold (speed * 2) 

## Limitations

This has been tested using the hotfix fork by Traumi:
https://github.com/Traumi/foundryvtt-drag-ruler
It is unlikely that another update is required for the final official release.

Does not work nicely for any token that has multiple movement types. 
For example, birds that could fly or walk. Only the configured speed in the sheet is used.
