# Gracefully Deploy new container
```shell script
kubectl set image deployment myapp myapp=worasit501/react-app:v1
```
- The deployment file need to configure `imagePullPolicy: Always`
- Sets image version of the deployment
- The deployment will gracefully update container version with zero downtime

NOTE: Always use container tag as version number instead of latest

More details: https://blog.container-solutions.com/kubernetes-deployment-strategies