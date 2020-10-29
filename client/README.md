# Client setup
* Setup API url using environment variables
  * Unix-like systems `export VUE_APP_API_URL=https://...`
  * Powershell `$env:VUE_APP_API_URL='https://...'`
* Build for production using `npm run build`
* Deploy on any static file server :rocket:

# :whale: Docker client setup
* Copy `.env.sample` to `.env` and update `CLIENTPORT` and `VUE_APP_API_URL`
* `docker-compose -f "docker-compose.yml" up -d --build client`

# Android build (using Capacitor)
* Setup env variable `VUE_APP_API_URL` to your API url
* Build using `npm run build`
* Add android platform using `npx cap add android`
* Run `npx cap open android` to launch Android Studio and build
