# szeremi
Source code for Attila Szeremi's portfolio website

Follows atomic design: http://patternlab.io/

## License

MIT

## Requirements

`node` and `npm` need to have been installed.

## Installation

```sh
# 1. Clone the repository. Example ~/szeremi local folder used here.
git clone https://github.com/amcsi/szeremi ~/szeremi

# 2. Go into the directory to where you cloned the project.
cd ~/szeremi

# 3. Install the dependencies.
npm install
```

## Running

```sh
npm run dev-server
```

You should now be able to access the website on http://localhost:3000/

### Docker

This project can be run with Docker.

It's also suggested to run the systemd file to run the project as a service.
It can be found in [configs/szeremi.service](configs/szeremi.service)

To make the service start automatically on system boot, run `sudo systemctl enable szeremi.service` once the service file has been copied over to the right systemd folder.

## Contributing

This project follows the [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript)
