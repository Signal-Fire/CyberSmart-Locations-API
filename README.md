# CyberSmart-Locations-API
###### An API for the managing of Locations in a Smart Home network

## CyberSmart
CyberSmart is a system designed to control and manage locations within your home by utilising a range of low cost hardware and Open Source Software solutions. The project was initially started as a University Project. 
We set out to provide a solution for low-cost home automation. The very first goal of this project was to provide a switch in a browser or in an app, that could control a lamp within the home. This has been achieved using Node for backend Operations, Python scripts for interaction with GPIO pins and Linux based operating systems to run it on. The User Interface has been provided using ReactJS. The project has been designed, utilising Microservices. Each aspect of the system operates as a Microservice.

#### A big thanks to the following projects and people, without them, CyberSmart would not be possible.
* [NodeJS](https://nodejs.org/en/) - For creating a fast, lightweight solution for RESTful web servers! All APIs have been developed in Node. 
* [ReactJS](https://reactjs.org/) - For creating an easy to work with UI design solution. The Frontend design has been developed in ReactJS.
* [Python](https://www.python.org/) - For hardware level interaction (GPIO pins).
* [Raspberry Pi Foundation](https://www.raspberrypi.org/about/) - For consistently providing great quality hardware at brilliant prices! All CyberSmarts Nodes use the [Raspberry Pi Zero](https://www.raspberrypi.org/products/raspberry-pi-zero/), running [Jessie Pixel Headless](https://www.raspberrypi.org/blog/introducing-pixel/) and the main hub uses a [Raspberry Pi 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)
* [Lubuntu](https://lubuntu.net/) - For creating a neat, lightweight OS solution. The main hub uses Lubuntu.

### CyberSmart Related Repositories
* [Locations API](https://github.com/UniversityGroup/CyberSmart-Locations-API) - For handling of Locations
* [Devices API](https://github.com/UniversityGroup/CyberSmart-Devices-API) - For the handling of Devices
* [Mobile App](https://github.com/UniversityGroup/CyberSmart-Mobile-App) - For the Mobile App
* [Database](https://github.com/UniversityGroup/CyberSmart-DB) - CyberSmart Database
* [User Interface](https://github.com/UniversityGroup/CyberSmart-React-UI) - CyberSmart User Interface 
* [Node](https://github.com/UniversityGroup/CyberSmart-Node) - CyberSmart Nodes (Plugs)

### Contributors
* [The Slackers](https://github.com/UniversityGroup) - Group Name
* [Signal-Fire](https://www.github.com/Signal-Fire) - Lead Developer
* [DeanoLingardo](https://github.com/DeanoLingardo) - UI Design & Development
* [Brandon P](https://github.com/brandonjamesparkinson) - App Development
* [Jafoolly](https://github.com/Jafoolly) - UX & Hardware Design
* [gilesbain](https://github.com/gilesbain) - AI & Data Analysis

## Documentation
### Routes
#### Find
##### route.get('/all', function(req, res)
This route returns all Locations in the given database context. It takes no parameters. 
The possible returns are:
* `200 - OK` : This means the request was successful. It should return an array of JSON Objects with all Locations in the database. 
* `404 - Not Found` : This means the request failed or no Locations were found.
* `500 - Server Error` : This means something went wrong with the function being called in the controller.

##### route.get('/location', function(req, res)
This route returns all Locations within a given location. It takes one parameter, Location name. 
The possible returns are:
* `200 - OK` : This means the request was successful. It should return an array of JSON Objects with all Locations in the given location.
* `404 - Not Found` : This means the request failed or no Locations were found in the location.
* `500 - Server Error` : This means something went wrong with the function being called in the controller.

##### route.get('/:id', function(req, res) 
This route finds a Location by its ID. It takes on parameter, ID, which must be passed in in the format `/<id>` in the URL.
The possible returns are:
* `200 - OK` : This means the request was successful. It should return a JSON Object containing information about the Location with the ID requested.
* `404 - Not Found` : This means the request failed or no Location with the ID requested were found.
* `500 - Server Error` : This means something went wrong with the function being called in the controller.

#### Insert
##### route.post('/add', function(req, res) 
This route inserts a new Location into the database. It can take five parameters. These are:
* `name`:
    - `String`
    - `Required`
* `state`:
    - `Number`
    - `Required`
    - `Default` : `0`
* `active`:
    - `Boolean`
    - `Required`
    - `Default` : `0`
* `date_added`:
    - `Date`
    - `Default` : Date.now
The possible returns are:
* `201 - Created` : This means a new entry was created in the Location table of the database.
* `401 - Unauthorized` : This means the request was unauthorized and the Location was not inserted into the database.
* `500 - Server Error` : This means the request failed, resulting in a Server Error.

#### Insert
#### Delete
##### route.post('/delete', function(req, res) 
This route calls the delete Location function in the Delete handler. The possible parameters are:
* `_id` : The ID of the Location being deleted
The possible returns are:
* `200 - OK` - The function executed successfully, resulting in the deletion of a Location.
* `401 - Unauthorized` : This means the request was unauthorized, meaning something went wrong.
* `500 - Server Error` : This means something went wrong with the delete function, resulting in a server crash.

### Handlers
#### Find
##### FindAll()
This method searches the database for all Locations. If none found or an error, it rejects the request.
It takes no parameters.
If the request succeeds, all Locations in the database will be returned.

##### FindById(id)
This method searches the database for any Locations matching the ID of the id parameter.
If no Locations are found or an error occurs, the request is rejected.
If the request succeeds, the Location matching that ID will be returned.

#### Insert
##### AddLocation(Location)
This method adds a Location to the database, given a Location object. The Location object is then parsed into a newLocation object.
If it fails to add a Location to the database, the request is rejected and the method fails.
If the request succeeds, it will return the created Location.

#### Update
##### UpdateStateById(id, state)
This method finds a Location given an ID and updates the state. If no Location is found or an error occurs, the request is rejected.
If the request succeeds, it will return the Location matching the given ID and its updated state.

#### Delete
##### Location(id)
This method finds a Location given an ID and deletes it. If there is an error during execution or the result is null, the method fails and is rejected.
If the method executes correctly, it sets active to false on the given Location.