# Docker image for vue application
# VERSION 1.0.0
# Author: Kannokaze
 
### 基础镜像，使用nginx镜像
FROM nginx
 
#暴露8080端口
EXPOSE 80

 
#应用构建成功后的文件被复制到镜像内
COPY /dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
#启动容器时的进程
ENTRYPOINT nginx -g "daemon off;"