class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :status, :notes, :dummy_msg

  #this just to illustrate active_model_serializers feature
  #make sure to list in attributes call above
  def dummy_msg
    puts "JUST HERE FOR FUN W #{object.first_name}"
  end
  
end
