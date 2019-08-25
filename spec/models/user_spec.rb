require 'rails_helper'

RSpec.describe User, type: :model do
  it 'is invalid withhout a nickname' do
    user = User.new(nickname: nil)
    user.valid?
    expect(user.errors[:nickname]).to include("を入力してください")
  end

  it 'is invalid withhout a email' do
    user = User.new(email: nil)
    user.valid?
    expect(user.errors[:email]).to include("が入力されていません。")
  end

  it 'is invalid withhout a password' do
    user = User.new(password: nil)
    user.valid?
    expect(user.errors[:password]).to include("が入力されていません。")
  end

  it 'is invalid withhout a firstname' do
    user = User.new(firstname: nil)
    user.valid?
    expect(user.errors[:firstname]).to include("を入力してください")
  end

  it 'is invalid withhout a lastname' do
    user = User.new(lastname: nil)
    user.valid?
    expect(user.errors[:lastname]).to include("を入力してください")
  end

  it 'is invalid withhout a firstname_kana' do
    user = User.new(firstname_kana: nil)
    user.valid?
    expect(user.errors[:firstname_kana]).to include("を入力してください")
  end

  it 'is invalid withhout a lastname_kana' do
    user = User.new(lastname_kana: nil)
    user.valid?
    expect(user.errors[:lastname_kana]).to include("を入力してください")
  end

  it 'is invalid withhout a birthday' do
    user = User.new(birthday: nil)
    user.valid?
    expect(user.errors[:birthday]).to include("を入力してください")
  end

  it 'is valid with nickname , email, password, firstname, lastname, firstname_kana, lastname_kana,and birthday' do
    
    user = FactoryBot.create(:user)
    expect(user).to be_valid
  end
  
  it 'is invalid with duplicate email' do

    User.create(
      nickname:"メルカリたろう",
      email:"merucari@gmail.com",
      password:"yuki0401",
      firstname:"田中",
      lastname:"太郎",
      firstname_kana:"タナカ",
      lastname_kana:"タロウ",
      birthday:"2000-04-01",
    )

    user = User.new(
      nickname:"メルカリたろう",
      email:"merucari@gmail.com",
      password:"yuki0401",
      firstname:"田中",
      lastname:"太郎",
      firstname_kana:"タナカ",
      lastname_kana:"タロウ",
      birthday:"2000-04-01",
    )
    user.valid?
    expect(user.errors[:email]).to include("は既に使用されています。")
  end

  


end
