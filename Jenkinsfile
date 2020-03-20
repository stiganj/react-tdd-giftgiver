pipeline {
	agent any
	stages {
		stage('Build'){
			steps {
				echo "Inside Build"
			}
		}
		stage('Test') {
			steps {
        			echo "Inside Test"
        			dir('/Users/selmatiganj/react-tdd-class/giftgiver') {
            				pwd()
            				sh 'CI=true npm test'
        			}
    			}
		}
    		stage('Deploy'){
			steps {
        			echo "Inside Deploy"
			}
    		}
	}
}

