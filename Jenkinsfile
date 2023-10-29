pipeline {
  agent {
    // Use the Dockerfile in the root of the repository
    dockerfile true
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
