#!/bin/bash

function main() {
 changeHtml
}                                                                                                           function get_json() {                                  local api_json=$(curl -s "https://raw.githubusercontent.com/henriquepb/populacao-brasil-api/main/populacao.json" | jq '.populacao.valor')
 echo $api_json   
}

function changeHtml() {
 readonly local file=~/html/pasta/index.html
 local _value=$(get_json)
 local command_sed=$(sed -i 's/[0-9]\{3,\}/'"$_value"'/g' $file )
}

main
