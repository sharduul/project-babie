For node-mongoose directory structure check out this link:
http://stackoverflow.com/questions/15454441/mongoose-based-app-architecture


Setup service on Heroku

    - Install Heroku toolbelt from heroku site
    - heroku login
    - heroku git:remote -a babie-service
    - git remote set-url heroku git@heroku.com:babie-service.git
    - cd .. (come to the parent directory of this sub-tree)
    - git subtree push --prefix babie-service heroku master
    
Deploy service on Heroku

    - run build.ps1 script from babie-service folder
       command: powershell "./build.ps1"


Heroku error: Permission denied (publickey)

    - heroku keys:add ....if you don't have a public key
    - heroku keys:add ~/.ssh/id_rsa.pub ...to upload the public key to heroku

Mongolab db restore

    - mongorestore -h host:port -d heroku_cnndmbkh -u dool -p dool heroku_cnndmbkh/
    ... dool and dool are database username and password
    ... heroku_cnndmbkh/ should contain bson files
