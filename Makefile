install_node_ubuntu:
	sudo apt-get install nodejs

install_npm_ubuntu:
	sudo apt-get install npm

install_npm_dependencies:
	npm install 
create_symbolic_link_nodejs:
	sudo ln -s /usr/bin/nodejs /usr/bin/node

install_gulp_global_ubuntu:
	sudo npm install -g gulp

install_gulp_local_ubuntu:
	npm install --save-dev gulp

install_gulp_ubuntu: install_gulp_global_ubuntu install_gulp_local_ubuntu

install_gulp_required_plugins:
	npm install --save-dev jshint gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del gulp-sass gulp-if 
	# caso de problema rodar sudo chown -R $USER:$GROUP ~/.npm
