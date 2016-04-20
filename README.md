# Aethernet Application Manager
Application manager is a service responsible for managing applications by sending install, update, start, and stop requests to the application containers as well as routing application messages and events to the appropriate app container which forwards the events to the appropriate application or service.

The application manager also acts as the main entry point into the server; all clients connect to this service, which in turn acts as a smart reverse proxy by forwarding the requests appropriately.

## Screen Shot

![Screen Shot](https://github.com/aethernetio/app-manager/blob/master/ScreenShot1.png?raw=true)
