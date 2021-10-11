curl --include --request PATCH 'http://tic-tac-toe-api-development.herokuapp.com/change-password' \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "passwords": {
      "old": "dub",
      "new": "ddd"
    }
  }'
