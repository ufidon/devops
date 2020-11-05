set BCKDIR="C:\Users\Administrator\Documents\lab09\backup"
cd %BCKDIR%

set _date=%DATE:/=-%

copy C:\Windows\System32\winevt\Logs\*security* .

"c:\Program Files\7-Zip\7z" a -t7z -mx9 -sdel  "backup%_date%.7z" *.evtx