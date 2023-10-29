pipeline {
  agent {
    // Use the node label and the image name
    docker {
      image 'node:18'
      label 'common-build-machine'
    }
  }
  stages {
    stage ('Build') {
      steps {
        // Run npm install and npm run build
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage ('Test') {
      steps {
        // Run jest with coverage report
        sh 'npm test -- --coverage'
      }
    }
  }
}
