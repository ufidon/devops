# its352
online materials and references


## Lab03: Visualization of user/computer/network activities
**0. Prerequisites**

This lab depends on Lab02, in which OpenNMS will be used.


**1. Objectives**

* Learn how to use OpenNMS
  * Add nodes/hosts to OpenNMS for monitoring
  * Visualize users/nodes/hosts activities in OpenNMS
* Visualize datasets of network activities with open-source visualization software


**2. Tasks**

1. (40%)Employ OpenNMS
   1. (10%)Add localhost as a node/host to OpenNMS
      1. Follow the instructions here [How to Add Hosts in OpenNMS Monitoring Server](https://www.tecmint.com/add-hosts-in-opennms-monitoring/)
   2. (15%, each 5%)Screen-capture the following three charts in OpenNMS.
      1. Node availability timeline in last 24 hours. (From the main nav bar: Info->nodes)
      2. Status overview. (On the home page)
      3. Trend. (From the main nav bar: Status->Trend)
   3. (15%, each 5%)Screen-capture the following three charts in OpenNMS.(From the main nav bar: Report -> Charts)
      1. Alarms, severity chart
      2. Last 7 Days Outages, outages chart
      3. Node inventory
2. (60%)Visualize network activity dataset with [Google Chart](https://developers.google.com/chart)
   1. (10%)Download the following files from [the UNSW-NB15 Datasets](https://www.unsw.adfa.edu.au/unsw-canberra-cyber/cybersecurity/ADFA-NB15-Datasets/)
      1. List of events. [UNSW-NB15_LIST_EVENTS.csv](https://www.unsw.adfa.edu.au/unsw-canberra-cyber/cybersecurity/ADFA-NB15-Datasets/UNSW-NB15_LIST_EVENTS.csv)
   2. (50%)Visualize the downloaded dataset with Google Chart and explore information from the datasets.
      1. (25%)From the list of events file, choose the top attack subcategory from each attack category, then visualize them with [pie chart](https://developers.google.com/chart/interactive/docs/gallery/piechart) by creating a html file. _There will be 9 sectors_
      2. (25%)From the list of events file, visualize all attacks with [bar chart](https://developers.google.com/chart/interactive/docs/gallery/barchart) by creating a html file, first group by attack category, *there will be 9 groups of bars*, within each group, then combine identical attack subcategory, draw a bar for each attack subcategory. *If google bar chart does not support variant group size, please adapt the [reference code](./code/barchart.htm) to draw manually, since the difference between the maximum number of attacks are too bigger than smaller number of attacks, so for proper visualization, log scale of number attacks must be used. ,i.e, use natural log,  math.log(# of attacks) instead of # of attacks itself.*

**3. Report**

Write a report about the process you complete the tasks, 
* key screen snapshots are needed as evidences.
* *The two html files created in Task 2.2 must be appended in the report*


**4. References**
* [Google Chart](https://developers.google.com/chart)
* [OpenNMS](https://en.wikipedia.org/wiki/OpenNMS)
  * [Installation Guide](https://docs.opennms.org/opennms/releases/latest/guide-install/guide-install.html)
  * [Install OpenNMS Network Monitoring in Debian and Ubuntu](https://www.tecmint.com/install-opennms-in-debian-and-ubuntu/)  
  * [How to Add Hosts in OpenNMS Monitoring Server](https://www.tecmint.com/add-hosts-in-opennms-monitoring/)
  * [How to add a node to OpenNMS](https://www.techrepublic.com/article/how-to-add-a-node-to-opennms/)
* _Online network datasets_
  * [BotDAD Campus DNS network traffic dataset](https://data.mendeley.com/datasets/zh3wnddzxy/2)
    * [BotDAD](https://github.com/mannirulz/BotDAD)
  * [MAWILab dataset](http://www.fukuda-lab.org/mawilab/index.html)
  * [The UNSW-NB15 Dataset](https://www.unsw.adfa.edu.au/unsw-canberra-cyber/cybersecurity/ADFA-NB15-Datasets/)
    * [UNSW-NB15: a comprehensive data set for network intrusion detection systems (UNSW-NB15 network data set)](https://ieeexplore.ieee.org/document/7348942)
    * [2009 M57-Patents Scenario](https://digitalcorpora.org/corpora/scenarios/m57-patents-scenario)
    * [Publicly available PCAP files](https://www.netresec.com/index.ashx?page=PcapFiles)