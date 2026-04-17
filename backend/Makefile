SHELL = /bin/bash

override PWD = $(shell pwd)
override PROJ_DIR = $(shell pwd | xargs basename)
override PROJ_ROOT = $(shell dirname $(PWD))

override JAIL := firejail --seccomp --noroot --nosound --novideo --no3d --caps.drop=all --hostname=develop
override JAIL_BASE := firejail --seccomp --noroot --nosound --novideo --no3d --caps.drop=all --hostname=develop
override JAIL := $(JAIL_BASE) --private=./

override NPM := $(JAIL) npm


# Для PM2 deploy — доступ к проекту, .ssh и .gitconfig
override JAIL_DEPLOY := $(JAIL_BASE) \
	--whitelist=$(PROJ_ROOT) \
	--whitelist=~/.ssh \
	--whitelist=~/.gitconfig \
	--whitelist=~/.pm2 \
	--read-only=~/.ssh \
	--read-only=~/.gitconfig

# Linux commands
config_ls:
	$(NPM) config ls

ci:
	$(NPM) ci

install:
	$(NPM) install

start:
	$(NPM) run start

dev:
	$(NPM) run dev

build:
	$(NPM) run build

lint:
	$(NPM) run lint

# PM2 deploy с ограниченным доступом
pm2-deploy-setup:
	$(JAIL_DEPLOY) npx pm2 deploy ecosystem.config.js production setup

pm2-deploy:
	$(JAIL_DEPLOY) npx pm2 deploy ecosystem.config.js production