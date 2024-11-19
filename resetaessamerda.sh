rm -rf node_modules
rm -rf android/build
rm -rf android/app/build
rm -rf android/.gradle 
rm -rf ios/build
rm -rf ios/Pods
rm -rf ios/Podfile.lock
npm cache clean --force
--watchman watch-del-all
npm i
npx react-native start --reset-cache
