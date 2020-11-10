
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh '''
                 echo "hello world"
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
