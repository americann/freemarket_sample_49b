## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|unique: true, null: false|
|password|string|null: false|
|first_name|string|null: false|
|last_name|string|null: false|
|first_name_kana|string|null: false| 
|last_name_kana|string|null: false| 
|nickname|string|null: false| 
|birthday|date|null: false|

### Association
- has_many :reviews
- has_many :comments
- has_many :deal_messages
- has_many :likes
- has_one :card
- has_many :products
- has_one :profile
- has_many :addresses

## profilesテーブル
|Column|Type|Options|
|------|----|-------|
|address|string|
|image|string|
|text|text| 
|phone_number|integer|
|user_id|references|foreign_key: true| 

### Association
- belongs_to :user


## addressesテーブル
|Column|Type|Options|
|------|----|-------|
|zip_code|integer|null: false|
|prefecture_id|references|foreign_key: true|
|city|string|null: false|
|block|string|null: false|
|building_number|string|null: false|

### Association
- belongs_to :user
- belongs_to :prefecture


## productsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|description|text|null: false|
|state|string|null: false|
|postage|string|null: false|
|prefecture_id|references|foreign_key: true|
|shipping_date|string|null: false|
|price|interger|null: false|
|user_id|references|null: false, foreign_key: true|
|size|string|

### Association
- belongs_to :user
- belongs_to :category
- belongs_to :prefecture
- has_many :photos
- has_many :comments
- has_many :deal_messages
- has_many :likes


## prefecturesテーブル
|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|

### Association
- has_many :addresses
- has_many :products


## categoriesテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|ancestry|||

### Association
- has_many :products


## photosテーブル

|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
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


## likesテーブル
|Column|Type|Options|
|------|----|-------|
|product_id|references|null: false,foreign_key: true|
|user_id|references|null: false,foreign_key: true|

### Association
- belongs_to :user
- belongs_to :product



