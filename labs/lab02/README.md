# its352
online materials and references

## Lab02: Install OpenNMS

**0. Prerequisites**

Before start this lab, please check the correct Java SDK is installed. If you installed several versions of Java SDK, make sure 11.0.8.fx-librca from Bellsoft is set to the default Java SDK as \#4 below. If you did NOT use [sdkman](https://sdkman.io/) to manage your Java SDK, please uninstall all of them first.

If Java SDK NOT installed, it can be installed with the following commands:

Use sdkman to manage multiple versions of Java JDK. Run the following commands to install *sdkman* first:

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
export JAVA_HOME="/home/$USER/.sdkman/candidates/java/current"

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

1. (30%) Compare three popular, open-source and free system management software.
   1. Overview, functionalities or features, supported platforms
   2. System requirements, prerequisites
   3. Installation difficulties
2. (60%) Install [OpenNMS](https://en.wikipedia.org/wiki/OpenNMS)
3. (10%) Explore the functionalities of OpenNMS.

*How to change Postgre users' passwords*
```bash
# 0. enter Postgres as postgres
$ sudo su -c "psql" postgres

# successful log output on Ubuntu 20.04
psql (12.4 (Ubuntu 12.4-0ubuntu0.20.04.1))
Type "help" for help.

postgres=# 

# using psql command: \password user_name
# 1. change the default postgres user's password
postgres=# \password postgres
Enter new password: 
Enter it again: 
postgres=# 

# 2. change other users' passwords
postgres-# \password opennms
Enter new password: 
Enter it again: 
postgres-#
```

**3. Report**

Write a report about the process you complete the tasks, key screen snapshots are needed as evidences.

**4. Demo video**
* [Install OpenNMS in Ubuntu 20.04 LTS](https://youtu.be/heENq8PcZh8)

**5. References**
* [OpenNMS](https://en.wikipedia.org/wiki/OpenNMS)
  * [Installation Guide](https://docs.opennms.org/opennms/releases/latest/guide-install/guide-install.html)
  * [Install OpenNMS Network Monitoring in Debian and Ubuntu](https://www.tecmint.com/install-opennms-in-debian-and-ubuntu/)  
  * [How to Add Hosts in OpenNMS Monitoring Server](https://www.tecmint.com/add-hosts-in-opennms-monitoring/)
  * [How to add a node to OpenNMS](https://www.techrepublic.com/article/how-to-add-a-node-to-opennms/)
* [Cacti (software)](https://en.wikipedia.org/wiki/Cacti\_\(software\))
  * [documentation](https://github.com/Cacti/documentation)
* [Nagios](https://en.wikipedia.org/wiki/Nagios)
  * [Overview](https://support.nagios.com/kb/category.php?id=39)
  * [Installation](https://support.nagios.com/kb/category.php?id=83)
* [Icinga](https://en.wikipedia.org/wiki/Icinga)
  * [documentation](https://icinga.com/docs/)
* [Zabbix](https://en.wikipedia.org/wiki/Zabbix)
* [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
  * [PostgreSQL Administration](https://www.postgresqltutorial.com/postgresql-administration/)
  * [Change a Password for PostgreSQL on Linux via Command Line](https://www.liquidweb.com/kb/change-a-password-for-postgresql-on-linux-via-command-line/)
