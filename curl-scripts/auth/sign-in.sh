#!/bin/bash

curl --include --request POST "http://tic-tac-toe-api-development.herokuapp.com/sign-in" \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "email": "ganja@white.night",
      "password": "dub"
    }
  }'

echo
