# its352
online materials and references

## Operating system recovery

**1. Description**

Popular operating systems such as Ubuntu and Windows can be recovered with many methods described in the following table revised from [Recovery options in Windows 10](https://support.microsoft.com/en-us/help/12415/windows-10-recovery-options).  

| Problem	| Recovery options |
| --------- | ---------------- |
| Your PC isn't working well and you recently installed an update. |	Remove an installed  update |
| Your PC isn’t working well and it’s been a while since you installed an app, driver, or update. |	Reset your PC |
| Your PC won't start, you haven't created a recovery drive, and resetting your PC didn't work. |	Use installation media to reinstall the operating system |
| Your PC won't start and you haven't created a recovery drive.	| Use installation media to restore your PC |
| Your PC won't start and you've created a recovery drive. |	Use a recovery drive to restore or recover your PC |
| You want to reinstall your previous operating system. | Go back to your previous-version operating system |
| Your PC isn't working well and you recently installed an app. | Restore from a system restore point |



**2. Task**

Choose **only one set** out of the following two sets:

* _Linux set_
  1. (20%) Create a virtual machine in VirtualBox , then install Ubuntu Mate (Minimal mode to save time) in this VM.
  2. (30%) [Backup Your System](https://help.ubuntu.com/community/BackupYourSystem) using [Simple Backup Suite](https://help.ubuntu.com/community/BackupYourSystem/SimpleBackupSuite) or [Systemback](https://vitux.com/how-to-restore-your-ubuntu-linux-system-to-its-previous-state/) 
     1. Create a restore point A
     2. Install a software B
     3. Restore the system to the restore point A, check the software B is gone
  3. (40%) Create a boot to restore Linux following [How to Run Any Linux Distribution Directly from Hard Disk in Ubuntu Using Grub Menu](https://www.tecmint.com/run-linux-live-images-from-hard-disk-in-linux/)
* _Windows set_
  1. (20%) Create a virtual machine in VirtualBox , then install Windows 10 or Windows server in this VM.
  2. (30%) [Choose Restore from a system restore point from Recovery options in Windows 10](https://support.microsoft.com/en-us/help/12415/windows-10-recovery-options)
     1. Create a restore point A
     2. Install a software B
     3. Restore the system to the restore point A, check the software B is gone
  3. (40%) Create a boot to restore Windows following [How to Easily Reset a Computer Back to a Clean State Each Time It Boots](https://www.howtogeek.com/166205/how-to-easily-reset-a-computer-back-to-a-clean-state-each-time-it-boots/)

**3. (10%) Review questions**
* Describe the pros and cons of the six recovery options in the table above.
* From the table above, choose two recovery options for your personal computer disaster recovery and planning, then state the reason why  you choose these two options.
* What is your plan using those two recovery options?

**4. Report**

Write a report about the process you complete the tasks, 
* key screen snapshots are needed as evidences.

**5. Demo video**
* [Windows recovery](https://youtu.be/QFJiUPyBk84)

**6. References**
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
* [VirtualBox](https://www.virtualbox.org/)