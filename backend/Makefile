SHELL = /bin/bash

override PWD = $(shell pwd)
override PROJ_DIR = $(shell pwd | xargs basename)

override JAIL := firejail --seccomp --private=./ --noroot --nosound --novideo --no3d --caps.drop=all --hostname=develop
override DENO := $(JAIL) deno
override NPM := $(JAIL) npm


# Linux commands
config_ls:
	$(NPM) config ls

ci:
	$(NPM) ci

ci-proxychain:
	$(JAIL) proxychains npm ci

install-proxychain:
	$(JAIL) proxychains npm install

install:
	$(NPM) install

add:
	$(NPM) install $(ARGS)

remove:
	$(NPM) remove $(ARGS)

start:
	$(NPM) run start

dev:
	$(NPM) run dev

dev-proxychain:
	$(JAIL) proxychains npm run dev

build:
	$(NPM) run build

audit:
	$(NPM) audit

outdated:
	$(NPM) outdated

lint:
	$(NPM) run lint