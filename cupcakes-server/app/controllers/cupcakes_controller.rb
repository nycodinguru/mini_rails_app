class CupcakesController < ApplicationController
  def index
    cupcakes = Cupcake.all
    render json: cupcakes
  end

  def create
    cupcake = Cupcake.create!(cupcake_params)
    render json: cupcake
  end

  def show
    cupcake = Cupcake.find(params[:id])
    render json: cupcake
  end

  def update
    cupcake = Cupcake.find(params[:id])
    cupcake.update!(cupcake_params)
    render json: cupcake
  end

  def destroy
    cupcake = Cupcake.find(params[:id])
    cupcake.destroy!
    render plain: "Cupcake ELIMINATED"
  end

  private

  def cupcake_params
    params.require(:cupcake).permit(:flavor, :size, :price, :location_id)
  end
end
