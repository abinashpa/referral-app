# frozen_string_literal: true

json.message t("signup.success")
json.user do
  json.id current_user.id
  json.firstName current_user.first_name
  json.lastName current_user.last_name
  json.email current_user.email
end
