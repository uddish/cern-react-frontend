# Hadoop Backup Catalog Frontend


#### Build react app
```sh
$ npm install
$ npm run build --production
```


#### Build Docker Image
```sh
$ docker build -t image-name:verson .
$ docker run -it image-name:version
```

#### Tag the image and push it to Gitlab
```sh
$ docker tag image-name:verson gitlab-registry.cern.ch/db/hbackup-webapp-frontend/react-docker
$ docker push gitlab-registry.cern.ch/db/hbackup-webapp-frontend/react-docker
```

#### Openshift Deployment
```sh
$ oc login
$ oc new-app --docker-image="gitlab-registry.cern.ch/db/hbackup-webapp-frontend/react-docker" 
```

#### To switch between Openshift projects
```sh
To list the Projects 
$ oc projects
To switch to another project
$ oc project project-name 
```


### [React Tutorials](https://goo.gl/2VQfsS)

