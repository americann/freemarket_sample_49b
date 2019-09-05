require 'rails_helper'

describe ProductsController, type: :controller  do
  describe "GET #new" do
    it "renders the :new template" do
      get :new
      expect(response).to render_template :new
    end
  end

  describe "GET #edit" do
    before(:each) do
      grandchildren = Category.create(id:1316,name:"筆記用具",parent_id:151)
      children = Category.create(id:151,name:"文房具/事務用品",parent_id:13)
      parent = Category.create(id:13,name:"その他",parent_id:nil)
      @product = FactoryBot.create(:product)
      @children = @product.category.parent.parent.children
      @grandchildren = @product.category.parent.children
      @product.images.attach(io: File.open("app/assets/images/products/bag1.jpg"),filename: "bag1.jpg")
      sign_in @product.user
    end
  
    it "assigns the requested product to @product" do
      get :edit,params:{id:@product}
      expect(assigns(:product)).to eq @product
    end

    it "renders the :edit template" do
      get :edit, params: { id: @product }
      expect(response).to render_template :edit
    end

    it "assigns the requested product to @product" do
      get :edit,params:{id:@product}
      expect(@product.images).to_not be_empty
    end
  end
end

