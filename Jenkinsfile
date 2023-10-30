pipeline {
  agent {
    dockerfile true
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
  }
  post {
      always {
        junit checksName: 'Jest Tests', testResults: 'junit.xml'
      }
  }
}
