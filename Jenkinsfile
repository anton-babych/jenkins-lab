pipeline {
  agent any

  environment {
      IMAGE_NAME = 'jenkins-lab:0.1'
      REPO_NAME = 'jenkins-lab'
      //DOCKERHUB_CREDENTIALS = credentials('antonbabych-dockerhub')
  }

  stages {
    stage ('Build') {
      agent {
        docker {
            image 'node:18'
            args '-u=\"root\"'
        }
      }
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage ('Test') {
        agent {
            docker {
                image 'node:18'
                args '-u=\"root\"'
            }
        }
        steps {
            sh 'npm test -- --coverage --testResultsProcessor="jest-junit"'
        }
    }
     stage ('Push') {
         steps {
            sh 'docker build -t $DOCKER_USER/$IMAGE_NAME'
            sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
            sh 'docker push $DOCKER_USER/$REPO_NAME'
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
