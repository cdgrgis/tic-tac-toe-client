#!/bin/bash

curl --include --request POST "http://tic-tac-toe-api-development.herokuapp.com/sign-up" \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "email": "ganja@white.night",
      "password": "dub",
      "password_confirmation": "dub"
    }
  }'

echo
