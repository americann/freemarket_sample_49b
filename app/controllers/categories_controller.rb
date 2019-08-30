class CategoriesController < ApplicationController
  
  def index
    @categories = Category.where(parent_id: nil)
  end

  def show
    parameter = params[:id].to_i

    @category = Category.find(parameter)

    parent_ids = @parent.pluck(:id)

    child_ids = []
    @parent.each { |parent| child_ids.concat(parent.children.pluck(:id)) }

    get_products(parent_ids, child_ids, parameter)
  end

  
  private

    def get_products(parent_ids, child_ids, parameter)
      all_products = Product.includes(category:{parent: :parent}).where.not(category_id: parent_ids + child_ids)
      
      @products = 
        if parent_ids.include?(parameter)
          all_products.select { |product|
            product.category.parent.parent.id == parameter
          }
        elsif child_ids.include?(parameter)
          all_products.select { |product|
            product.category.parent.id == parameter
          }
        else
          Product.where(category_id: parameter) || []
        end
    end
end
