pipeline {
  agent {
    docker {
      image 'node:18'
      label 'common-build-machine'
    }
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
        sh 'npm test -- --coverage'
      }
    }
  }
}
