
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh '''
                    echo "hello world"
                    cd /home/deqode/work/test/terraform-google-lb/examples/basic
                    ls
                    ansible-playbook deployment.yml -i inventory.txt
                '''
            }
        }
    }
}
