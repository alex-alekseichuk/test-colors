Build and run the service in docker container

```
docker build -t colors_api .
docker run -it --rm -p 5189:80 --name colors_api colors_api
```

