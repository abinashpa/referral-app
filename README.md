# README

### Things you may want to cover:

* Ruby version: 3.0.1
* Rails version: 7.0.1

- Required nvm, rbenv and mysql.

### Setup
- Add `database.yml` file to `config/database.yml`
```yml
default: &default
  adapter: mysql2
  encoding: utf8mb4
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  username: root
  password:
  socket: /tmp/mysql.sock

development:
  <<: *default
  database: assessment_development

test:
  <<: *default
  database: assessment_test

production:
  <<: *default
  database: assessment_production
  username: assessment
  password: <%= ENV["ASSESSMENT_DATABASE_PASSWORD"] %>

```
- Add the `master.key` file to `config` folder
- Run the below command.
```bash
bin/setup
```

- Run the app (It will start the rails server then after 5 seconds it will start the webpack server)
```bash
bin/div
```
[Postman Collection](https://api.postman.com/collections/8935260-eb140ec4-b530-4112-a8ef-12d1d862500a?access_key=PMAT-01H62M6S8Q94HYS4FZM8183194)
