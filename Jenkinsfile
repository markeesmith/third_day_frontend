pipeline {
    agent any

    tools {nodejs "Node 11.13.0"}

    environment {
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
              sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy DEV') {
            when {
                branch 'dev'
            }
            steps {
                echo 'Deploy Dev placeholder for DEV branch'
            }
        }
        stage('Deploy PROD') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploy Stage placeholder for MASTER branch'
            }
        }
     }
}