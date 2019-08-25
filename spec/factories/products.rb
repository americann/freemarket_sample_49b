FactoryBot.define do
  factory :product do
    name {"product"}
    description {"productです"}
    state {"新品"}
    postage {"送料こみ"}
    shipping_date {"2~3"}
    price {2000}
    size {"s"}
    association :user
    prefecture_id {1}
    association :category
    shipping_method {"ゆうゆうメルカリ便"}

  end
end
