pipeline {
	agent: any
	stages {
		stage('Build'){
			step {
				echo "Inside Build"
			}
		}
		stage('Test') {
			step {
        			echo "Inside Test"
        			dir('/Users/selmatiganj/react-tdd-class/giftgiver') {
            				pwd()
            				sh 'CI=true npm test'
        			}
    			}
		}
    		stage('Deploy'){
			step {
        			echo "Inside Deploy"
			}
    		}
	}
}

