class Api::BenchesController < ApplicationController

    def index 
        
        @benches = Bench.in_bounds(params[:bounds])
        # @benches = Bench.all
        render :index
    end

    def create
        @bench = Bench.new(bench_params)
        if @bench.save
            render json: @bench
        else
            render json: @benches.errors.full_messages
        end
    end

    private
    def bench_params
        params.require(:bench).permit(:description, :lat, :lng)
    end
end
