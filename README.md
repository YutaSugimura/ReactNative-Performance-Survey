# ReactNative-Performance-Survey


## Startup time comparison between conventional engine and hermes(iOS)
Use react-native-startup-time to measure startup time.
[react-native-startup-time](https://github.com/doomsower/react-native-startup-time)

### Hermes Engine
#### default import
startup time: 1323ms(Average of 10 trials)


#### inline requires
startup time: 1199.9ms(Average of 10trials)


### Conventional Engine
#### default import
startup time: 1435.2ms(Average of 10trials)


#### inline requires
startup time: 1442ms(Average of 10trials)


## Comparison of app size and memory usage between conventional engine and Hermes engine
I won't know the exact size until I upload it to the App Store.

### App Size
#### Conventional Engine
- App 19.2MB + main.jsbundle: 732KB
- dSYM
  - xxx.app.dSYM: 29.3MB

#### Hermes Engine
- App 23.5MB + main.jsbundle: 889KB
- dSYM
  - hermes.framework.dSYM: 142.7MB
  - xxx.app.dSYM: 44.4MB

### Usage Memory
#### Conventional Engine
143.4MB

#### Hermes Engine
118.3MB
