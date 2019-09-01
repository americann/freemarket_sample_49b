class UsersController < ApplicationController

def new
end

def index
end

def show
end

def edit
end

def identification
  @user = User.find(current_user.id)
end


def complete
  @user = User.find(current_user.id)
end

def logout
  # @user = User.new
end

end