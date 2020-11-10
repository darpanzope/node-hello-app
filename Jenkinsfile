
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
                    ansible-playbook deployment.yml -i inventory.txt
                    
                '''
            }
        }
    }
}
