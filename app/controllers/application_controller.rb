class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :basic_auth, if: :production?
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :create_parent_categories

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname,:firstname,:lastname,:firstname_kana,:lastname_kana,:birthday,:password,:password_confirmation])
  end

  private

  def production?
    Rails.env.production?
  end

  def basic_auth
    authenticate_or_request_with_http_basic do |username, password|
      username == ENV["BASIC_AUTH_USER"] && password == ENV["BASIC_AUTH_PASSWORD"]
    end
  end

  def create_parent_categories
    @parent = Category.where(parent_id: nil)
  end
end
