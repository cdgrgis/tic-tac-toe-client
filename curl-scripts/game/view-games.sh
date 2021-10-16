#!/bin/bash

curl --include --request GET "http://tic-tac-toe-api-development.herokuapp.com/games" \
  --header "Authorization: Bearer ${TOKEN}"

echo
