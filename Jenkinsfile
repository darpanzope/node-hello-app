
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
                    node app.js
                '''
            }
        }
    }
}
