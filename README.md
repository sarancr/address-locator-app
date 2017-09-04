# Locate Physician Address

## Objective

Develop a app to locate the physician address on Google Map.

## Design / Implementation

Developed a nodejs application which has API and client code

### API 
 - Parses the physician csv file and stores it into an array during application startup
 - Listens for http request on specific port
 - When new request comes to API /address with physician first name, middle name, last name, it finds the address in array and responds back to the client.

### Client
 - Client code has been placed under public/index.html
 - Developed using HTML, CSS, JavaScript, AJAX, and Google MAPS API
 - Client code calls server API /address to find out the physician address by sending First Name, Middle Name, Last Name.

## Test Data
```sh
FirstName  MiddleName LastName
Kirk	Alan	Kaiser
Brett	Gordon	Menmuir
Rafael		Neiman
John	William	Staeheli
Michael	J	Bosse
Thomas	M	Large
Alan	T	Kawaguchi
Michael		Handy
Steven	H	Ryder
John	Eric	Zebrack
Anthony	N	Brown
```
 
## Summary
Able to successfully designed and implemented physician locate application using NodeJs, Express, and HTML, JavaScript.
