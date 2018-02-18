PATH  	:= node_modules/.bin:$(PATH)
YARN	?= yarn
IS_DEV  ?= false

all: env.lock yarn.lock dist/bundle.js 

clean:
	rm -rf ./dist
	rm yarn.lock

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

dist/bundle.js: webpack.config.js env.lock yarn.lock src/*.*
ifeq ($(IS_DEV), true)
	webpack
else
	webpack -p
endif

.PHONY: all clean force-rebuild