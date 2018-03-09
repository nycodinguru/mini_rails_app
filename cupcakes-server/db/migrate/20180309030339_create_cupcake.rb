class CreateCupcake < ActiveRecord::Migration[5.1]
  def change
    create_table :cupcakes do |t|
      t.string :flavor
      t.string :size
      t.string :price

      t.belongs_to :location, index: true
    end
  end
end
