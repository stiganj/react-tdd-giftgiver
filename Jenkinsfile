pipeline {
	agent any
	environment { 
        	CI = 'true'
    	}	
	stages {
		stage('Build'){
			steps {
				sh 'npm install'	
			}
		}
		stage('Test') {
			steps {
            			sh 'npm test'
    			}
		}
    		stage('Deploy'){
			steps {
				sh 'npm run build'
				sh 'npm start &'
			}
    		}
	}
}

