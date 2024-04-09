exports.mapToDTO= function(apiResponse){
    return {
        food_name: apiResponse.food_name,
        serving_qty: apiResponse.serving_qty,
        serving_unit: apiResponse.serving_unit
    };
}