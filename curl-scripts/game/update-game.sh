#!/bin/bash

curl --include --request PATCH "http://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": "0",
        "value": "x"
      },
      "over": "false"
    }
  }'

echo
