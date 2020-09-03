# its352
online materials and references

**0. Prerequisites**

Before start this lab, please check the correct Java SDK is installed. If you installed several versions of Java SDK, make sure 11.0.8.fx-librca from Bellsoft is set to the default Java SDK as \#4 below. If you did NOT use sdkman to manage your Java SDK, please uninstall all of them first.

If NOT, it can be installed with the following commands:

A tool named [sdkman](https://sdkman.io/) can manage multiple-version Java JDK. Run the following commands to install *sdkman* first:

```bash
# 1. Install sdkman
curl -s "https://get.sdkman.io" | bash
source .sdkman/bin/sdkman-init.sh 
sdk version

# 2. Make sdkman visible
ln -s .sdkman sdkman

# 2. List all available Java SDK
sdk list java

# 3. Install the suitable versions from the list
sdk install java 11.0.8.fx-librca

# 4. If you have several versions of Java SDK, 11.0.8.fx-librca from Bellsoft needs to be set as the default
sdk default java 11.0.8.fx-librca
```


**1. Description**

[Systems management](https://en.wikipedia.org/wiki/Systems\_management) refers to enterprise-wide administration of distributed systems including (and commonly in practice) computer systems.

It may involve one or more of the following tasks:
* [Application performance management](https://en.wikipedia.org/wiki/Application\_performance\_management)
* Hardware inventories.
* Server availability monitoring and metrics.
* Software inventory and installation.
* Anti-virus and anti-malware.
* User's activities monitoring.
* Capacity monitoring.
* Security management.
* Storage management.
* Network capacity and utilization monitoring.
* Anti-manipulation management

**2. Tasks**

1. Compare three popular, open-source and free system management software.
   1. Overview, functionalities or features, supported platforms
   2. System requirements, prerequisites
   3. Installation difficulties
2. Install [OpenNMS](https://en.wikipedia.org/wiki/OpenNMS)
3. Explore the functionalities of OpenNMS.

**3. Report**

Write a report about the process you complete the tasks, key screen snapshots are needed as evidences.

**4. Demo video**
* [Install OpenNMS in Ubuntu 20.04 LTS](https://youtu.be/heENq8PcZh8)

**5. References**
* [OpenNMS](https://en.wikipedia.org/wiki/OpenNMS)
  * [Installation Guide](https://docs.opennms.org/opennms/releases/latest/guide-install/guide-install.html)
* [Cacti (software)](https://en.wikipedia.org/wiki/Cacti\_\(software\))
  * [documentation](https://github.com/Cacti/documentation)
* [Nagios](https://en.wikipedia.org/wiki/Nagios)
  * [Overview](https://support.nagios.com/kb/category.php?id=39)
  * [Installation](https://support.nagios.com/kb/category.php?id=83)
* [Icinga](https://en.wikipedia.org/wiki/Icinga)
  * [documentation](https://icinga.com/docs/)
* [Zabbix](https://en.wikipedia.org/wiki/Zabbix)