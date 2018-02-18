PATH  	:= node_modules/.bin:$(PATH)
YARN	?= yarn

all: yarn.lock dist/bundle.js

clean:
	rm -rf ./dist
	rm yarn.lock

yarn.lock: package.json
	$(YARN) install

dist/bundle.js: yarn.lock src/*.*
	webpack

.PHONY: all clean