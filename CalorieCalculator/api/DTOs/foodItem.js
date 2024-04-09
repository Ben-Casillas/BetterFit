exports.mapToDTO= function(apiResponse, amount){
    return {
        food_name: apiResponse.food_name,
        brand_name: apiResponse.brand_name,
        serving_qty: apiResponse.serving_qty,
        serving_unit: apiResponse.serving_unit,
        calories: apiResponse.nf_calories*amount,
        totalFat: apiResponse.nf_total_fat*amount,
        saturatedFat: apiResponse.nf_saturated_fat*amount,
        cholesterol: apiResponse.nf_cholesterol*amount,
        sodium: apiResponse.nf_sodium*amount,
        carbs: apiResponse.nf_total_carbohydrates*amount,
        fiber: apiResponse.nf_dietary_fiber*amount,
        sugar: apiResponse.nf_sugars*amount,
        protein: apiResponse.nf_protein*amount,
        potassium: apiResponse.nf_potassium*amount,
        nix_item_id: apiResponse.nix_item_id,
        //brand_name_item_name: apiResponse.brand_name_item_name
    };
}

exports.mapListToDTO= function(apiResponse){
    return {
        brand_name: apiResponse.brand_name,
        food_name: apiResponse.food_name,
        seving_unit: apiResponse.serving_unit,
        serving_qty: apiResponse.serving_qty,
        nix_brand_id: apiResponse.nix_brand_id,
        calories: apiResponse.nf_calories,
    }
}