pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bash 'echo "Hello World"'
                bash '''
                    ssh -i ./id_rsa dzope@34.71.39.6
                    ls
                '''
            }
        }
    }
}
