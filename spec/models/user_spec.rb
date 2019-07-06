# # require 'rails_helper'

# # RSpec.describe User, type: :model do
# #   pending "add some examples to (or delete) #{__FILE__}"
# # end


require 'rails_helper'
describe User do 
  describe '#create' do
    it "is invalid without a email" do
      user =  User.new(email: "kkk@gmail.com", password: "00000000", password_confirmation: "00000000")
      user.valid?
      # expect(user.errors[:email]).to include("can't be blank")
    end
  end
end
