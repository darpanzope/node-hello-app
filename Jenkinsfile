
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh '''
                 echo "hello world"
                 ls /
                 ls /home
                '''
                sh '''
                    ssh -i id_rsa -tt dzope@34.71.39.6
                    ls
                '''
            }
        }
    }
}
