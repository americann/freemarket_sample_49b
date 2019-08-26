module ApplicationHelper
  def check_request_path(*str)
    path = controller.controller_path + "#" + controller.action_name
    str.map { |s| path.include?(s)}.include?(true)
  end
end
