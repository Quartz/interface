#!/bin/bash

if [ -z "$1" ] || [ -z "$2" ]; then
	echo "Please provide a source and target component name:"
	echo "npm run copy OldComponent NewComponent"
	exit 1
fi

mkdir -p "./src/components/$2"

files=(
	'docs.mdx'
	'jsx'
	'scss'
	'story.jsx'
	'test.js'
)
for file in "${files[@]}"; do
	source="./src/components/$1/$1.$file"
	dest="./src/components/$2/$2.$file"

	if [ ! -f "$source" ]; then
		echo "$1.$file does not exist, skipping...."
	elif [ -f "$dest" ]; then
		echo "$2.$file already exists, skipping...."
	else
		sed -e "s/$1/$2/g" "$source" > "$dest"
	fi
done

