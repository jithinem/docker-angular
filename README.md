Docker commands

docker images
To list docker images

docker rmi <IMAGE_ID>
To delete a particular image

docker ps -a
To list all docker containers

docker rm <CONTAINER_ID>
To delete a container

docker ps
To list running containers

docker stop <CONTAINER_ID>
To stop a running container

docker build -t <image-name> .
To build a docker image

docker run -p 5000:5000 <image-name>
To run the docker container

---------------------------------------------------------------
Docker compose up commands

docker-compose up --build  OR docker-compose up
Build and Start the Containers

docker-compose up --build -d
Run Containers in Detached Mode (optional)

docker-compose logs -f
View Logs

docker-compose down
Stop the Containers

docker-compose down -v
Remove Containers, Volumes, and Networks (if needed)

