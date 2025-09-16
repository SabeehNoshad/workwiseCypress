pipeline {
    agent any

    tools {
        nodejs 'Node16' // Must match NodeJS installation in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/master']],
                    userRemoteConfigs: [[url: 'https://github.com/YourUsername/workwiseCypress.git']]
                ])
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run --env allure=true'
            }
        }

        stage('Publish Allure Report') {
            steps {
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
            cleanWs()
        }
    }
}
