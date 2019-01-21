var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbCollection = process.env.MONGODB_COLLECTION || 'Products';

var ProductSchema = new Schema({
    // name: {type: String, required: true, max: 100},
		"_id": "string",
		"rev": {
			"type": "number",
			"required": false
		},
		"states_tags": {
			"type": "Array",
			"required": false
		},
		"languages_codes": {
			"type": "Object",
			"structure": {
				"fr": {
					"type": "number",
					"required": false
				}
			},
			"required": false
		},
		"last_editor": {
			"type": "string",
			"required": false
		},
		"correctors_tags": {
			"type": "Array",
			"required": false
		},
		"languages": {
			"type": "Object",
			"structure": {
				"en:french": {
					"type": "number",
					"required": false
				}
			},
			"required": false
		},
		"code": {
			"type": "string",
			"required": false
		},
		"last_modified_by": {
			"type": Date,
			"required": false
		},
		"_keywords": {
			"type": "Array",
			"required": false
		},
		"id": {
			"type": "string",
			"required": false
		},
		"countries": {
			"type": "string",
			"required": false
		},
		"editors_tags": {
			"type": "Array",
			"required": false
		},
		"interface_version_created": {
			"type": "string",
			"required": false
		},
		"states_hierarchy": {
			"type": "Array",
			"required": false
		},
		"countries_hierarchy": {
			"type": "Array",
			"required": false
		},
		"photographers_tags": {
			"type": "Array",
			"required": false
		},
		"states": {
			"type": "string",
			"required": false
		},
		"images": {
			"type": "Object",
			"structure": {
				"1": {
					"type": "Object",
					"structure": {
						"uploader": {
							"type": "string",
							"required": false
						},
						"uploaded_t": {
							"type": "string",
							"required": false
						},
						"sizes": {
							"type": "Object",
							"structure": {
								"100": {
									"type": "Object",
									"structure": {
										"h": {
											"type": "number",
											"required": false
										},
										"w": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"400": {
									"type": "Object",
									"structure": {
										"h": {
											"type": "number",
											"required": false
										},
										"w": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"full": {
									"type": "Object",
									"structure": {
										"h": {
											"type": "number",
											"required": false
										},
										"w": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								}
							},
							"required": false
						}
					},
					"required": false
				},
				"2": {
					"type": "Object",
					"structure": {
						"uploaded_t": {
							"type": "string",
							"required": false
						},
						"uploader": {
							"type": "string",
							"required": false
						},
						"sizes": {
							"type": "Object",
							"structure": {
								"100": {
									"type": "Object",
									"structure": {
										"h": {
											"type": "number",
											"required": false
										},
										"w": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"400": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"full": {
									"type": "Object",
									"structure": {
										"h": {
											"type": "number",
											"required": false
										},
										"w": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								}
							},
							"required": false
						}
					},
					"required": false
				},
				"3": {
					"type": "Object",
					"structure": {
						"sizes": {
							"type": "Object",
							"structure": {
								"100": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"400": {
									"type": "Object",
									"structure": {
										"h": {
											"type": "number",
											"required": false
										},
										"w": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"full": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								}
							},
							"required": false
						},
						"uploaded_t": {
							"type": "string",
							"required": false
						},
						"uploader": {
							"type": "string",
							"required": false
						}
					},
					"required": false
				},
				"4": {
					"type": "Object",
					"structure": {
						"sizes": {
							"type": "Object",
							"structure": {
								"100": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"400": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"full": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								}
							},
							"required": false
						},
						"uploaded_t": {
							"type": "string",
							"required": false
						},
						"uploader": {
							"type": "string",
							"required": false
						}
					},
					"required": false
				},
				"5": {
					"type": "Object",
					"structure": {
						"uploaded_t": {
							"type": "string",
							"required": false
						},
						"uploader": {
							"type": "string",
							"required": false
						},
						"sizes": {
							"type": "Object",
							"structure": {
								"100": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"400": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"full": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								}
							},
							"required": false
						}
					},
					"required": false
				},
				"6": {
					"type": "Object",
					"structure": {
						"sizes": {
							"type": "Object",
							"structure": {
								"100": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"400": {
									"type": "Object",
									"structure": {
										"h": {
											"type": "number",
											"required": false
										},
										"w": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"full": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								}
							},
							"required": false
						},
						"uploader": {
							"type": "string",
							"required": false
						},
						"uploaded_t": {
							"type": "number",
							"required": false
						}
					},
					"required": false
				},
				"7": {
					"type": "Object",
					"structure": {
						"uploader": {
							"type": "string",
							"required": false
						},
						"uploaded_t": {
							"type": "number",
							"required": false
						},
						"sizes": {
							"type": "Object",
							"structure": {
								"100": {
									"type": "Object",
									"structure": {
										"h": {
											"type": "number",
											"required": false
										},
										"w": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"400": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"full": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								}
							},
							"required": false
						}
					},
					"required": false
				},
				"front_fr": {
					"type": "Object",
					"structure": {
						"x1": {
							"type": "string",
							"required": false
						},
						"y1": {
							"type": "string",
							"required": false
						},
						"rev": {
							"type": "string",
							"required": false
						},
						"geometry": {
							"type": "string",
							"required": false
						},
						"x2": {
							"type": "string",
							"required": false
						},
						"angle": {
							"type": "string",
							"required": false
						},
						"white_magic": {
							"type": "string",
							"required": false
						},
						"sizes": {
							"type": "Object",
							"structure": {
								"100": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"200": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"400": {
									"type": "Object",
									"structure": {
										"h": {
											"type": "number",
											"required": false
										},
										"w": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"full": {
									"type": "Object",
									"structure": {
										"h": {
											"type": "number",
											"required": false
										},
										"w": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								}
							},
							"required": false
						},
						"imgid": {
							"type": "string",
							"required": false
						},
						"normalize": {
							"type": "string",
							"required": false
						},
						"y2": {
							"type": "string",
							"required": false
						}
					},
					"required": false
				},
				"ingredients_fr": {
					"type": "Object",
					"structure": {
						"x1": {
							"type": "string",
							"required": false
						},
						"y1": {
							"type": "string",
							"required": false
						},
						"rev": {
							"type": "string",
							"required": false
						},
						"geometry": {
							"type": "string",
							"required": false
						},
						"x2": {
							"type": "string",
							"required": false
						},
						"angle": {
							"type": "string",
							"required": false
						},
						"white_magic": {
							"type": "string",
							"required": false
						},
						"sizes": {
							"type": "Object",
							"structure": {
								"100": {
									"type": "Object",
									"structure": {
										"h": {
											"type": "number",
											"required": false
										},
										"w": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"200": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"400": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								},
								"full": {
									"type": "Object",
									"structure": {
										"w": {
											"type": "number",
											"required": false
										},
										"h": {
											"type": "number",
											"required": false
										}
									},
									"required": false
								}
							},
							"required": false
						},
						"imgid": {
							"type": "string",
							"required": false
						},
						"normalize": {
							"type": "string",
							"required": false
						},
						"y2": {
							"type": "string",
							"required": false
						}
					},
					"required": false
				}
			},
			"required": false
		},
		"languages_tags": {
			"type": "Array",
			"required": false
		},
		"lang": {
			"type": "string",
			"required": false
		},
		"sortkey": {
			"type": "number",
			"required": false
		},
		"languages_hierarchy": {
			"type": "Array",
			"required": false
		},
		"lc": {
			"type": "string",
			"required": false
		},
		"creator": {
			"type": "string",
			"required": false
		},
		"entry_dates_tags": {
			"type": "Array",
			"required": false
		},
		"last_modified_t": {
			"type": "number",
			"required": false
		},
		"checkers_tags": {
			"type": "Array",
			"required": false
		},
		"last_edit_dates_tags": {
			"type": "Array",
			"required": false
		},
		"last_image_dates_tags": {
			"type": "Array",
			"required": false
		},
		"informers_tags": {
			"type": "Array",
			"required": false
		},
		"complete": {
			"type": "number",
			"required": false
		},
		"max_imgid": {
			"type": "string",
			"required": false
		},
		"last_image_t": {
			"type": "number",
			"required": false
		},
		"codes_tags": {
			"type": "Array",
			"required": false
		},
		"created_t": {
			"type": "number",
			"required": false
		},
		"countries_tags": {
			"type": "Array",
			"required": false
		},
		"ingredients_text_fr": {
			"type": "string",
			"required": false
		},
		"additives_original_tags": {
			"type": "Array",
			"required": false
		},
		"additives_old_n": {
			"type": "number",
			"required": false
		},
		"serving_size": {
			"type": "string",
			"required": false
		},
		"traces_tags": {
			"type": "Array",
			"required": false
		},
		"additives": {
			"type": "string",
			"required": false
		},
		"additives_old_tags": {
			"type": "Array",
			"required": false
		},
		"ingredients_n_tags": {
			"type": "Array",
			"required": false
		},
		"unknown_ingredients_n": {
			"type": "number",
			"required": false
		},
		"ingredients_hierarchy": {
			"type": "Array",
			"required": false
		},
		"nutriments": {
			"type": "Object",
			"structure": {
				"sodium_100g": {
					"type": "number",
					"required": false
				},
				"carbohydrates_serving": {
					"type": "string",
					"required": false
				},
				"fat_serving": {
					"type": "string",
					"required": false
				},
				"fat_value": {
					"type": "string",
					"required": false
				},
				"proteins": {
					"type": "number",
					"required": false
				},
				"salt_serving": {
					"type": "string",
					"required": false
				},
				"energy": {
					"type": "string",
					"required": false
				},
				"proteins_unit": {
					"type": "string",
					"required": false
				},
				"sugars_value": {
					"type": "string",
					"required": false
				},
				"fat": {
					"type": "number",
					"required": false
				},
				"sugars_100g": {
					"type": "number",
					"required": false
				},
				"fat_unit": {
					"type": "string",
					"required": false
				},
				"saturated-fat_100g": {
					"type": "number",
					"required": false
				},
				"salt_unit": {
					"type": "string",
					"required": false
				},
				"saturated-fat_value": {
					"type": "string",
					"required": false
				},
				"sodium": {
					"type": "number",
					"required": false
				},
				"sugars_serving": {
					"type": "string",
					"required": false
				},
				"energy_serving": {
					"type": "string",
					"required": false
				},
				"sugars_unit": {
					"type": "string",
					"required": false
				},
				"salt": {
					"type": "number",
					"required": false
				},
				"proteins_value": {
					"type": "string",
					"required": false
				},
				"energy_value": {
					"type": "string",
					"required": false
				},
				"carbohydrates_value": {
					"type": "string",
					"required": false
				},
				"carbohydrates_unit": {
					"type": "string",
					"required": false
				},
				"sugars": {
					"type": "number",
					"required": false
				},
				"saturated-fat_unit": {
					"type": "string",
					"required": false
				},
				"salt_100g": {
					"type": "number",
					"required": false
				},
				"fat_100g": {
					"type": "number",
					"required": false
				},
				"carbohydrates": {
					"type": "number",
					"required": false
				},
				"energy_100g": {
					"type": "string",
					"required": false
				},
				"carbohydrates_100g": {
					"type": "number",
					"required": false
				},
				"salt_value": {
					"type": "string",
					"required": false
				},
				"sodium_serving": {
					"type": "string",
					"required": false
				},
				"energy_unit": {
					"type": "string",
					"required": false
				},
				"saturated-fat": {
					"type": "number",
					"required": false
				},
				"proteins_serving": {
					"type": "string",
					"required": false
				},
				"proteins_100g": {
					"type": "number",
					"required": false
				},
				"saturated-fat_serving": {
					"type": "string",
					"required": false
				}
			},
			"required": false
		},
		"quantity_debug_tags": {
			"type": "Array",
			"required": false
		},
		"ingredients_original_tags": {
			"type": "Array",
			"required": false
		},
		"pnns_groups_2_tags": {
			"type": "Array",
			"required": false
		},
		"allergens_tags": {
			"type": "Array",
			"required": false
		},
		"nutrition_score_debug": {
			"type": "string",
			"required": false
		},
		"product_name": {
			"type": "string",
			"required": false
		},
		"product_name_fr_debug_tags": {
			"type": "Array",
			"required": false
		},
		"categories_hierarchy": {
			"type": "Array",
			"required": false
		},
		"ingredients_n": {
			"type": "number",
			"required": false
		},
		"allergens_from_ingredients": {
			"type": "string",
			"required": false
		},
		"nutrition_grades": {
			"type": "string",
			"required": false
		},
		"nutrition_data_prepared_per": {
			"type": "string",
			"required": false
		},
		"misc_tags": {
			"type": "Array",
			"required": false
		},
		"lang_debug_tags": {
			"type": "Array",
			"required": false
		},
		"serving_size_debug_tags": {
			"type": "Array",
			"required": false
		},
		"traces_from_ingredients": {
			"type": "string",
			"required": false
		},
		"ingredients_from_palm_oil_n": {
			"type": "number",
			"required": false
		},
		"ingredients_from_or_that_may_be_from_palm_oil_n": {
			"type": "number",
			"required": false
		},
		"additives_prev_n": {
			"type": "number",
			"required": false
		},
		"ingredients_ids_debug": {
			"type": "Array",
			"required": false
		},
		"nutrition_grade_fr": {
			"type": "string",
			"required": false
		},
		"pnns_groups_1": {
			"type": "string",
			"required": false
		},
		"nucleotides_tags": {
			"type": "Array",
			"required": false
		},
		"traces_hierarchy": {
			"type": "Array",
			"required": false
		},
		"pnns_groups_2": {
			"type": "string",
			"required": false
		},
		"categories_debug_tags": {
			"type": "Array",
			"required": false
		},
		"unknown_nutrients_tags": {
			"type": "Array",
			"required": false
		},
		"brands_debug_tags": {
			"type": "Array",
			"required": false
		},
		"additives_debug_tags": {
			"type": "Array",
			"required": false
		},
		"nutrition_grades_tags": {
			"type": "Array",
			"required": false
		},
		"categories": {
			"type": "string",
			"required": false
		},
		"ingredients_text_fr_debug_tags": {
			"type": "Array",
			"required": false
		},
		"quality_tags": {
			"type": "Array",
			"required": false
		},
		"nutrient_levels": {
			"type": "Object",
			"structure": {},
			"required": false
		},
		"vitamins_tags": {
			"type": "Array",
			"required": false
		},
		"manufacturing_places_debug_tags": {
			"type": "Array",
			"required": false
		},
		"nova_groups_tags": {
			"type": "Array",
			"required": false
		},
		"nova_group_debug": {
			"type": "string",
			"required": false
		},
		"additives_prev_original_tags": {
			"type": "Array",
			"required": false
		},
		"pnns_groups_1_tags": {
			"type": "Array",
			"required": false
		},
		"manufacturing_places": {
			"type": "string",
			"required": false
		},
		"ingredients_from_palm_oil_tags": {
			"type": "Array",
			"required": false
		},
		"packaging": {
			"type": "string",
			"required": false
		},
		"nucleotides_prev_tags": {
			"type": "Array",
			"required": false
		},
		"ingredients_tags": {
			"type": "Array",
			"required": false
		},
		"completed_t": {
			"type": "number",
			"required": false
		},
		"nova_groups": {
			"type": "number",
			"required": false
		},
		"product_quantity": {
			"type": "number",
			"required": false
		},
		"brands_tags": {
			"type": "Array",
			"required": false
		},
		"additives_prev_tags": {
			"type": "Array",
			"required": false
		},
		"additives_tags": {
			"type": "Array",
			"required": false
		},
		"nutrition_data_per_debug_tags": {
			"type": "Array",
			"required": false
		},
		"ingredients_that_may_be_from_palm_oil_n": {
			"type": "number",
			"required": false
		},
		"product_name_fr": {
			"type": "string",
			"required": false
		},
		"amino_acids_tags": {
			"type": "Array",
			"required": false
		},
		"categories_prev_hierarchy": {
			"type": "Array",
			"required": false
		},
		"nutrition_data_per": {
			"type": "string",
			"required": false
		},
		"nova_group": {
			"type": "number",
			"required": false
		},
		"ingredients_that_may_be_from_palm_oil_tags": {
			"type": "Array",
			"required": false
		},
		"packaging_debug_tags": {
			"type": "Array",
			"required": false
		},
		"ingredients_text_with_allergens": {
			"type": "string",
			"required": false
		},
		"ingredients_text_with_allergens_fr": {
			"type": "string",
			"required": false
		},
		"ingredients_text": {
			"type": "string",
			"required": false
		},
		"minerals_prev_tags": {
			"type": "Array",
			"required": false
		},
		"nutrition_score_warning_no_fruits_vegetables_nuts": {
			"type": "number",
			"required": false
		},
		"additives_prev": {
			"type": "string",
			"required": false
		},
		"quantity": {
			"type": "string",
			"required": false
		},
		"nutrient_levels_tags": {
			"type": "Array",
			"required": false
		},
		"additives_n": {
			"type": "number",
			"required": false
		},
		"minerals_tags": {
			"type": "Array",
			"required": false
		},
		"ingredients": {
			"type": "Array",
			"required": false
		},
		"ingredients_debug": {
			"type": "Array",
			"required": false
		},
		"brands": {
			"type": "string",
			"required": false
		},
		"allergens_hierarchy": {
			"type": "Array",
			"required": false
		},
		"no_nutrition_data": {
			"type": "string",
			"required": false
		},
		"interface_version_modified": {
			"type": "string",
			"required": false
		},
		"categories_tags": {
			"type": "Array",
			"required": false
		},
		"packaging_tags": {
			"type": "Array",
			"required": false
		},
		"vitamins_prev_tags": {
			"type": "Array",
			"required": false
		},
		"amino_acids_prev_tags": {
			"type": "Array",
			"required": false
		},
		"categories_prev_tags": {
			"type": "Array",
			"required": false
		},
		"ingredients_text_debug": {
			"type": "string",
			"required": false
		},
		"manufacturing_places_tags": {
			"type": "Array",
			"required": false
		},
		"serving_quantity": {
			"type": "number",
			"required": false
		},
		"nova_group_tags": {
			"type": "Array",
			"required": false
		},
		"update_key": {
			"type": "string",
			"required": false
		},
		"scans_n": {
			"type": "number",
			"required": false
		},
		"allergens": {
			"type": "string",
			"required": false
		},
		"product_name_debug_tags": {
			"type": "Array",
			"required": false
		},
		"unique_scans_n": {
			"type": "number",
			"required": false
		},
		"emb_codes_tags": {
			"type": "Array",
			"required": false
		},
		"cities_tags": {
			"type": "Array",
			"required": false
		},
		"ingredients_text_with_allergens_en": {
			"type": "string",
			"required": false
		},
		"labels_prev_tags": {
			"type": "Array",
			"required": false
		},
		"labels_debug_tags": {
			"type": "Array",
			"required": false
		},
		"labels_tags": {
			"type": "Array",
			"required": false
		},
		"labels_hierarchy": {
			"type": "Array",
			"required": false
		},
		"emb_codes": {
			"type": "string",
			"required": false
		},
		"emb_codes_20141016": {
			"type": "string",
			"required": false
		},
		"labels_prev_hierarchy": {
			"type": "Array",
			"required": false
		},
		"countries_debug_tags": {
			"type": "Array",
			"required": false
		},
		"with_sweeteners": {
			"type": "number",
			"required": false
		},
		"product_name_gu_debug_tags": {
			"type": "Array",
			"required": false
		},
		"ingredients_text_with_allergens_gu": {
			"type": "string",
			"required": false
		},
		"product_name_gu": {
			"type": "string",
			"required": false
		},
		"product_name_en": {
			"type": "string",
			"required": false
		},
		"categories_next_hierarchy": {
			"type": "Array",
			"required": false
		},
		"categories_next_tags": {
			"type": "Array",
			"required": false
		},
		"labels_next_tags": {
			"type": "Array",
			"required": false
		},
		"editors": {
			"type": "Array",
			"required": false
		},
		"labels_next_hierarchy": {
			"type": "Array",
			"required": false
		},
		"emb_codes_orig": {
			"type": "string",
			"required": false
		},
		"expiration_date": {
			"type": "string",
			"required": false
		},
		"ingredients_text_with_allergens_de": {
			"type": "string",
			"required": false
		},
		"origins_debug_tags": {
			"type": "Array",
			"required": false
		},
		"purchase_places_tags": {
			"type": "Array",
			"required": false
		},
		"origins": {
			"type": "string",
			"required": false
		},
		"purchase_places_debug_tags": {
			"type": "Array",
			"required": false
		},
		"purchase_places": {
			"type": "string",
			"required": false
		},
		"origins_tags": {
			"type": "Array",
			"required": false
		},
		"stores_debug_tags": {
			"type": "Array",
			"required": false
		},
		"stores_tags": {
			"type": "Array",
			"required": false
		},
		"stores": {
			"type": "string",
			"required": false
		},
		"labels": {
			"type": "string",
			"required": false
		},
		"ingredients_text_en_debug_tags": {
			"type": "Array",
			"required": false
		},
		"product_name_en_debug_tags": {
			"type": "Array",
			"required": false
		},
		"ingredients_text_en": {
			"type": "string",
			"required": false
		},
		"traces": {
			"type": "string",
			"required": false
		}
}, { collection : 'Products' });

ProductSchema.statics.getUsers = function(){
	return new Promise((resolve, reject) => {
    this.find((err, docs) => {
      if(err) {
        console.error(err)
        return reject(err)
      }
      resolve(docs)
    })
  })
};

// Export the model
module.exports = mongoose.model('Product', ProductSchema);