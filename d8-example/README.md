## Setup

1. git clone git@github.com:AmazeeLabs/demo_cypress.git
2. cd d8-example && dup
3. yarn install && composer install
4. docker-compose exec cli bash 
5. drush site:install

or use db dump

6. gunzip unami-db.sql.gz | drush sqlc

## Using '\/__test\__' directory

cd __tests__

yarn install


## Using the Cypress module

drush en cypress -y

drush cypress:run
