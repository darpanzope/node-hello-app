pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'echo "Hello World"'
                sh '''
                    ssh -i ./id_rsa dzope@34.71.39.6
                    ls
                '''
            }
        }
    }
}
