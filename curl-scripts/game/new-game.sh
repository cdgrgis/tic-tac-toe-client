#!/bin/bash

curl --include --request POST 'http://tic-tac-toe-api-development.herokuapp.com/games' \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json"
  --data '{}'
