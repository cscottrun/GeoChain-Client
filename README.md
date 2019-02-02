# GeoChain Client

GeoChain is a blockchain application for managing supply chains. Smartphones are used to scan barcodes and grab geolocation. Barcode data, geo coordinates, and timestamp are encoded and written to Factom blockchain
 

## Deployment link

https://geochain-server.herokuapp.com/

### This application currently contains the following api endpoints

* POST new scan to Factom blockchain and internal database
* GET all scan records from internal database
* POST to verify record from internal database with it's corresponding entry to Factom

### Security Vulnerabilities

routes.js contains Application ID, Application Keys, and the Chain ID for making writes to Factom. This should not be for public use. 

![alt text](https://github.com/cscottrun/GeoChain-Server/blob/master/diagram.jpg)

