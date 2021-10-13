#!/bin/bash

curl --include --request POST "http://tic-tac-toe-api-development.herokuapp.com/sign-up" \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "email": "ganja@white.nighf",
      "password": "duf",
      "password_confirmation": "duf"
    }
  }'

echo
