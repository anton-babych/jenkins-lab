pipeline {
  agent {
    docker {
      image 'node:18'
    }
  }
   environment {
      IMAGE_NAME = 'jenkins-lab:0.1'
      REPO_NAME = 'jenkins'

      registry = "antonbabych/jenkins-lab"
      registryCredential = 'antonbabych'
      dockerImage = ''
   }

  stages {
    stage ('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage ('Test') {
      steps {
        sh 'npm test -- --coverage --testResultsProcessor="jest-junit"'
      }
    }
    stage ('Push') {
        steps {
            script {
                dockerImage = docker.build registry + ":$BUILD_NUMBER"
                docker.withRegistry( '', registryCredential ) {
                dockerImage.push()
            }
        }
    }
  }
  post {
      always {
        junit checksName: 'Jest Tests', testResults: 'junit.xml'
      }
  }
}