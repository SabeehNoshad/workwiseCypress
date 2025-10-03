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
               bat 'npx cypress run --spec "cypress/e2e/task.cy.js" --env allure=true || exit 0'
            }
        }

       stage('Publish Allure Report') {
    steps {
        bat 'npx allure generate allure-results --clean -o allure-report'
        bat 'npx allure open allure-report'
    }
}

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4, cypress/screenshots/**/*.png', allowEmptyArchive: true
            cleanWs()
        }
    }
}
