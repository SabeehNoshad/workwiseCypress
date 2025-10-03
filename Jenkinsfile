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
                // Added flags to avoid WebGL issues in CI
                bat 'npx cypress run --spec "cypress/e2e/task.cy.js" --headless --no-sandbox --disable-gpu --env allure=true || exit 0'
            }
        }

        stage('Generate Allure Report') {
            steps {
                dir("${WORKSPACE}") {
                    bat 'npx allure generate allure-results --clean -o allure-report'
                }
            }
        }

        stage('Publish Allure Report') {
            steps {
                // Optional: You can use Jenkins Allure plugin to publish
                // allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4, cypress/screenshots/**/*.png', allowEmptyArchive: true
            cleanWs()
        }
    }
}
