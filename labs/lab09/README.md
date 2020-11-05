# its352
online materials and references

## file archiver

**1. Description**

Backup software employ file archivers or compressors under their hoods. In this lab, we are going to investigate a typical file archiver [7-zip](https://www.7-zip.org/) and a typical software packer [upx](https://upx.github.io/) (executable file archivers, optional).

**2. Task**

*Task 1: Benchmark 7z*

1. (2%) Download the latest [MikeOs](http://mikeos.sourceforge.net/) or [KolibriOs](https://kolibrios.org/) or [MenuetOS](http://menuetos.net/) released in zip file, then extracted it into a folder F.
2. (18%) Use 7-Zip GUI or command line to apply all possible compression methods (compression algorithms) on to the folder F above, in archive format 7z and zip separately. Draw a table to compare all compressions. Use the highest compression level for each. Keep all other options as default. You table should contain 9 possibilities (2% for each):
   1. For 7z, the applicable compression methods include: LZMA, LZMA2, PPMd, BZip2
   2. For zip, the applicable compression methods include: Deflate, Defalate64, LZMA, PPMd, BZip2

For each possibility, list the compressed file size, [compression ratio and space saving](https://en.wikipedia.org/wiki/Data_compression_ratio).

*Task 2: Compress then encrypt vs. Encrypt then compress*

1. (4%) Download and install the file encryption tool [AESCrypt](https://www.aescrypt.com/), then create a tar T for the folder F above with 7-zip. 
2. (18%) *Compress then encrypt*: Use 7-Zip GUI or command line to apply all possible compression methods (compression algorithms) on to the folder F above in archive format 7z and zip separately, using the highest compression level for each and keeping all other options as default. Then encrypt the compressed file with AESCrypt. Draw a table to compare all final encrypted files. You table should contain 9 possibilities (2% for each):
   1. For 7z, the applicable compression methods include: LZMA, LZMA2, PPMd, BZip2
   2. For zip, the applicable compression methods include: Deflate, Defalate64, LZMA, PPMd, BZip2
3. (18%) *Encrypt then compress*: Use AESCrypt to encrypt the tar file T above, then use 7-Zip GUI or command line to apply all possible compression methods (compression algorithms) on to the encrypted file in archive format 7z and zip separately, using the highest compression level for each and keeping all other options as default.  Draw a table to compare all final compressed files. You table should contain 9 possibilities (2% for each):
   1. For 7z, the applicable compression methods include: LZMA, LZMA2, PPMd, BZip2
   2. For zip, the applicable compression methods include: Deflate, Defalate64, LZMA, PPMd, BZip2

For each final output, list the final file size, [compression ratio and space saving](https://en.wikipedia.org/wiki/Data_compression_ratio).


*Task 3: Backup system logs periodically*
1. (15%) Create a batch file to 
   1. copy all evtx files whose name contains security to a backup folder
   2. compress these evtx files then delete them using 7-zip
2. (15%) Setup a schedule task do the backup (copy then compress) daily


**3. (10%) Review questions**
In task 2, which method of *Compress then encrypt and Encrypt then compress*, has higher compression ratio and why?

**4. Report**

Write a report about the process you complete the tasks, 
* key screen snapshots are needed as evidences.

**5. Demo video**
* [File Archiver And Task Schedule](https://youtu.be/cf1dqN3jIgE)

**6. References**
* [File archiver](https://en.wikipedia.org/wiki/File_archiver)
  * [Comparison of file archivers](https://en.wikipedia.org/wiki/Comparison_of_file_archivers)
    * [Self-extracting archive](https://en.wikipedia.org/wiki/Self-extracting_archive)
    * [7-zip](https://www.7-zip.org/)
      * [documentation](https://documentation.help/7-Zip/)
      * [7 Zip Command Line Examples](https://www.dotnetperls.com/7-zip-examples)
      * [Windows command-line: create a file with the current date in its name](https://superuser.com/questions/47885/windows-command-line-create-a-file-with-the-current-date-in-its-name)
  * [Lossless compression](https://en.wikipedia.org/wiki/Lossless_compression)
  * [Data compression ratio](https://en.wikipedia.org/wiki/Data_compression_ratio)
* [Executable compression](https://en.wikipedia.org/wiki/Executable_compression)
  * [fupx](https://www.pazera-software.com/products/free-upx/)
  * [upx](https://upx.github.io/)
* [Job scheduler](https://en.wikipedia.org/wiki/Job_scheduler)
  * [Cron](https://en.wikipedia.org/wiki/Cron)
  * [Windows Task Scheduler](https://en.wikipedia.org/wiki/Windows_Task_Scheduler)
    * [How to create an automated task using Task Scheduler on Windows 10?](https://www.windowscentral.com/how-create-automated-task-using-task-scheduler-windows-10)
* [Backup rotation scheme](https://en.wikipedia.org/wiki/Backup_rotation_scheme)
* [Generating Windows 10 Notifications With PowerShell](https://den.dev/blog/powershell-windows-notification/)
  * [Creating a Balloon Tip Notification Using PowerShell](https://mcpmag.com/articles/2017/09/07/creating-a-balloon-tip-notification-using-powershell.aspx)
    * [code](https://github.com/proxb/PowerShell_Scripts/blob/master/Invoke-BalloonTip.ps1)
* [Operating system service management](https://en.wikipedia.org/wiki/Operating_system_service_management)
  * [Windows service](https://en.wikipedia.org/wiki/Windows_service)
    * [Service Control Manager](https://en.wikipedia.org/wiki/Service_Control_Manager)
    * [Writing Windows Services in PowerShell](https://docs.microsoft.com/en-us/archive/msdn-magazine/2016/may/windows-powershell-writing-windows-services-in-powershell)
    * [Svchost.exe](https://en.wikipedia.org/wiki/Svchost.exe)
  * [Systemd](https://en.wikipedia.org/wiki/Systemd)
    * [How to create systemd service unit in Linux](https://linuxconfig.org/how-to-create-systemd-service-unit-in-linux)
    * [Creating a Linux service with systemd](https://medium.com/@benmorel/creating-a-linux-service-with-systemd-611b5c8b91d6)
* [AESCrypt](https://www.aescrypt.com/)
  * [code](https://github.com/paulej/AESCrypt)