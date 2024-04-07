interface BrandDTO {
    food_name: string;
    brand_name: string;
    serving_qty: string;
    serving_unit: string;
    calories: number;
    totalFat: number;
    cholesterol: number;
    sodium: number;
    carbs: number;
    fiber: number;
    sugar: number;
    protein: number;
    nix_item_id: string;
    brand_name_item_name: string;


}

function mapToDTO(apiResponse: any): BrandDTO{
    return {
        food_name: apiResponse.food_name,
        brand_name: apiResponse.brand_name,
        serving_qty: apiResponse.serving_qty,
        serving_unit: apiResponse.serving_unit,
        calories: apiResponse.calories,
        totalFat: apiResponse.totalFat,
        cholesterol: apiResponse.cholesterol,
        sodium: apiResponse.sodium,
        carbs: apiResponse.carbs,
        fiber: apiResponse.fiber,
        sugar: apiResponse.sugar,
        protein: apiResponse.protein,
        nix_item_id: apiResponse.nix_item_id,
        brand_name_item_name: apiResponse.brand_name_item_name
    };
}

module.exports = mapToDTO;