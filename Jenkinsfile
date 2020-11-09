
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh '''
                 echo "hello world"
                 whoami
                '''
                sh '''
                    ssh -i id_rsa -tt dzope@34.71.39.6
                    ls
                '''
            }
        }
    }
}
