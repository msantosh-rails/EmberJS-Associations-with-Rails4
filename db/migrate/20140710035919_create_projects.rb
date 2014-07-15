class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :project_name
      t.string :technology
      t.integer :user_id
    end
  end
end
