exports.mapToDTO= function(apiResponse){
    return {
        food_name: apiResponse.food_name,
        brand_name: apiResponse.brand_name,
        serving_qty: apiResponse.serving_qty,
        serving_unit: apiResponse.serving_unit,
        calories: apiResponse.nf_calories,
        totalFat: apiResponse.nf_total_fat,
        saturatedFat: apiResponse.nf_saturated_fat,
        cholesterol: apiResponse.nf_cholesterol,
        sodium: apiResponse.nf_sodium,
        carbs: apiResponse.nf_total_carbohydrates,
        fiber: apiResponse.nf_dietary_fiber,
        sugar: apiResponse.nf_sugars,
        protein: apiResponse.nf_protein,
        potassium: apiResponse.nf_potassium,
        nix_item_id: apiResponse.nix_item_id,
        //brand_name_item_name: apiResponse.brand_name_item_name
    };
}

exports.mapListToDTO= function(apiResponse){
    return {
        
    }
}