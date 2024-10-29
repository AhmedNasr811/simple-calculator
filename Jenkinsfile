pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials') // Store your Docker Hub credentials in Jenkins
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/AhmedNasr811/simple-calculator.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("ahmednasr811/simple-calculator:${env.BUILD_ID}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'DOCKERHUB_CREDENTIALS') {
                        dockerImage.push("${env.BUILD_ID}")
                        dockerImage.push("latest")
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh 'kubectl apply -f namespace.yaml'
                    sh 'kubectl apply -f deployment.yaml'
                    sh 'kubectl apply -f service.yaml'
                }
            }
        }

        stage('Clean Up') {
            steps {
                cleanWs()
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
