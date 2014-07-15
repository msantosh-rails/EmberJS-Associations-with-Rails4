class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :project_name, :technology, :user_id
end
