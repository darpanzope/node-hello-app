
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bash '''#!/bin/bash
                 echo "hello world" 
                '''
                bash '''#!/bin/bash
                    ssh -i ./id_rsa dzope@34.71.39.6
                    ls
                '''
            }
        }
    }
}
