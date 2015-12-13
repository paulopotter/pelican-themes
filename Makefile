install_node_ubuntu:
	sudo apt-get install nodejs

install_npm_ubuntu:
	sudo apt-get install npm

create_symbolic_link_nodejs:
	sudo ln -s /usr/bin/nodejs /usr/bin/node

install_gulp_global_ubuntu:
	sudo npm install -g gulp

install_gulp_local_ubuntu:
	npm install --save-dev gulp

install_gulp_ubuntu: install_gulp_global_ubuntu install_gulp_local_ubuntu

install_gulp_required_plugins:
	npm install jshint gulp-jshint gulp-sass gulp-concat gulp-uglify gulp-rename --save-dev 
