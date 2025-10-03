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
                // Cypress headless with flags to avoid WebGL issues
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

        // Optional: Publish Allure Reports via plugin
        // Remove if you don’t have plugin configured
        // stage('Publish Allure Report') {
        //     steps {
        //         allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        //     }
        // }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4, cypress/screenshots/**/*.png', allowEmptyArchive: true
            cleanWs()
        }
    }
}
