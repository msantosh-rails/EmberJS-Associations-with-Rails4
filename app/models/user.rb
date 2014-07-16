class User < ActiveRecord::Base
#  rolify

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :projects, :dependent => :destroy

#  def admin?
#    has_admin_role = has_role? :admin
#    p "is admin: #{has_admin_role}"
#    has_admin_role
#  end

end
