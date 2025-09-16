pipeline {
    agent any

    tools {
        nodejs "Node16"   // Make sure you configured NodeJS in Jenkins (Manage Jenkins > Global Tool Configuration)
    }

    environment {
        // Optional: GitHub or environment variables (like tokens) can be set here
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/SabeehNoshad/workwiseCypress.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'   // cleaner & faster than npm install
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Run Cypress with Allure enabled
                sh 'npx cypress run --env allure=true'
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'cypress/videos/**/*.mp4, cypress/screenshots/**/*.png', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo "Pipeline completed. Cleaning up workspace."
            cleanWs()
        }
        failure {
            mail to: 'your@email.com',
                 subject: "❌ Cypress Tests Failed in Jenkins",
                 body: "Check the Jenkins build logs and Allure report for details."
        }
    }
}
