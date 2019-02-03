# GeoChain Client

As our world economy becomes increasingly interdependent, our supply chains grow more complex and difficult to recount. It’s incredibly difficult for customers or buyers to truly know the value of products because there is a significant lack of transparency in our current systems. To bring honesty to supply chain we need to know where something was at a given time, and that everyone is telling the truth. GeoChain provides a complete supply chain management solution allowing major shipping and logistics players to benefit from a shared ledger written to the Factom blockchain. When a record is written to Factom, it’s validated by the largest blockchain networks including Factom, Ethereum and Bitcoin -- making it impossible to lie about the past. 

GeoChain uses smartphones to scan barcodes and collect geo coordinates and timestamp at the scanning event. These data points are written to the Factom Blockchain, and Factom provides an entry hash as a receipt. The barcode data, geo coordinates, timestamp and Factom Entry hash are then recorded in an internal database. Users may then use the GeoChain web client to query entries and validate the record against the entry that was made to Factom at the time of scanning. If the database is ever compromised and a record is changed, everyone will know!
 
## Tech Stack
* Postgresql
* Express
* Node.js
* Factom Harmony
* React.js
* React Native

![alt text](https://github.com/cscottrun/GeoChain-Server/blob/master/diagram.jpg)

### Challenges and Triumphs  
* Writing to Factom was surprisingly easy. Thanks goes out to them for the solid documentation and examples that helped me properly format my http request. 
* Also grateful for the amazing Expo library for React Native I used to scan barcodes and get geo coordinates.
* Throughout building the system I found myself making design decisions about which component should handle requests to Factom. With an eye to future scalability and security I provided only the server with the credentials needed to interact with Factom, and wrote all interactions to pass through the server.

### Feature Backlog
This system was conceptualized and built over the course of 1 week. Given more time I would implement the following features: 
* Scanning devices should require login 
* Each scanning device should create its own Factom chain upon registration and write only to this chain. This will lead to better data organization and more efficient audits.
* More search and filter capabilities for web client
* Provide multiple levels of authorization for web client queries

## Using this App
You do not need to do anything to use the backend of this application, as the backend is deployed.  <br />
Web client can be accessed at […] or spun up locally by following the steps listed below <br />
You will need to run the mobile client locally
* Fork and clone this repo
Mobile
* Install Expo Client on your smartphone. Can be found in App store or Google Play Store
* `cd GeoChain-Client/GeoClient/mobile`
* `npm install`
* if you do not have expo cli installed, `npm install expo-cli`
* `expo start`
* Expo Cli will open a browser window. Here you can send yourself a link to the project via SMS
* Start scanning!
Web
* `cd GeoChain-Client/GeoClient/web`
* `npm install`
* `npm start`
* open browser to localhost:3000

### Special Thanks
* Factom for subsidizing my subscription
* Carl at Factom for advocating on behalf of this application
* Abhi at Factom for providing feedback mid-way through the sprint
* Harold Scott at Thoroughbred Technologies for inspiring me to utilize the power of the barcode


