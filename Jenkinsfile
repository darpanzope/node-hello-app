pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'echo "Hello World"'
                sh '''
                    gcloud compute ssh mig-simple-4cdn
                    cd /home/dzope/node-hello-app
                    ls
                '''
            }
        }
    }
}
