
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh '''
                 echo "hello world"
                 cd /home/dzope
                 ls
                '''
                sh '''
                    git pull origin main
                    nvm use -lts
                    npm install
                    node app.js
                '''
            }
        }
    }
}
