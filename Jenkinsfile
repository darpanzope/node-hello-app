
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh '''
                    echo "hello world"
                    cd /home/dzope/node-hello-app
                    ls
                    pwd
                
                    sudo su dzope
                    git pull origin main
                    nvm use -lts
                    npm install
                    node app.js
                '''
            }
        }
    }
}
