# Swagger UI Proxy

This is a minimal wrapper around 
[swagger ui|https://github.com/swagger-api/swagger-ui] to proxy an endpoint
url to the given container. It is used at etventure to include a documentation
into a [docker-compose|https://docs.docker.com/compose/] set without needing 
to set up any external dependencies.

## Usage

Just include the container in your docker-compose setup and use the
environment variable `API_ENDPOINT_URL` to point to your API definition.
This should ideally be an other endpoint linked to your current
container.
