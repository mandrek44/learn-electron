PATH  				:= node_modules/.bin:$(PATH)
YARN				?= yarn
IS_DEV  			?= false
USE_WEBPACK_SERVER 	:= false

all: env.lock yarn.lock dist/bundle.js dist/main.js

clean:
	rm -rf ./dist
	rm yarn.lock

start-dev: yarn.lock	
	electron src/main.js useWebServer=true & webpack-dev-server

start-dist: all
	electron dist/main.js

define print_env
	echo "IS_DEV=$(IS_DEV) YARN=$(YARN)">$(1) 
endef

env.lock: force-rebuild
	@if ! $(call print_env,&1) | cmp env.lock ; then \
		$(call print_env,env.lock); \
		echo "env.lock updated"; \
	else \
		echo "env.lock up to date"; \
	fi;

yarn.lock: package.json
	$(YARN) install

dist/main.js: src/main.js
	cp src/main.js dist/main.js

dist/bundle.js: webpack.config.js env.lock yarn.lock src/*/*.*
ifeq ($(IS_DEV), true)
	webpack
else
	webpack -p
endif

.PHONY: start-dev start-dist all clean force-rebuild electron