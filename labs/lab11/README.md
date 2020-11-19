# its352
online materials and references

## Data carving and recovery

**1. Description**

[Data carving/File carving](https://en.wikipedia.org/wiki/File_carving) is the process of reassembling computer files from fragments in the absence of filesystem metadata. 

This lab is a combination of the following resources:

* [Samsclass project: Photorec](https://samsclass.info/121/proj/p6-photorec.htm)
  * [NIST Forensic Images for File Carving](https://www.cfreds.nist.gov/FileCarving/index.html)
  * [DigitalCorpora Disk Images](https://digitalcorpora.org/corpora/disk-images)
    * [nps-2009-canon2](http://downloads.digitalcorpora.org/corpora/drives/nps-2009-canon2/)
      * [libewf](https://github.com/libyal/libewf)
      * [ewfexport](https://linux.die.net/man/1/ewfexport)
  * [TestDisk & PhotoRec](https://www.cgsecurity.org/wiki/TestDisk_Download)
* [Samsclass project: Analyzing a RAM Image with Bulk Extractor](https://samsclass.info/121/proj/p4-Bulk.htm)
  * [p4](https://samsclass.info/121/proj/152p4-Bulk.htm)
  * [p3](https://samsclass.info/121/proj/p3-Bulk.htm)
  * [p2](https://samsclass.info/121/proj/p2-RAM-Img.htm)
  * [Analyzing a RAM Image with Volatility](https://samsclass.info/121/proj/p4-Volatility.htm)
  * [bulk extractor](https://github.com/simsong/bulk_extractor)
    * [download](http://downloads.digitalcorpora.org/downloads/)
    * [Zulu OpenJDK](https://www.azul.com/)

**2. Task**
1. _File carving with PhotoRec_
  1. (6%, each 2%)Download and install [TestDisk & PhotoRec](https://www.cgsecurity.org/wiki/TestDisk_Download), [meld](https://meldmerge.org/) and [vbindiff](https://www.cjmweb.net/vbindiff/).
  2. Download the specified disk images from [Forensic Images for File Carving](https://www.cfreds.nist.gov/FileCarving/index.html) then recover files from them one by one with PhotoRec. Refer to [Samsclass project: Photorec](https://samsclass.info/121/proj/p6-photorec.htm) for a demo. 
     1. (10%) L0_Graphic.dd with non-fragmented graphics files.
     2. (10%) L1_Graphic.dd with sequentially fragmented graphics files 
     3. (20%) To find out how many files are recovered completely/partially/not at all, with comparison tools [meld](https://meldmerge.org/) and [vbindiff](https://www.cjmweb.net/vbindiff/), compare the carved files with the [original files](https://www.cfreds.nist.gov/FileCarving/TestFiles/index.html). Create a table to summarize the carving results, then explain the results.
2. _Information extraction with bulk extractor_  
  1. (4%, each 2%) Download and install [Zulu OpenJDK 8 or 11](https://www.azul.com/) and [bulk extractor](http://downloads.digitalcorpora.org/downloads/)
  2. Complete the following tasks with bulk extractor. Refer to [p3](https://samsclass.info/121/proj/p3-Bulk.htm) for a demo.:
     1. (15%) Download this [RAM image](https://samsclass.info/121/proj/memdump.7z) then analyze it, find all credit card numbers beginning with 3728
     2. (15%) Download this [RAM image](https://samsclass.info/152/proj/memdump2016.mem.zip) then analyze it, find all email addresses @wazuh.com
3. _Analyzing a RAM Image with Volatility(Optional)_
  1. [Analyzing a RAM Image with Volatility](https://samsclass.info/121/proj/p4-Volatility.htm)

**3. (20%) Review questions**
* (5%) Compare the pros and cons of PhotoRec and Bulk extractor.
* (5%) What is your plan using PhotoRec for your personal computer data recovery?
* (10%) Design a plan of data recovery for a company with PhotoRec and Bulk extractor.

**4. Report**

Write a report about the process you complete the tasks, 
* key screen snapshots are needed as evidences.

**5. Demo video**

There are lots of demo videos on Youtube, *you may find for yourself.*

Hint video is provided:

* [Data carving and recovery](https://youtu.be/J6yzF2Dmbkc)

**References**
* [File Carving and Data Recovery](https://linuxhint.com/file_carving_techniques_tools/)
* [File carving tools](https://linuxhint.com/file_carving_tools_linux/)
* [Practical Exercise - Image Carving](http://www.thehexninja.com/2017/12/practical-exercise-image-carving.html)
* [Forensic Images for File Carving](https://www.cfreds.nist.gov/FileCarving/index.html)
* [Disk Images](https://digitalcorpora.org/corpora/disk-images)
* [Basic Mac images](https://www.cfreds.nist.gov/v2/Basic_Mac_Image.html)
* [file carving overview](https://digital-forensics.sans.org/summit-archives/2010/eu-digital-forensics-incident-response-summit-bas-kloet-advanced-file-carving.pdf)
* [Nist Forensic File Carving](https://www.nist.gov/itl/ssd/software-quality-group/computer-forensics-tool-testing-program-cftt/cftt-technical-0)
  * [Nist File Carving](https://toolcatalog.nist.gov/taxonomy/index.php?ff_id=9)
  * [Top 20 Free Digital Forensic Investigation Tools for SysAdmins – 2019 update](https://techtalk.gfi.com/top-20-free-digital-forensic-investigation-tools-for-sysadmins/)
* _samsclass file carving projects_
  * [Data Carving with Foremost](https://samsclass.info/121/proj/p6-fore.htm)
  * [Photorec](https://samsclass.info/121/proj/F8photorec.htm)
  * [Fixing the Partition Table with TestDisk](https://samsclass.info/121/proj/p9-testdisk.htm)
  * [Rebuilding an Image Header](https://samsclass.info/121/proj/F9imghdr.htm)
  * [Identifying File Types](https://samsclass.info/121/proj/F10-filetype.htm)
  * [Analyzing a RAM Image with Bulk Extractor](https://samsclass.info/121/proj/p3-Bulk.htm)
  * [Capturing a RAM Image](https://samsclass.info/121/proj/p2-RAM-Img.htm)
* _samsclasses_
  * [CNIT 152: Incident Response](https://samsclass.info/152/152_Sum18.shtml)
  * [CNIT 121: Computer Forensics](https://samsclass.info/121/121_F16.shtml)
