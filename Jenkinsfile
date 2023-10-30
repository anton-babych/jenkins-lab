pipeline {
  agent {
    docker {
      image 'node:18'
    }
  }
   environment {
      IMAGE_NAME = 'jenkins-lab:0.1'
      REPO_NAME = 'jenkins'
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
            sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
            sh 'docker tag $IMAGE_NAME $DOCKER_USER/$REPO_NAME'
            sh 'docker push $DOCKER_USER/$REPO_NAME'
        }
    }
  }
  post {
      always {
        junit checksName: 'Jest Tests', testResults: 'junit.xml'
      }
  }
}
