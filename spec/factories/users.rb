FactoryBot.define do
  factory :user do
    nickname {"メルカリ"}
    sequence(:email) {|n|"merucari#{n}@gmail.com"}
    password {"yuki0401"}
    firstname {"中野"}
    lastname {"雪"}
    firstname_kana {"ナカノ"}
    lastname_kana {"ユキ"}
    birthday {"1996-04-01"}
  end
end
