const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbCollection = 'Final_products';

const ProduitFinalSchema = new Schema({
  "code": {
    "type": "Number"
  },
  "url": {
    "type": "String"
  },
  "product_name": {
    "type": "String"
  },
  "generic_name": {
    "type": "String"
  },
  "quantity": {
    "type": "String"
  },
  "packaging": {
    "type": "String"
  },
  "packaging_tags": {
    "type": "String"
  },
  "brands": {
    "type": "String"
  },
  "brands_tags": {
    "type": "String"
  },
  "categories": {
    "type": "String"
  },
  "categories_tags": {
    "type": "String"
  },
  "origins": {
    "type": "Mixed"
  },
  "origins_tags": {
    "type": "Mixed"
  },
  "manufacturing_places": {
    "type": "Mixed"
  },
  "manufacturing_places_tags": {
    "type": "Mixed"
  },
  "labels": {
    "type": "Mixed"
  },
  "labels_tags": {
    "type": "Mixed"
  },
  "emb_codes": {
    "type": "Mixed"
  },
  "emb_codes_tags": {
    "type": "Mixed"
  },
  "cities": {
    "type": "Mixed"
  },
  "cities_tags": {
    "type": "Mixed"
  },
  "purchase_places": {
    "type": "String"
  },
  "stores": {
    "type": "String"
  },
  "countries": {
    "type": "String"
  },
  "ingredients_text": {
    "type": "String"
  },
  "allergens": {
    "type": "String"
  },
  "allergens_tags": {
    "type": "String"
  },
  "traces": {
    "type": "String"
  },
  "traces_tags": {
    "type": "String"
  },
  "serving_size": {
    "type": "String"
  },
  "serving_quantity": {
    "type": "Date"
  },
  "no_nutriments": {
    "type": "Mixed"
  },
  "additives_n": {
    "type": "Number"
  },
  "additives_tags": {
    "type": "String"
  },
  "ingredients_from_palm_oil_n": {
    "type": "Number"
  },
  "ingredients_from_palm_oil": {
    "type": "Mixed"
  },
  "ingredients_from_palm_oil_tags": {
    "type": "Mixed"
  },
  "ingredients_that_may_be_from_palm_oil_n": {
    "type": "Number"
  },
  "ingredients_that_may_be_from_palm_oil": {
    "type": "Mixed"
  },
  "ingredients_that_may_be_from_palm_oil_tags": {
    "type": "Mixed"
  },
  "nutrition_grade_fr": {
    "type": "String"
  },
  "nova_group": {
    "type": "Number"
  },
  "pnns_groups_1": {
    "type": "String"
  },
  "pnns_groups_2": {
    "type": "String"
  },
  "states": {
    "type": "String"
  },
  "main_category": {
    "type": "String"
  },
  "image_url": {
    "type": "String"
  },
  "image_small_url": {
    "type": "String"
  },
  "image_front_url": {
    "type": "String"
  },
  "image_front_small_url": {
    "type": "String"
  },
  "image_ingredients_url": {
    "type": "String"
  },
  "image_ingredients_small_url": {
    "type": "String"
  },
  "image_nutrition_url": {
    "type": "String"
  },
  "image_nutrition_small_url": {
    "type": "String"
  },
  "energy_100g": {
    "type": "Date"
  },
  "energy-from-fat_100g": {
    "type": "Mixed"
  },
  "fat_100g": {
    "type": "String"
  },
  "saturated-fat_100g": {
    "type": "Date"
  },
  "cholesterol_100g": {
    "type": "Mixed"
  },
  "carbohydrates_100g": {
    "type": "String"
  },
  "sugars_100g": {
    "type": "Date"
  },
  "-sucrose_100g": {
    "type": "Mixed"
  },
  "-glucose_100g": {
    "type": "Mixed"
  },
  "-fructose_100g": {
    "type": "Mixed"
  },
  "-lactose_100g": {
    "type": "Mixed"
  },
  "-maltose_100g": {
    "type": "Mixed"
  },
  "-maltodextrins_100g": {
    "type": "Mixed"
  },
  "starch_100g": {
    "type": "Mixed"
  },
  "fiber_100g": {
    "type": "Date"
  },
  "proteins_100g": {
    "type": "Date"
  },
  "casein_100g": {
    "type": "Mixed"
  },
  "serum-proteins_100g": {
    "type": "Mixed"
  },
  "nucleotides_100g": {
    "type": "Mixed"
  },
  "salt_100g": {
    "type": "Date"
  },
  "sodium_100g": {
    "type": "String"
  },
  "alcohol_100g": {
    "type": "Mixed"
  },
  "vitamin-a_100g": {
    "type": "Mixed"
  },
  "beta-carotene_100g": {
    "type": "Mixed"
  },
  "vitamin-d_100g": {
    "type": "Mixed"
  },
  "vitamin-e_100g": {
    "type": "Mixed"
  },
  "vitamin-k_100g": {
    "type": "Mixed"
  },
  "vitamin-c_100g": {
    "type": "Mixed"
  },
  "vitamin-b1_100g": {
    "type": "Mixed"
  },
  "vitamin-b2_100g": {
    "type": "Mixed"
  },
  "vitamin-pp_100g": {
    "type": "Mixed"
  },
  "vitamin-b6_100g": {
    "type": "Mixed"
  },
  "vitamin-b9_100g": {
    "type": "Mixed"
  },
  "folates_100g": {
    "type": "Mixed"
  },
  "vitamin-b12_100g": {
    "type": "Mixed"
  },
  "biotin_100g": {
    "type": "Mixed"
  },
  "pantothenic-acid_100g": {
    "type": "Mixed"
  },
  "silica_100g": {
    "type": "Mixed"
  },
  "bicarbonate_100g": {
    "type": "Mixed"
  },
  "potassium_100g": {
    "type": "Mixed"
  },
  "chloride_100g": {
    "type": "Mixed"
  },
  "calcium_100g": {
    "type": "Mixed"
  },
  "phosphorus_100g": {
    "type": "Mixed"
  },
  "iron_100g": {
    "type": "Mixed"
  },
  "magnesium_100g": {
    "type": "Mixed"
  },
  "zinc_100g": {
    "type": "Mixed"
  },
  "copper_100g": {
    "type": "Mixed"
  },
  "manganese_100g": {
    "type": "Mixed"
  },
  "fluoride_100g": {
    "type": "Mixed"
  },
  "selenium_100g": {
    "type": "Mixed"
  },
  "chromium_100g": {
    "type": "Mixed"
  },
  "molybdenum_100g": {
    "type": "Mixed"
  },
  "iodine_100g": {
    "type": "Mixed"
  },
  "caffeine_100g": {
    "type": "Mixed"
  },
  "taurine_100g": {
    "type": "Mixed"
  },
  "ph_100g": {
    "type": "Mixed"
  },
  "fruits-vegetables-nuts_100g": {
    "type": "Mixed"
  },
  "fruits-vegetables-nuts-dried_100g": {
    "type": "Mixed"
  },
  "fruits-vegetables-nuts-estimate_100g": {
    "type": "Mixed"
  },
  "collagen-meat-protein-ratio_100g": {
    "type": "Mixed"
  },
  "cocoa_100g": {
    "type": "Mixed"
  },
  "chlorophyl_100g": {
    "type": "Mixed"
  },
  "carbon-footprint_100g": {
    "type": "Mixed"
  },
  "carbon-footprint-from-meat-or-fish_100g": {
    "type": "Mixed"
  },
  "nutrition-score-fr_100g": {
    "type": "String"
  },
  "nutrition-score-uk_100g": {
    "type": "String"
  },
  "glycemic-index_100g": {
    "type": "Mixed"
  },
  "water-hardness_100g": {
    "type": "Mixed"
  },
  "choline_100g": {
    "type": "Mixed"
  },
  "phylloquinone_100g": {
    "type": "Mixed"
  },
  "beta-glucan_100g": {
    "type": "Mixed"
  },
  "inositol_100g": {
    "type": "Mixed"
  },
  "carnitine_100g": {
    "type": "Mixed"
  }
}, { collection: dbCollection });


// Export the model
module.exports = mongoose.model('ProduitFinal', ProduitFinalSchema);