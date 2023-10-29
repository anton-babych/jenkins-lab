pipeline {
    options { timestamps() }
    agent none
    stages {
        stage('Check scm') {
            agent any
            steps{
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo "Building.. ${BUILD_NUMBER}"
                echo "completed"
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '-u root:root'
                }
                steps {
                    sh 'npm run test'
                }
            }
        }
    }
}