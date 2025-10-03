pipeline {
    agent any

   

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/master']],
                    userRemoteConfigs: [[url: 'https://github.com/SabeehNoshad/workwiseCypress.git']]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
               bat 'npx cypress run --spec "cypress/e2e/task.cy.js" --headless --env allure=true || exit 0'
            }
        }

       stage('Publish Allure Report') {
 
  stage('Generate Allure Report') {
    steps {
        dir("${WORKSPACE}") {
            bat 'npx allure generate allure-results --clean -o allure-report'
        }
    }
}
       }}
    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4, cypress/screenshots/**/*.png', allowEmptyArchive: true
            cleanWs()
        }
    }
}
