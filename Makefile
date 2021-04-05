rebuild:
	docker-compose build --no-cache
build-up:
	docker-compose build && docker-compose up
up:
	docker-compose up
up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
down:
	docker-compose down