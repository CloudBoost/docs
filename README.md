#Introduction

[![Join the chat at https://gitter.im/cloudboost/help](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cloudboost/help?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Build Status](http://cbjenkins.cloudapp.net:8080/buildStatus/icon?job=CbDocumentation)](http://cbjenkins.cloudapp.net:8080/job/CbDocumentation)


This is the API Reference for CloudBoost which is hosted at [https://docs.cloudboost.io](https://docs.cloudboost.io). If you want to have a look into documentation / guide, you can check them out here : [https://tutorials.cloudboost.io](https://tutorials.cloudboost.io) and API reference is available here : [https://docs.cloudboost.io](https://docs.cloudboost.io)

#Contribute

Please follow these steps in order to contribute to the repo. 

#Important
**Do not** edit the files in the root directory of the website (except gruntfile.js). Files such as javascript.html, java.html, <programming-language>.html **should not** be edited.   


##Create a content file
Create a `<functionalityName>.html` file in the folder `api/<programminglanguage>/<functionalityName>.html` and add the HTML code. You dont need to create a new file if the file already exists. Example : `api/javascript/cloudobjects.html`.

##Add a menu item.
Add the Menu item for the functionality in `api/<programming-language>/content-guide.html` file. If the menu item of your functionality exists. Ignore this step. 

##Step3
Append the `filename.html` (If the filename doesn't exists already) in `/Gruntfile.js` 


