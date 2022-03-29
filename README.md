# ⛰️ Decentraland Scene Test

This is a small proof of concept for testing the Decentraland SDK.  

The goal of this PoC was verifying the possibility of getting the logged in user data and making http requests in the scene.

In this scene, a logged in user (connected to Metamask) can interact with a TV that retrieves a pokemon name from [PokeAPI](https://pokeapi.co/) based on his wallet public key.

Note: other users can't see his pokemon.

## Demo

This scene is deployed on Heroku and can be accessed with the following link:

https://decentraland-scene-test.herokuapp.com/?position=0%2C0&realm=localhost-stub

To login with your metamask wallet and try out the pokemon discovery, access it with the following link:

https://decentraland-scene-test.herokuapp.com/?position=0%2C0&realm=localhost-stub&ENABLE_WEB3

## Images

![Logged in Screen](https://user-images.githubusercontent.com/16388408/160688111-27f52354-9246-49b1-9e19-a238a1ad7b37.png)

![Pokemon Result](https://user-images.githubusercontent.com/16388408/160688141-7f36dc83-a8a6-4940-a317-511de0b6ba8a.png)

![Logged Off](https://user-images.githubusercontent.com/16388408/160688196-382703e6-8f72-469b-85a0-5c5369671356.png)

## Setup and Development

* Clone this repository
* Install dependencies: `npm i`
* Install Decentraland CLI globally: `npm i -g decentraland`
* Preview the scene: `dcl start` or `npm run dev`
* Preview the scene with Web3: `dlc start --web3` or `npm run dev:web3`

## Deployment

### Decentraland

This project is not deployed to Decentraland yet.  
Read more about it on [Publishing a Scene](https://docs.decentraland.org/development-guide/publishing/).

### Heroku

The deployment is made to Heroku with Github Action.  
See [Upload a preview](https://docs.decentraland.org/development-guide/deploy-to-now/) for details.

## Resources

Learn more about how to build your own scenes in the [documentation](https://docs.decentraland.org/) site.

Find more example scenes, tutorials and helper libraries in the [Awesome Repository](https://github.com/decentraland-scenes/Awesome-Repository).

Join [Decentraland's Discord](https://dcl.gg/discord)
