pipeline {
  agent {
    docker {
      image 'node:18'
      args '-u=\"root\"'
    }
  }
   environment {
      IMAGE_NAME = 'jenkins-lab:0.1'
      REPO_NAME = 'jenkins-lab'
      DOCKERHUB_CREDENTIALS = credentials('antonbabych-dockerhub')
   }

  stages {
    stage ('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
        sh 'docker build -t antonbabych/jenkins-lab:latest'
      }
    }
    stage ('Test') {
      steps {
        sh 'npm test -- --coverage --testResultsProcessor="jest-junit"'
      }
    }
    stage ('Login') {
        steps {
            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        }
    }
    stage ('Push') {
        steps {
            sh 'docker push antonbabych/jenkins-lab:latest'
        }
    }
  }
  post {
      always {
        junit checksName: 'Jest Tests', testResults: 'junit.xml'
        sh 'docker logout'
      }
  }
}
