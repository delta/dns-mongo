<!-- prettier-ignore -->
versions list
strict mode is enabled by default refer: https://dev.to/briwa/how-strict-is-typescript-s-strict-mode-311a
use try catch
centralised logging with bunyan
    - by default requests are logged in info level
    - by default all error+ are logged
    - use different named loggers in different modules refer  general controller
    - alias bunyan=node_modules/.bin/bunyan
    - bunyan filename
baseurl
use prettier
static files are available under /static
take a copy of general controller to create new controllers
send exceptions using next
validating incoming data
    - skip missing properties
    - optional
Register the controller 
config
    - make prodcution config
use cors on specific routes

TODO: Clean imports - linting hooks - imports ordering guide etc
