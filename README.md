## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|unique: true, null: false|
|password|string|null: false|
|first_name|string|null: false|
|last_name|string|null: false|
|first_name_kana|string|null: false| 
|last_name_kana|string|null: false| 
|birthday|date|null: false|
|address|string|
|image|string|
|text|text| 
|phone_number|integer|

### Association
- has_many :reviews
- has_many :comments
- has_many :deal_messages
- has_many :likes
- has_one :card


## productsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|description|text|null: false|
|state|integer|null: false|
|postage|integer|null: false|
|region|integer|null: false|
|shipping_date|integer|null: false|
|price|interger|null: false|
|seller_id|references|null: false, foreign_key: true|
|buyer_id|references|foreign_key: true| 
|size|integer|

### Association
- belongs_to :user
- has_many :photos
- has_many :comments
- has_many :deal_messages
- has_many :likes


## categoriesテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|ancestry|||

### Association
- belongs_to :product


## photosテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|product_id|references|null: false,foreign_key: true|

### Association
- belongs_to :product


## cardsテーブル

|Column|Type|Options|
|------|----|-------|
|card_number|integer|unique: true, null: false|
|expiration_date|data|null: false| 
|security_cord|integer|null: false|

### Association
- belongs_to :user


## reviewsテーブル

|Column|Type|Options|
|------|----|-------|
|rate|integer|null: false|
|text|string|
|product_id|references|null: false,foreign_key: true|


### Association
- belongs_to :user


## commentsテーブル(購入前)

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|references|null: false, foreign_key: true|
|product_id|references|null: false,foreign_key: true|

### Association
- belongs_to :user
- belongs_to :product


## deal_messagesテーブル(購入後)

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|product_id|reference|null: false,foreign: true|

### Association
- belongs_to :user
- belongs_to :product
|------|----|-------|
|product_id|references|null: false,foreign_key: true|
|user_id|references|null: false,foreign_key: true|

### Association
- belongs_to :user
- belongs_to :product



