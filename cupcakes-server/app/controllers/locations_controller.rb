class LocationsController < ApplicationController
  def index
    locations = Cupcake.all
    render json: locations
  end

  def create
    location = Cupcake.create!(location_params)
    render json: location
  end

  def show
    location = Cupcake.find(params[:id])
    render json: location
  end

  def update
    location = Cupcake.find(params[:id])
    location.update!(location_params)
    render json: location
  end

  def show
    location = Cupcake.find(params[:id])
    location.destroy!
    render plain: "Cupcake ELIMINATED"
  end

  private

  def location_params
    params.require(:location).permit(:flavor, :size, :price, :location)
  end
end
