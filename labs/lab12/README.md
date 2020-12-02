# its352
online materials and references

## Password reset/recovery
**1. Description**

[Password recovery/cracking](https://en.wikipedia.org/wiki/Password_cracking) is the process of recovering passwords from data that has been stored in or transmitted by a computer system. A common approach (brute-force attack) is to repeatedly try guesses for the password and to check them against an available cryptographic hash of the password.

Password recovery can be exploited to 
* help users recover forgotten passwords, 
* gain unauthorized access to a system in penetration test,
* gain legal access to digital evidence, etc.

However, in many cases especially the cost for cracking a password is too high, password reset could be the only feasible method.

**2. Tasks**
1. (30%) If you don't have a Windows 10 or Windows server 2019 virtual machine, then create one. In the VM, create a test account with a login password. Now suppose the test account forgot his/her login password, referring this [demo](https://www.howtogeek.com/222262/how-to-reset-your-forgotten-password-in-windows-10/) or this [demo](https://www.howtogeek.com/howto/14369/change-or-reset-windows-password-from-a-ubuntu-live-cd/) to reset his/her password with a system installation/maintenance/rescue DVD(iso).
2. (50%) Assume the test account has encrypted some important documents with his/her login password. In this case, the login password must be recovered instead of reset/reseted. Refer to this [demo](https://samsclass.info/123/proj14/123p12winhash.htm) or this [demo](https://www.top-password.com/blog/crack-windows-password-with-john-the-ripper/) to recover/crack the login password for the test account with a password cracker. To simplify this task, you may set a simple password for this test account.

**3. (20%) Review questions**
* (5%) Compare the pros and cons of  reset passwords with system maintenance/rescue DVD and cracking passwords with password cracker.
* (5%) What is your plan of using system maintenance/rescue DVD for your personal computer password reset?
* (10%) Design a plan of password reset/recovery for a company.

**4. Report**

Write a report about the process you complete the tasks, 
* key screen snapshots are needed as evidences.

**5. Demo video**

There are lots of demo videos on Youtube, *you may find for yourself.*
A hint video is provided.
* [Password reset and recovery](https://youtu.be/i0Ht5V4-OPY)


**References**
* [How to Reset Your Forgotten Password in Windows 10?](https://www.howtogeek.com/222262/how-to-reset-your-forgotten-password-in-windows-10/)
* [Reset Windows Password with an Install Disk](https://samsclass.info/123/proj14/123p10winpass.htm)
  * [How to Reset Forgotten Windows Server 2016 Password?](https://www.tactig.com/reset-forgotten-windows-server-password/)
* [Password cracking](https://en.wikipedia.org/wiki/Password_cracking)
  * [Hashcat](https://en.wikipedia.org/wiki/Hashcat)
    * [Cracking Windows Password Hashes with Hashcat](https://samsclass.info/123/proj14/123p12winhash.htm)
    * [How To Use hashcat On CPU Only](https://scottlinux.com/2017/01/31/how-to-use-hashcat-on-cpu-only/)
      * [Do your (X86) CPU and GPU support OpenCL?](https://streamhpc.com/blog/2011-12-29/opencl-hardware-support/)
  * [Cain and Abel (software)](https://en.wikipedia.org/wiki/Cain_and_Abel_(software))
  * [Cryptanalysis](https://en.wikipedia.org/wiki/Cryptanalysis)
* [Crack me if you can](http://contest-2010.korelogic.com/)
* [10 Most Popular Password Cracking Tools](https://resources.infosecinstitute.com/topic/10-popular-password-cracking-tools/)
  * [3 Ways to Crack Windows 10 Password without Losing Data](https://www.bestwindowspasswordreset.com/crack-windows-10-password.html)
  * [John the Ripper step-by-step tutorials](https://openwall.info/wiki/john/tutorials)
    * [John the Ripper password cracker](https://www.openwall.com/john/)
    * [Johnny - GUI for John the Ripper](https://openwall.info/wiki/john/johnny)
  * [Use John the Ripper in Metasploit to Quickly Crack Windows Hashes](https://null-byte.wonderhowto.com/how-to/use-john-ripper-metasploit-quickly-crack-windows-hashes-0200322/)
