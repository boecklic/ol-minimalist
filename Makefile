
.PHONY: setup
setup:
	python3 -m venv venv
	source venv/bin/activate
	pip install --upgrade pip
	pip install -r requirements.txt
	git submodule init


.PHONY: update
update:
	git submodule update

.PHONY: libs
libs:
	rm -r ./node_modules/
	npm install

.PHONY: build
build:
	npm run build

.PHONY: run
run:
	npm run start:dev

.PHONY: deploy
deploy:
	gzip -c dist/app.min.js | aws s3 --profile=aws-admin cp --content-type 'application/javascript' --content-encoding gzip --cache-control 'public, must-revalidate, proxy-revalidate, max-age=0' - s3://mf-geoadmin4-int-dublin/ol-minimalist/app.min.js
	aws s3 --profile=aws-admin cp  --cache-control 'public, must-revalidate, proxy-revalidate, max-age=0' dist/index.html s3://mf-geoadmin4-int-dublin/ol-minimalist/


.PHONY: deploystyle
deploystyle:
	gzip -c vtstyle/leichte-basiskarte_v006_singledomain.json | aws s3 --profile=aws-admin cp --content-type 'application/json' --content-encoding gzip  --cache-control 'public, must-revalidate, proxy-revalidate, max-age=0' - s3://mf-geoadmin4-int-dublin/ol-minimalist/leichte-basiskarte_v006_singledomain.json
	gzip -c vtstyle/openmaptiles_v001_singledomain.json | aws s3 --profile=aws-admin cp --content-type 'application/json' --content-encoding gzip  --cache-control 'public, must-revalidate, proxy-revalidate, max-age=0' - s3://mf-geoadmin4-int-dublin/ol-minimalist/openmaptiles_v001_singledomain.json
	gzip -c vtstyle/v006_style_singledomain.json | aws s3 --profile=aws-admin cp --content-type 'application/json' --content-encoding gzip  --cache-control 'public, must-revalidate, proxy-revalidate, max-age=0' - s3://mf-geoadmin4-int-dublin/ol-minimalist/v006_style_singledomain.json
