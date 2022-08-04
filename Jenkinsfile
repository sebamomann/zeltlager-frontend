def image
def branch_name = "${env.BRANCH_NAME}"
def github_token = "${env.GITHUB_STATUS_ACCESS_TOKEN}"
def build_number = "${env.BUILD_NUMBER}"

def tagName = 'jb_' + branch_name + "_" + build_number
def backendImageLatest

pipeline {
  agent any

  environment {
    GITHUB_STATUS_ACCESS_TOKEN_SEBAMOMANN = credentials('GITHUB_STATUS_ACCESS_TOKEN_SEBAMOMANN')
  }

  options {
    ansiColor('xterm')
  }

  stages {
    stage('Preamble') {
      steps {
        script {
          updateStatus("pending")
        }
      }
    }

    stage('Build Docker image') {
      steps {
        script {
          image = docker.build("zeltlager/zeltlager-frontend:" + tagName,
              "-f Dockerfile .")
        }
      }
    }

    stage('Publish to registry') {
      when {
        expression {
          return branch_name =~ /^\d\.\d\.\d(-\d+)?/
        }
      }
      steps {
        script {
          docker.withRegistry('http://localhost:34015') {
            image.push(branch_name)
          }
        }
      }
    }
    stage('Publish to registry - master') {
      when {
        expression {
          return branch_name =~ "master"
        }
      }
      steps {
        script {
          docker.withRegistry('http://localhost:34015') {
            image.push('latest')
          }
        }
      }
    }
  }
  post {
    always {
      script {
        try {
          sh 'docker image rm zeltlager/zeltlager-frontend:' + tagName + ' -f'
        } catch (err) {
          echo err.getMessage()
        }
      }
    }
    success {
      script {
        updateStatus("success")
      }
    }
    failure {
      script {
        updateStatus("failure")
      }
    }
    aborted {
      script {
        updateStatus("error")
      }
    }
  }
}

void updateStatus(String value) {
  sh 'curl -s "https://api.github.com/repos/sebamomann/zeltlager-frontend/statuses/$GIT_COMMIT" \\\n' +
    '  -H "Content-Type: application/json" \\\n' +
    '  -H "Authorization: token $GITHUB_STATUS_ACCESS_TOKEN_SEBAMOMANN" \\\n' +
    '  -X POST \\\n' +
    '  -d "{\\"state\\": \\"' + value + '\\", \\"description\\": \\"Jenkins\\", \\"context\\": \\"continuous-integration/jenkins\\", \\"target_url\\": \\"https://jenkins.dankoe.de/job/jenkinsfile-frontend/job/$BRANCH_NAME/$BUILD_NUMBER/console\\"}" \\\n' +
    '  '
}
