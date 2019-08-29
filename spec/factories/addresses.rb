FactoryBot.define do
  factory :address do

    association :user

    zip_code {5520012}
    prefecture_id {1}
    city {"大阪市港区"}
    block {"3-3-3"}
    
  end
end
