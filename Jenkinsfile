pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Test') {
            steps {
                script {
                    // Ejecutar comandos para construir y probar tu proyecto
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }
    }
}
