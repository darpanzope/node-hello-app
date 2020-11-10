
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
                    npm install
                    node app.js
                '''
            }
        }
    }
}
