require 'rails_helper'

RSpec.describe Prefecture, type: :model do
 
  it 'returns a result of prefecture_id' do
    prefecture = FactoryBot.create(:prefecture)
    expect(prefecture.name).to eq("北海道")
  end

end
