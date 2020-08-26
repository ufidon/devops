# its352
online materials and references

## lab01: Build the environment
* Create a virtual machine with Ubuntu LTS
* Setup a virtual machine with Windows server (NOT REQUIRED)
* *Rule of thumb to choose software: always choose the lastest and STABLE version*

## NAT network and VM settings
* NAT network settings:
  * Disable IPv6
  * Network ID: 10.20.30.0
* VM settings:
  * *2GB memory/200GB disk*
  * Connect to the NAT network
  * It is a best practice to set VM's IP address statically
  * Enable network promiscuous mode


## Install Ubuntu Mate LTS
Follow the steps below to setup Ubuntu Mate LTS in a VirtualBox VM:

1. Download [Ubuntu MATE LTS](https://ubuntu-mate.org/) from its official website --- [https://ubuntu-mate.org](https://ubuntu-mate.org). Choose the  64-bit PC version ubuntu-mate LTS.
2. Create a VM with *2GB memory/200GB disk* in VirtualBox and install the downloaded Ubuntu


After installation, *make sure you can access Internet*, update and upgrade Ubuntu, then install the following tools. Open a terminal window, run the following commands:

```bash
sudo apt update
sudo apt upgrade
sudo apt install p7zip-full build-essential gcc perl cmake automake curl git
```

## Install Windows server
*NOT REQUIRED*

If you host operating system is Windows, you don't need to install Windows server.

* Download [Windows Server](https://www.microsoft.com/en-us/windows-server)
* Create a Virtual Machine with *2GB memory/200GB disk* in VirtualBox for installing this Windows server
* Install the Windows Server for a free trial


## References:

* [Ubuntu Mate](https://ubuntu-mate.org/)
* [SDKMan](https://sdkman.io/)
* [How to completely uninstall Java?](https://askubuntu.com/questions/84483/how-to-completely-uninstall-java)
* [Windows Server](https://www.microsoft.com/en-us/windows-server)
* [VirtualBox.](https://www.virtualbox.org/)
