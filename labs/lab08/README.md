# its352
online materials and references

## Data backup and restore

**1. Description**

As an IT professional, protecting company data is one core responsibility:
* deciding what data to be protected
* choosing and deploying data backup tools
* designing, implementing and running data backup and restore plans

There are many data backup and restore software as those listed on Wikipedia:
* [List of backup software](https://en.wikipedia.org/wiki/List_of_backup_software)

Before choosing a backup software, comparison on candidates is usually needed as this:
* [Comparison of backup software](https://en.wikipedia.org/wiki/Comparison_of_backup_software)

In this lab, compare the following three open-source data backup software, 
* [Dar](https://en.wikipedia.org/wiki/Dar_(disk_archiver))
* [Duplicati](https://en.wikipedia.org/wiki/Duplicati)
* [Bacula](https://en.wikipedia.org/wiki/Bacula)

draw your conclusion and choose one for your personal data backup.

**2. Task**

1. (10%) Install your chosen backup software on a Windows or Mac or Linux machine
2. (10%) Create a file folder for testing data backup and recovery. Name the file folder as "MyData", it contains:
   1. subfolder "Documents", in side which put a Word document, a text file, a PDF file
   2. subfolder "Image", in side which put 2 image files
   3. subfolder "Programs", in side which put 2 executable files
3. (25%) Backup MyData to Google drive
4. (25%) Delete the local MyData, then recover it from Google drive

**3. (30%) Review questions**
* (12%) Describe the pros and cons of the three backup software: Dar, Duplicati and Bacula.
* (3%) Choose one for your personal computer disaster recovery and planning, then state the reason why you choose that.
* (15%, 3% for each sub question) What is your plan using the chosen backup software for your personal data backup and recovery? Answer the 5 questions listed in [Backup Your System](https://help.ubuntu.com/community/BackupYourSystem):
  1. Why? - Why are you protecting yourself against disaster? Does it matter if you lose data? What losses will you suffer ($$$)?
  2. What? - What are you going to backup? Your entire hard drive or just some of the data?
  3. When? - When is the best time to backup your system? How often will you perform a backup? When will you use full backups and incremental backups.
  4. Where? - Where will the backups be stored? On-site? Off-Site? Cloud?
  5. Medium? - Attached storage (usb stick, usb hard drive, tape drive), backup server? 

**4. Report**

Write a report about the process you complete the tasks, 
* key screen snapshots are needed as evidences.

**5. Demo video**


**6. References**
* [List of backup software](https://en.wikipedia.org/wiki/List_of_backup_software)
* [Comparison of backup software](https://en.wikipedia.org/wiki/Comparison_of_backup_software)
* [Dar](https://en.wikipedia.org/wiki/Dar_(disk_archiver))
  * [dar](http://dar.linux.free.fr/)
  * [dargui](https://dargui.sourceforge.io/)
  * [dar's presentation](http://dar.linux.free.fr/doc/presentation.html)
  * [dar's features](http://dar.linux.free.fr/doc/Features.html)
* [Duplicati](https://en.wikipedia.org/wiki/Duplicati)
  * [duplicati](https://www.duplicati.com/)
* [Bacula](https://en.wikipedia.org/wiki/Bacula)
  * [bacula](https://www.bacula.org/)
  * [manual](https://www.bacula.org/documentation/documentation/)
    * [Community Installation Guide](https://blog.bacula.org/whitepapers/CommunityInstallationGuide.pdf)
  * [bacula on Ubuntu server](https://ubuntu.com/server/docs/backups-bacula)
    * [Install Bacula Backup Server on Ubuntu 20.04](https://www.howtoforge.com/install-bacula-backup-server-on-ubuntu-2004/)
    * [Introduction to Bacula, How to install, configure, backup and restore](https://www.labeightyfour.com/2019/04/08/introduction-to-bacula-how-to-install-configure-backup-and-restore/)
    * [How to Backup Ubuntu Server 20.04 with Bacula](https://serverspace.us/support/help/backup-ubuntu-server-20-04-with-bacula/)
  * [Bacula Windows Client Install and configuration](https://www.ithierarchy.com/ITH/Bacula/BaculaWindowsClient)
    * [ Virtual Server: How to install and configure backups (Bacula Enterprise) on a Windows Server ](https://www.hawaii.edu/askus/1716)
    * [Adding a Windows host to our Bacula setup.](https://www.labeightyfour.com/2019/04/14/adding-a-windows-host-to-our-bacula-backup-configuration/)
* [Google drive](https://www.google.com/intl/en_zm/drive/download/)