#!/bin/bash
set -e

source .env
branch="$1"

if [ -n "$branch" ]; then

   git push origin "$branch" | (
      if [ -n "$WEBHOOK_URL" ]; then
         if [ -f "commit.txt" ]; then
            escaped_content=$(cat commit.txt | sed ':a;N;$!ba;s/\n/\\n/g' | sed 's/"/\\"/g')

            $( curl -H "Content-Type: application/json" \
               -d "{\"username\": \"commit\", \"content\": \"$escaped_content\"}" \
               "$WEBHOOK_URL") |
            rm -rf commit.txt
         fi
      else
         echo "Discord not defined unable to send"
         exit 0
      fi
   )

fi


