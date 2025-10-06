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
                     // Clean old allure results first
                  bat 'rmdir /s /q allure-results || exit 0'
                  bat 'mkdir allure-results'
                     bat 'npx cypress run --spec "cypress/e2e/quickTask.cy.js" --env allure=true --headless --reporter mocha-allure-reporter || exit 0'
            }
        }

        stage('Publish Allure Report') {
            steps {
              //  bat 'npx allure generate --clean'
                //  bat 'npx allure generate allure-results --clean '
                  bat 'allure generate allure-results --clean -o allure-report'
               //   bat 'allure generate allure-results --clean -o allure-report'
               //   bat 'allure open allure-report'
                script {
                    // Ensure this method is approved in Script Approval
                    allure([
                        includeProperties: false,
                        jdk: '',
                        results: [[path: 'allure-results']]
                    ])
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4, cypress/screenshots/**/*.png', allowEmptyArchive: true
            // cleanWs()
        }
    }
}
