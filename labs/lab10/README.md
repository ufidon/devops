# its352
online materials and references

## System clone and restore with Live CD/DVD/USB

**1. Description**

In some severe incidents, the operating system can not bootup, any backup and restore approaches depending on the normal operation of operating system become invalid. In this situation, available recover methods could be:

* repair the operating system with OS installation DVD/USB 
* reinstall the operating system with OS installation DVD/USB 
* repair the operating system with rescue or system administration/maintenance DVD/USB
* restore the operating system with backup images by the backup/restore live DVD/USB
  
Usually, if the system cannot be repaired, use the following best practices:
* image the corrupted disk, then use data recovery techniques to recover data as much as possible. How to recover data will be practiced in the *data carving and recovery lab*.
* reinstall or restore the operating system

**2. Task**
1. (2%) Download a installation media  of any 64 bit full-fledged Linux operating system installation ISO such as [Lubuntu](https://lubuntu.me/).
2. (2%) Download [64 bit CloneZilla ISO](https://clonezilla.org/)
3. (4%) Create a Virtual machine for the chosen operating system with configuration of 2GB RAM/2 X 10GB Hard drives. One hard drive for installing the OS, the other one for disk backup. It is up to you to use VirtualBox or VMWare Workstation Player.
4. (10%) Install the chosen operating system on the created VM.
5. (10%) Boot the VM with CloneZilla ISO, backup the OS disk to the backup disk as image file, power off the VM, remove the CloneZilla ISO from the VM optical drive.
6. (8%) Boot into the VM installed OS, delete some critical files to destroy the OS such that it cannot boot up anymore.
7. (10%) Restore the OS disk with the backup image file.
8. (2%) Boot into the restored OS to see it is recovered
9. (2%) Download [Hiren’s BootCD](https://www.hirensbootcd.org/download/)
10. (30%) Complete the following tasks with tools from Hiren’s BootCD.
    1.  (10%) Boot the VM with Hiren’s BootCD, backup the OS disk to the backup disk as image file.
    2.  (8%) Choose a disk partition tool to repartition and format the OS disk such that it cannot boot up anymore.
    3.  (10%) Restore the OS disk with the backup image files.
    4.  (2%) Boot into the restored OS to see it is recovered

**3. (20%) Review questions**
* (5%) Compare the pros and cons of CloneZilla and Hiren’s BootCD.
* (5%) What is your plan using CloneZilla for your personal computer disaster recovery?
* (10%) Design a plan of disaster recovery for a company with CloneZilla, Refer to [clonezilla-SE](https://clonezilla.org/clonezilla-SE/).

**4. Report**

Write a report about the process you complete the tasks, 
* key screen snapshots are needed as evidences.

**5. Demo video**

There are lots of demo videos on Youtube, *you may find for yourself.*

**6. References**
* Light weight open source operating systems
  * [Comparison of DOS operating systems](https://en.wikipedia.org/wiki/Comparison_of_DOS_operating_systems)
  * [Light-weight Linux distribution](https://en.wikipedia.org/wiki/Light-weight_Linux_distribution)
* _Ubuntu_
  * [Backup Your System](https://help.ubuntu.com/community/BackupYourSystem)
  * [Recovery Mode](https://wiki.ubuntu.com/RecoveryMode)
  * [LiveCd Recovery](https://help.ubuntu.com/community/LiveCdRecovery)
    * [How to create a custom Ubuntu live from scratch](https://itnext.io/how-to-create-a-custom-ubuntu-live-from-scratch-dd3b3f213f81)
    * [Live CD/USB/PXE/HD](https://gparted.org/livecd.php)
    * [unetbootin](https://unetbootin.github.io/)
    * [How can I make a live CD/DVD from my harddisk installation?](https://askubuntu.com/questions/25623/how-can-i-make-a-live-cd-dvd-from-my-harddisk-installation)
    * [Make A LiveCD/DVD/Bootable Flash From Hard disk Install](https://help.ubuntu.com/community/MakeALiveCD/DVD/BootableFlashFromHarddiskInstall)
  * [Systemback ](https://vitux.com/how-to-restore-your-ubuntu-linux-system-to-its-previous-state/)
  * [How to Run Any Linux Distribution Directly from Hard Disk in Ubuntu Using Grub Menu](https://www.tecmint.com/run-linux-live-images-from-hard-disk-in-linux/)
    * [How to Boot Linux ISO Images Directly From Your Hard Drive](https://www.howtogeek.com/196933/how-to-boot-linux-iso-images-directly-from-your-hard-drive/)
    * [Linux: Copy DVD ISO to empty hard disk / partition and boot as if it is a DVD?](https://superuser.com/questions/334187/linux-copy-dvd-iso-to-empty-hard-disk-partition-and-boot-as-if-it-is-a-dvd)
    * [Use Linux DD Command to make ISO Bootable on USB Drive](https://medium.com/@tbeach/use-unix-dd-command-to-os-bootable-on-usb-drive-6671945d95a6)
    * [Make Live ISO Boot from internal HDD partition](https://community.spiceworks.com/topic/737593-make-live-iso-boot-from-internal-hdd-partition)
    * [iso2usb](https://help.ubuntu.com/community/Installation/iso2usb)
  * [OverlayFS](https://en.wikipedia.org/wiki/OverlayFS)
    * [Ubuntu – How to use OverlayFS](https://itectec.com/ubuntu/ubuntu-how-to-use-overlayfs/)
    * [Example OverlayFS Usage](https://askubuntu.com/questions/699565/example-overlayfs-usage)
    * [Protecting the Root Filesystem on Ubuntu with Overlayroot](https://spin.atomicobject.com/2015/03/10/protecting-ubuntu-root-filesystem/)
    * [Overlay Filesystem](https://www.kernel.org/doc/html/latest/filesystems/overlayfs.html)
    * [fuse-overlayfs](https://github.com/containers/fuse-overlayfs)
    * [Can I save the working status of Ubuntu before reboot, and recover it after reboot?](https://unix.stackexchange.com/questions/498283/can-i-save-the-working-status-of-ubuntu-before-reboot-and-recover-it-after-rebo)
  * [Boot-Repair](https://help.ubuntu.com/community/Boot-Repair)
    * [How to Repair, Restore, or Reinstall Grub 2 with a Ubuntu Live CD or USB](https://howtoubuntu.org/how-to-repair-restore-reinstall-grub-2-with-a-ubuntu-live-cd)
    * [Recovering Ubuntu After Installing Windows](https://help.ubuntu.com/community/RecoveringUbuntuAfterInstallingWindows)
    * [How to Repair GRUB2 When Ubuntu Won’t Boot](https://www.howtogeek.com/114884/how-to-repair-grub2-when-ubuntu-wont-boot/)
    * [GrubEFIReinstall](https://wiki.debian.org/GrubEFIReinstall)
* _Windows_
  * [Recovery options in Windows 10](https://support.microsoft.com/en-us/help/12415/windows-10-recovery-options)
    * [Reset or reinstall Windows 10](https://support.microsoft.com/en-us/windows/reset-or-reinstall-windows-10-cd352bd8-4cb6-411a-f2f5-1814bd8d453c)
    * [How to download Windows 10 ISO file from your web browser](https://windows10.help/blogs/entry/24-how-to-download-the-latest-windows-10-iso-files-directly-using-your-web-browser/)
    * [Evaluate windows 10 enterprise](https://www.microsoft.com/en-us/evalcenter/evaluate-windows-10-enterprise)
    * [Evaluate windows server 2019](https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2019)
* [Reboot to restore software](https://en.wikipedia.org/wiki/Reboot_to_restore_software)
  * [4 Free Tools to Quickly Restore Windows on Reboot](https://www.raymond.cc/blog/reboot-windows-and-automatically-restore-to-its-original-state/)
  * [Reboot Restore Rx](https://en.wikipedia.org/wiki/Reboot_Restore_Rx)
    * [How to Easily Reset a Computer Back to a Clean State Each Time It Boots](https://www.howtogeek.com/166205/how-to-easily-reset-a-computer-back-to-a-clean-state-each-time-it-boots/)
    * [How to uninstall Reboot Restore Rx?](http://www.uninstallhelps.com/how-to-uninstall-reboot-restore-rx-by-www-horizon-datasys-com1.html)
  * [Deep Freeze](https://en.wikipedia.org/wiki/Deep_Freeze_(software))
* [List of live CDs](https://en.wikipedia.org/wiki/List_of_live_CDs)
  * [22 Bootable Antivirus Rescue CDs Download List](https://www.itechtics.com/rescue-disc-virus-scan/)
  * [Top 5 Free Rescue Discs for Your Sys Admin Toolki](https://techtalk.gfi.com/top-5-free-rescue-discs-for-your-sys-admin-toolkit/)
  * [Hiren’s BootCD](https://www.hirensbootcd.org/)
* [VirtualBox](https://www.virtualbox.org/)