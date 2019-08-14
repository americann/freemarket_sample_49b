# class User < ApplicationRecord

class User < ActiveRecord::Base
  validates :nickname, presence: true
  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :firstname_kana, presence: true
  validates :lastname_kana, presence: true
  validates :birthday, presence: true

  VALID_EMAIL_REGEX =  /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i 
  validates :email, uniqueness: true 
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,:omniauthable,omniauth_providers:  %i(google facebook)
         
  has_many :products

  has_one :address
  accepts_nested_attributes_for :address

  has_one :card
  accepts_nested_attributes_for :card



  protected
  def self.find_for_google(auth)
    user = User.find_by(email: auth.info.email)

    unless user
      user = User.new(
                         provider: auth.provider,
                         uid:      auth.uid,
                         email: auth.info.email,
                         password: Devise.friendly_token[0, 20],
                        )
                        user.save(:validate => false)

    end
    user
  end
  
  

  def self.find_for_oauth(auth)
    user = User.where(uid: auth.uid, provider: auth.provider).first
 
    unless user
      user = User.new(
        uid: auth.uid,
        provider: auth.provider,
        email: auth.info.email,
        password: Devise.friendly_token[0, 20]
      )
       user.save(:validate => false)
    end
    user
  end

end
