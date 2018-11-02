default: help

##	make help - display the help
##
help:
	@grep "^##.*" ./Makefile

##	setup - install packages
##
setup:
	pnpm install

##	tests - run tests
##	To run just one test: mocha ./src/**/*.tests.js --grep FileName
tests:
	(export NODE_PATH=./; find ./src -name '*.tests.js' | xargs mocha --timeout 10000 $(ARGS))
