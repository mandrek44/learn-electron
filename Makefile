NPM		?= yarn

.PHONY: build

yarn.lock: package.json
	$(NPM)

build: yarn.lock
	$(NPM) run build


