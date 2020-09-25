# its352
online materials and references

## Lab06: Identifying spam emails with Orange

**0. Prerequisites**

* You may install [Orange](https://orange.biolab.si/) on any one of Windows/Mac OS/Linux with which you feel convenient and comfortable.
* You may do this lab on Windows or Mac OS or Linux.

**1. Objectives**

* Learning how to identify spam emails with various classifiers in Orange.
* [Choosing the right estimator](https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html)

**2. Tasks**

1. (10%)Find, download a dataset of spam ham emails for machine learning
2. (15%)Preprocess the datasets so it can be used in Orange
3. (64%, each 8%)Classify the emails into spams and hams using the following classifiers, and compare their performance with at least three model evaluation metrics such as CA(classification accuracy), precision, recall, F1(F-score or F-measure), etc.
   1. Logistic Regression
       1. [Logistic regression](https://en.wikipedia.org/wiki/Logistic_regression)
   2. Random Forest
       1. [Random forest](https://en.wikipedia.org/wiki/Random_forest)
   3. Softmax Regression
       1. [Softmax function](https://en.wikipedia.org/wiki/Softmax_function)
   4. k-Nearest Neighbors
       1. [k-nearest neighbors algorithm](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
   5. Naive Bayes
       1. [Naive Bayes classifier](https://en.wikipedia.org/wiki/Naive_Bayes_classifier)
   6. Support Vector Machines
       1. [Support vector machine](https://en.wikipedia.org/wiki/Support_vector_machine)
   7.  Classification Tree
       1.  [Decision tree learning](https://en.wikipedia.org/wiki/Decision_tree_learning)
   8.  Majority Classifier
   9.  Neural Network
       1.  [Artificial neural network](https://en.wikipedia.org/wiki/Artificial_neural_network)
4.  (11%)Draw your conclusion on the classification.


**3. Report**

Write a report about the process you complete the tasks, 
* key screen snapshots are needed as evidences.


**4. References**

* _Orange_
  * [Orange](https://orange.biolab.si/)
  * [Documents](https://orange-data-mining-library.readthedocs.io/en/latest)
  * [Docs](https://orange.biolab.si/docs/)
  * [Text Mining](https://orange3-text.readthedocs.io/en/latest/)
  * [model evaluation](https://orange-data-mining-library.readthedocs.io/en/latest/reference/evaluation.cd.html)
  * [Outlier detection](https://orange-data-mining-library.readthedocs.io/en/latest/reference/outliers.html)
  * [Machine Learning Approaches to NetworkAnomaly Detection](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.129.238&rep=rep1&type=pdf)
* _Scikit-learn_
  * [user guide](https://scikit-learn.org/stable/user_guide.html)
  * [SPAM Classifier using Scikit-Learn](https://www.cs.bgu.ac.il/~elhadad/nlp16/spam_classifier.html)
* _Online email datasets_
  * [kaggle datasets](https://www.kaggle.com/)
  * [kaggle email and message datasets](https://www.kaggle.com/tags/email-and-messaging)
  * [UCI Spambase Data Set](https://archive.ics.uci.edu/ml/datasets/spambase)
  * [Email-Spam-filtering-with-Enron-Dataset](https://github.com/singhlaaman/Email-Spam-filtering-with-Enron-Dataset)
    * [Enron datasets](http://nlp.cs.aueb.gr/software_and_datasets/Enron-Spam/)
  * [50 Free Machine Learning Datasets: Natural Language Processing](https://blog.cambridgespark.com/50-free-machine-learning-datasets-natural-language-processing-d88fb9c5c8da)
  * [How To Design A Spam Filtering System with Machine Learning Algorithm](https://towardsdatascience.com/email-spam-detection-1-2-b0e06a5c0472)
  * [Email Spam Filtering: An Implementation with Python and Scikit-learn](https://www.kdnuggets.com/2017/03/email-spam-filtering-an-implementation-with-python-and-scikit-learn.html)
  * [Comparison of machine learning methods in email spam detection](https://www.matchilling.com/comparison-of-machine-learning-methods-in-email-spam-detection/)
* _Online network datasets_
  * [BotDAD Campus DNS network traffic dataset](https://data.mendeley.com/datasets/zh3wnddzxy/2)
    * [BotDAD](https://github.com/mannirulz/BotDAD)
  * [MAWILab dataset](http://www.fukuda-lab.org/mawilab/index.html)
  * [The UNSW-NB15 Dataset](https://www.unsw.adfa.edu.au/unsw-canberra-cyber/cybersecurity/ADFA-NB15-Datasets/)
    * [UNSW-NB15: a comprehensive data set for network intrusion detection systems (UNSW-NB15 network data set)](https://ieeexplore.ieee.org/document/7348942)
    * [2009 M57-Patents Scenario](https://digitalcorpora.org/corpora/scenarios/m57-patents-scenario)
    * [Publicly available PCAP files](https://www.netresec.com/index.ashx?page=PcapFiles)