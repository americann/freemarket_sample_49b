FactoryBot.define do
  factory :address do

    association :user

    zip_code {Faker::Address.zip_code}
    prefecture_id {Faker::Address.city}
    city {Faker::Address.city}
    block {Faker::Address.building_number}
    
  end
end
