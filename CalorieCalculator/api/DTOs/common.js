exports.mapToDTO= function(apiResponse){
    return {
        food_name: apiResponse.food_name,
        serving_qty: apiResponse.serving_qty,
        serving_unit: apiResponse.serving_unit
    };
}

// exports.mapListToDTO= function(apiResponse){
//     return {
//         food_name: apiResponse.food_name,
//         seving_unit: apiResponse.serving_unit,
//         serving_qty: apiResponse.serving_qty
//     }
// }