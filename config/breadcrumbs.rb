crumb :root do
  link "メルカリ", root_path
end

crumb :categories do
  link "カテゴリー一覧", categories_path
end

crumb :parent_category do |parent_category|
  link parent_category.name, category_path(parent_category)
  parent :categories
end

crumb :child_category do |child_category|
  link child_category.name, category_path(child_category)
  parent :parent_category, child_category.parent
end

crumb :grand_child_category do |grand_child_category|
  link grand_child_category.name, category_path(grand_child_category)
  parent :child_category, grand_child_category.parent
end

crumb :mypage do
  link "マイページ", users_path
end

crumb :mypage_edit do
  link "プロフィール", edit_user_path
  parent :mypage
end

crumb :pay do
  link "支払い方法", cards_path
  parent :mypage
end

crumb :card_new do
  link "クレジットカード情報入力", new_card_path
  parent :pay
end

crumb :exhibit do
  link "出品した商品-出品中", exhibit_product_path
  parent :mypage
end

crumb :business do
  link "出品した商品-取引中", business_product_path
  parent :mypage
end

crumb :finish do
  link "出品した商品-売却済み", finish_product_path
  parent :mypage
end

crumb :exhibit_show do
  link "出品商品画面", detail_product_path
  parent :exhibit
end

crumb :mypage_identification do
  link "本人情報の登録", identification_user_path
  parent :mypage
end

crumb :mypage_logout do
  link "ログアウト", logout_user_path
  parent :mypage
end


crumb :mypage_show do |user|
  link user.nickname, user_path(user)
end

# crumb :project_issues do |project|
#   link "Issues", project_issues_path(project)
#   parent :project, project
# end

# crumb :issue do |issue|
#   link issue.title, issue_path(issue)
#   parent :project_issues, issue.project
# end

# If you want to split your breadcrumbs configuration over multiple files, you
# can create a folder named `config/breadcrumbs` and put your configuration
# files there. All *.rb files (e.g. `frontend.rb` or `products.rb`) in that
# folder are loaded and reloaded automatically when you change them, just like
# this file (`config/breadcrumbs.rb`).
