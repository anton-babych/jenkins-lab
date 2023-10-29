pipeline {
  agent {
    // Use a node image with alpine
    docker {
      image 'node:18-alpine'
      args '-u root:root' // You may need root privileges to install chromium
    }
  }
  stages {
    stage ('Install') {
      steps {
        // Install dependencies
        sh 'apk add chromium' // Install chromium for testing
        sh 'npm install' // Install npm packages
      }
    }
    stage ('Build') {
      steps {
        // Build the app
        sh 'npm run build'
      }
    }
    stage ('Test') {
      steps {
        // Test the app with jest
        sh 'CHROME_BIN=/usr/bin/chromium-browser npm test' // Set the CHROME_BIN environment variable
      }
    }
  }
}
