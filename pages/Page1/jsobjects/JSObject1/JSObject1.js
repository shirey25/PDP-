export default {
	{
	"name": "Integration Open AI GPT-3  Blog Section to Social Posts",
	"flow": [
	{
	"id": 92,
	"module": "airtable:ActionSearchRecords",
	"version": 3,
	"parameters": {
	"__IMTCONN__": 365050
},
	"mapper": {
		"base": "appDTUXQvgkjIvceg",
			"view": "viwfJrAGkXg9qJzoV",
				"table": "tblJVXNvud7TgEpRo",
					"fields": [
						"AI Gen Ideas - Keywords"
					],
						"maxRecords": "1",
							"useColumnId": false
	},
		"metadata": {
			"designer": {
				"x": -264,
					"y": 329
			},
				"restore": {
					"expect": {
						"base": {
							"mode": "chose",
								"label": "Blog Articles "
						},
							"sort": {
								"mode": "chose"
							},
								"view": {
									"mode": "chose",
										"label": "Grid view"
								},
									"table": {
										"mode": "chose",
											"label": "Keyword Stats"
									},
										"fields": {
											"mode": "chose",
												"label": [
													"AI Gen Ideas - Keywords"
												]
										},
											"useColumnId": {
												"mode": "chose"
											}
					},
						"parameters": {
							"__IMTCONN__": {
								"data": {
									"scoped": "true",
										"connection": "airtable2"
								},
									"label": "My Airtable connection"
							}
						}
				},
					"parameters": [
						{
							"name": "__IMTCONN__",
							"type": "account:airtable2",
							"label": "Connection",
							"required": true
						}
					],
						"expect": [
							{
								"name": "base",
								"type": "select",
								"label": "Base",
								"required": true
							},
							{
								"name": "useColumnId",
								"type": "boolean",
								"label": "Use Column ID",
								"required": true
							},
							{
								"name": "table",
								"type": "select",
								"label": "Table",
								"required": true
							},
							{
								"name": "formula",
								"type": "text",
								"label": "Formula"
							},
							{
								"name": "maxRecords",
								"type": "integer",
								"label": "Limit"
							},
							{
								"name": "sort",
								"spec": [
									{
										"name": "field",
										"type": "select",
										"label": "Field",
										"dynamic": true,
										"options": []
									},
									{
										"name": "direction",
										"type": "select",
										"label": "Direction",
										"options": [
											{
												"label": "Descending",
												"value": "desc"
											},
											{
												"label": "Ascending",
												"value": "asc"
											}
										]
									}
								],
								"type": "array",
								"label": "Sort"
							},
							{
								"name": "view",
								"type": "select",
								"label": "View"
							},
							{
								"name": "fields",
								"type": "select",
								"label": "Output Fields",
								"multiple": true
							}
						],
							"interface": [
								{
									"name": "__IMTLENGTH__",
									"type": "uinteger",
									"label": "Total number of bundles"
								},
								{
									"name": "__IMTINDEX__",
									"type": "uinteger",
									"label": "Bundle order position"
								},
								{
									"name": "id",
									"type": "text",
									"label": "ID"
								},
								{
									"name": "createdTime",
									"type": "date",
									"label": "Created Time"
								},
								{
									"name": "AI Gen Ideas - Keywords",
									"type": "text",
									"label": "AI Gen Ideas - Keywords"
								},
								{
									"name": "Label",
									"spec": {
										"label": "Record ID"
									},
									"type": "array",
									"label": "Label"
								},
								{
									"name": "Headline (from Label)",
									"type": "array",
									"label": "Headline (from Label)"
								},
								{
									"name": "Search Queries",
									"type": "text",
									"label": "Search Queries"
								},
								{
									"name": "ID",
									"type": "number",
									"label": "ID"
								},
								{
									"name": "Assignee",
									"type": "text",
									"label": "Assignee",
									"multiline": true
								},
								{
									"name": "Status",
									"type": "text",
									"label": "Status"
								},
								{
									"name": "Status 2",
									"type": "text",
									"label": "Status 2"
								},
								{
									"name": "Imported table 2",
									"spec": {
										"label": "Record ID"
									},
									"type": "array",
									"label": "Imported table 2"
								},
								{
									"name": "Articles",
									"spec": {
										"label": "Record ID"
									},
									"type": "array",
									"label": "Articles"
								},
								{
									"name": "Master Relation \\",
									"spec": {
										"label": "Record ID"
									},
									"type": "array",
									"label": "Master Relation \\"
								},
								{
									"name": "Articles 2",
									"spec": {
										"label": "Record ID"
									},
									"type": "array",
									"label": "Articles 2"
								}
							]
		}
},
	{
		"id": 93,
			"module": "airtable:ActionUpdateRecords",
				"version": 3,
					"parameters": {
						"__IMTCONN__": 365050
					},
						"mapper": {
							"id": "{{92.id}}",
								"base": "appDTUXQvgkjIvceg",
									"table": "tblJVXNvud7TgEpRo",
										"record": {
											"fldPFNyVm1XlZGESl": "In progress"
										},
											"typecast": false,
												"useColumnId": false
						},
							"metadata": {
								"designer": {
									"x": -285,
										"y": 669
								},
									"restore": {
										"expect": {
											"base": {
												"label": "Blog Articles "
											},
												"table": {
													"label": "Keyword Stats"
												},
													"record": {
														"nested": {
															"fldEt9HWwBh5EjgQg": {
																"mode": "chose"
															},
																"fldPFNyVm1XlZGESl": {
																	"mode": "chose",
																		"label": "In progress"
																},
																	"fldRpuzjZVOTfLGt3": {
																		"mode": "chose"
																	},
																		"fldWEgigKEfOmJzuL": {
																			"mode": "chose"
																		},
																			"fldX3aGV6aneCcWYY": {
																				"mode": "edit"
																			},
																				"fldhsfVXq7UV6Cx6S": {
																					"mode": "chose"
																				},
																					"fldsAWwWvxlfEamiu": {
																						"mode": "chose"
																					}
														}
													},
														"typecast": {
															"mode": "chose"
														},
															"useColumnId": {
																"mode": "chose"
															}
										},
											"parameters": {
												"__IMTCONN__": {
													"data": {
														"scoped": "true",
															"connection": "airtable2"
													},
														"label": "My Airtable connection"
												}
											}
									},
										"parameters": [
											{
												"name": "__IMTCONN__",
												"type": "account:airtable2",
												"label": "Connection",
												"required": true
											}
										],
											"expect": [
												{
													"name": "base",
													"type": "select",
													"label": "Base",
													"required": true
												},
												{
													"name": "typecast",
													"type": "boolean",
													"label": "Smart links",
													"required": true
												},
												{
													"name": "useColumnId",
													"type": "boolean",
													"label": "Use Column ID",
													"required": true
												},
												{
													"name": "table",
													"type": "select",
													"label": "Table",
													"required": true
												},
												{
													"name": "id",
													"type": "text",
													"label": "Record ID",
													"required": true
												},
												{
													"name": "record",
													"spec": [
														{
															"name": "fldVbYCyCI1dpa5JX",
															"type": "text",
															"label": "AI Gen Ideas - Keywords"
														},
														{
															"name": "fldEt9HWwBh5EjgQg",
															"spec": {
																"name": "value",
																"label": "Record ID"
															},
															"type": "array",
															"label": "Label"
														},
														{
															"name": "fldIGBE3C8HeLXC3h",
															"type": "text",
															"label": "Search Queries"
														},
														{
															"name": "fldE3bko32sGobXUE",
															"type": "text",
															"label": "Assignee"
														},
														{
															"mode": "edit",
															"name": "fldPFNyVm1XlZGESl",
															"type": "select",
															"label": "Status",
															"validate": {
																"enum": [
																	"Todo",
																	"In progress",
																	"Done"
																]
															}
														},
														{
															"mode": "edit",
															"name": "fldX3aGV6aneCcWYY",
															"type": "select",
															"label": "Status 2",
															"validate": {
																"enum": [
																	"Todo",
																	"In progress",
																	"Done"
																]
															}
														},
														{
															"name": "fldsAWwWvxlfEamiu",
															"spec": {
																"name": "value",
																"label": "Record ID"
															},
															"type": "array",
															"label": "Imported table 2"
														},
														{
															"name": "fldhsfVXq7UV6Cx6S",
															"spec": {
																"name": "value",
																"label": "Record ID"
															},
															"type": "array",
															"label": "Articles"
														},
														{
															"name": "fldRpuzjZVOTfLGt3",
															"spec": {
																"name": "value",
																"label": "Record ID"
															},
															"type": "array",
															"label": "Master Relation \\"
														},
														{
															"name": "fldWEgigKEfOmJzuL",
															"spec": {
																"name": "value",
																"label": "Record ID"
															},
															"type": "array",
															"label": "Articles 2"
														}
													],
													"type": "collection",
													"label": "Record"
												}
											],
												"interface": [
													{
														"name": "id",
														"type": "text",
														"label": "ID"
													},
													{
														"name": "createdTime",
														"type": "date",
														"label": "Created Time"
													},
													{
														"name": "AI Gen Ideas - Keywords",
														"type": "text",
														"label": "AI Gen Ideas - Keywords"
													},
													{
														"name": "Label",
														"spec": {
															"label": "Record ID"
														},
														"type": "array",
														"label": "Label"
													},
													{
														"name": "Headline (from Label)",
														"type": "array",
														"label": "Headline (from Label)"
													},
													{
														"name": "Search Queries",
														"type": "text",
														"label": "Search Queries"
													},
													{
														"name": "ID",
														"type": "number",
														"label": "ID"
													},
													{
														"name": "Assignee",
														"type": "text",
														"label": "Assignee",
														"multiline": true
													},
													{
														"name": "Status",
														"type": "text",
														"label": "Status"
													},
													{
														"name": "Status 2",
														"type": "text",
														"label": "Status 2"
													},
													{
														"name": "Imported table 2",
														"spec": {
															"label": "Record ID"
														},
														"type": "array",
														"label": "Imported table 2"
													},
													{
														"name": "Articles",
														"spec": {
															"label": "Record ID"
														},
														"type": "array",
														"label": "Articles"
													},
													{
														"name": "Master Relation \\",
														"spec": {
															"label": "Record ID"
														},
														"type": "array",
														"label": "Master Relation \\"
													},
													{
														"name": "Articles 2",
														"spec": {
															"label": "Record ID"
														},
														"type": "array",
														"label": "Articles 2"
													}
												]
							}
	},
		{
			"id": 54,
				"module": "openai-gpt-3:CreateCompletion",
					"version": 1,
						"parameters": {
							"__IMTCONN__": 588038
						},
							"mapper": {
								"model": "text-davinci-003",
									"top_p": ".89",
										"prompt": "\"Your best skills and experience include creating, executing, and measuring successful digital marketing campaigns, optimizing website usability, code, and functionality, developing compelling content, and using analytics to assess performance and identify areas for improvement. I am organized, detail-oriented, and highly motivated to help businesses reach their goals. I use my knowledge and skills to create strategies that are tailored to each business's needs and objectives.\" \n...\nWrite a short blog headline for the following subject {{92.`AI Gen Ideas - Keywords`}}.",
											"max_tokens": "300",
												"temperature": ".89",
													"n_completions": "1"
							},
								"metadata": {
									"designer": {
										"x": 44,
											"y": 657
									},
										"restore": {
											"expect": {
												"echo": {
													"mode": "chose"
												},
													"model": {
														"mode": "chose",
															"label": "text-davinci-003"
													}
											},
												"parameters": {
													"__IMTCONN__": {
														"data": {
															"scoped": "true",
																"connection": "openai-gpt-3"
														},
															"label": "My OpenAI connection"
													}
												}
										},
											"parameters": [
												{
													"name": "__IMTCONN__",
													"type": "account:openai-gpt-3",
													"label": "Connection",
													"required": true
												}
											],
												"expect": [
													{
														"name": "model",
														"type": "select",
														"label": "Model",
														"required": true
													},
													{
														"name": "prompt",
														"type": "text",
														"label": "Prompt"
													},
													{
														"name": "max_tokens",
														"type": "number",
														"label": "Max Tokens"
													},
													{
														"name": "temperature",
														"type": "number",
														"label": "Temperature"
													},
													{
														"name": "top_p",
														"type": "number",
														"label": "Top p"
													},
													{
														"name": "n_completions",
														"type": "number",
														"label": "N"
													},
													{
														"name": "echo",
														"type": "boolean",
														"label": "Echo"
													}
												]
								}
		},
			{
				"id": 98,
					"module": "openai-gpt-3:CreateCompletion",
						"version": 1,
							"parameters": {
								"__IMTCONN__": 588038
							},
								"mapper": {
									"model": "text-davinci-003",
										"top_p": ".89",
											"prompt": "\"Your best skills and experience include creating, executing, and measuring successful digital marketing campaigns, optimizing website usability, code, and functionality, developing compelling content, and using analytics to assess performance and identify areas for improvement. I am organized, detail-oriented, and highly motivated to help businesses reach their goals. I use my knowledge and skills to create strategies that are tailored to each business's needs and objectives.\" \n...\n\"{{54.choices[].text}}\"\n...\nWrite a short outline  with an opening paragraph and table of contents for a blog article using {{54.choices[].text}} as the subject Write a short outline with table of contents. Include 5 major keywords or keyword queries that relate your title  but do not include the same words as you used in your title. Use those keywords as the headline for each item in the table of contents. Format in html .",
												"max_tokens": "1000",
													"temperature": ".89",
														"n_completions": "1"
								},
									"metadata": {
										"designer": {
											"x": 91,
												"y": 328
										},
											"restore": {
												"expect": {
													"echo": {
														"mode": "chose"
													},
														"model": {
															"mode": "chose",
																"label": "text-davinci-003"
														}
												},
													"parameters": {
														"__IMTCONN__": {
															"data": {
																"scoped": "true",
																	"connection": "openai-gpt-3"
															},
																"label": "My OpenAI connection"
														}
													}
											},
												"parameters": [
													{
														"name": "__IMTCONN__",
														"type": "account:openai-gpt-3",
														"label": "Connection",
														"required": true
													}
												],
													"expect": [
														{
															"name": "model",
															"type": "select",
															"label": "Model",
															"required": true
														},
														{
															"name": "prompt",
															"type": "text",
															"label": "Prompt"
														},
														{
															"name": "max_tokens",
															"type": "number",
															"label": "Max Tokens"
														},
														{
															"name": "temperature",
															"type": "number",
															"label": "Temperature"
														},
														{
															"name": "top_p",
															"type": "number",
															"label": "Top p"
														},
														{
															"name": "n_completions",
															"type": "number",
															"label": "N"
														},
														{
															"name": "echo",
															"type": "boolean",
															"label": "Echo"
														}
													]
									}
			},
				{
					"id": 73,
						"module": "openai-gpt-3:CreateCompletion",
							"version": 1,
								"parameters": {
									"__IMTCONN__": 588038
								},
									"mapper": {
										"model": "text-davinci-003",
											"top_p": ".89",
												"prompt": "\"Your best skills and experience include creating, executing, and measuring successful digital marketing campaigns, optimizing website usability, code, and functionality, developing compelling content, and using analytics to assess performance and identify areas for improvement. I am organized, detail-oriented, and highly motivated to help businesses reach their goals. I use my knowledge and skills to create strategies that are tailored to each business's needs and objectives.\" \n...\n\"{{54.choices[].text}}\"\n...\n\"Write a short outline with a table of contents for a blog article using {{54.choices[].text}} as the subject Write a short outline with table of contents. Include 5 major keywords or keyword queries that relate your title as the headline for each item in the table of contents.\"\n...\n\"{{98.choices[].text}}\"\n...\nWrite the first paragraph for the first item in the table of contents. Include supporting links in that paragraph as a hyperlink. Format the paragraph in html \n",
													"max_tokens": "1000",
														"temperature": ".89",
															"n_completions": "1"
									},
										"metadata": {
											"designer": {
												"x": 356,
													"y": 403
											},
												"restore": {
													"expect": {
														"echo": {
															"mode": "chose"
														},
															"model": {
																"mode": "chose",
																	"label": "text-davinci-003"
															}
													},
														"parameters": {
															"__IMTCONN__": {
																"data": {
																	"scoped": "true",
																		"connection": "openai-gpt-3"
																},
																	"label": "My OpenAI connection"
															}
														}
												},
													"parameters": [
														{
															"name": "__IMTCONN__",
															"type": "account:openai-gpt-3",
															"label": "Connection",
															"required": true
														}
													],
														"expect": [
															{
																"name": "model",
																"type": "select",
																"label": "Model",
																"required": true
															},
															{
																"name": "prompt",
																"type": "text",
																"label": "Prompt"
															},
															{
																"name": "max_tokens",
																"type": "number",
																"label": "Max Tokens"
															},
															{
																"name": "temperature",
																"type": "number",
																"label": "Temperature"
															},
															{
																"name": "top_p",
																"type": "number",
																"label": "Top p"
															},
															{
																"name": "n_completions",
																"type": "number",
																"label": "N"
															},
															{
																"name": "echo",
																"type": "boolean",
																"label": "Echo"
															}
														]
										}
				},
					{
						"id": 101,
							"module": "airtable:ActionSearchRecords",
								"version": 3,
									"parameters": {
										"__IMTCONN__": 365050
									},
										"mapper": {
											"base": "appDTUXQvgkjIvceg",
												"view": "viwul3XsIHGz4FjFp",
													"table": "tblznvhtv4qcJ5TPM",
														"fields": [
															"Headline S",
															"Original AI Title"
														],
															"maxRecords": "1",
																"useColumnId": false
										},
											"metadata": {
												"designer": {
													"x": 541,
														"y": 540
												},
													"restore": {
														"expect": {
															"base": {
																"mode": "chose",
																	"label": "Blog Articles "
															},
																"sort": {
																	"mode": "chose"
																},
																	"view": {
																		"mode": "chose",
																			"label": "Integrowmat  Auto Sheet "
																	},
																		"table": {
																			"mode": "chose",
																				"label": "Articles"
																		},
																			"fields": {
																				"mode": "chose",
																					"label": [
																						"Headline S",
																						"Original AI Title"
																					]
																			},
																				"useColumnId": {
																					"mode": "chose"
																				}
														},
															"parameters": {
																"__IMTCONN__": {
																	"data": {
																		"scoped": "true",
																			"connection": "airtable2"
																	},
																		"label": "My Airtable connection"
																}
															}
													},
														"parameters": [
															{
																"name": "__IMTCONN__",
																"type": "account:airtable2",
																"label": "Connection",
																"required": true
															}
														],
															"expect": [
																{
																	"name": "base",
																	"type": "select",
																	"label": "Base",
																	"required": true
																},
																{
																	"name": "useColumnId",
																	"type": "boolean",
																	"label": "Use Column ID",
																	"required": true
																},
																{
																	"name": "table",
																	"type": "select",
																	"label": "Table",
																	"required": true
																},
																{
																	"name": "formula",
																	"type": "text",
																	"label": "Formula"
																},
																{
																	"name": "maxRecords",
																	"type": "integer",
																	"label": "Limit"
																},
																{
																	"name": "sort",
																	"spec": [
																		{
																			"name": "field",
																			"type": "select",
																			"label": "Field",
																			"dynamic": true,
																			"options": []
																		},
																		{
																			"name": "direction",
																			"type": "select",
																			"label": "Direction",
																			"options": [
																				{
																					"label": "Descending",
																					"value": "desc"
																				},
																				{
																					"label": "Ascending",
																					"value": "asc"
																				}
																			]
																		}
																	],
																	"type": "array",
																	"label": "Sort"
																},
																{
																	"name": "view",
																	"type": "select",
																	"label": "View"
																},
																{
																	"name": "fields",
																	"type": "select",
																	"label": "Output Fields",
																	"multiple": true
																}
															],
																"interface": [
																	{
																		"name": "__IMTLENGTH__",
																		"type": "uinteger",
																		"label": "Total number of bundles"
																	},
																	{
																		"name": "__IMTINDEX__",
																		"type": "uinteger",
																		"label": "Bundle order position"
																	},
																	{
																		"name": "id",
																		"type": "text",
																		"label": "ID"
																	},
																	{
																		"name": "createdTime",
																		"type": "date",
																		"label": "Created Time"
																	},
																	{
																		"name": "Headline S",
																		"type": "text",
																		"label": "Headline S"
																	},
																	{
																		"name": "Original AI Title",
																		"type": "array",
																		"label": "Original AI Title"
																	},
																	{
																		"name": "Headline S copy",
																		"type": "array",
																		"label": "Headline S copy",
																		"editable": true
																	},
																	{
																		"name": "Headline",
																		"type": "text",
																		"label": "Headline"
																	},
																	{
																		"name": "Slug",
																		"type": "text",
																		"label": "Slug"
																	},
																	{
																		"name": "Item ID",
																		"type": "text",
																		"label": "Item ID"
																	},
																	{
																		"name": "Imported table 2",
																		"spec": {
																			"label": "Record ID"
																		},
																		"type": "array",
																		"label": "Imported table 2"
																	},
																	{
																		"name": "Published",
																		"type": "boolean",
																		"label": "Published"
																	},
																	{
																		"name": "Status ",
																		"type": "text",
																		"label": "Status "
																	},
																	{
																		"name": "Collection ID",
																		"type": "number",
																		"label": "Collection ID"
																	},
																	{
																		"name": "Created Time",
																		"type": "date",
																		"label": "Created Time"
																	},
																	{
																		"name": "Updated On",
																		"type": "date",
																		"label": "Updated On"
																	},
																	{
																		"name": "Published On",
																		"time": true,
																		"type": "date",
																		"label": "Published On"
																	},
																	{
																		"name": "Main Image",
																		"spec": [
																			{
																				"name": "id",
																				"type": "text",
																				"label": "ID"
																			},
																			{
																				"name": "url",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"name": "filename",
																				"type": "filename",
																				"label": "File name"
																			},
																			{
																				"name": "size",
																				"type": "uinteger",
																				"label": "Size"
																			},
																			{
																				"name": "type",
																				"type": "text",
																				"label": "MIME type"
																			},
																			{
																				"name": "thumbnails",
																				"spec": [
																					{
																						"name": "small",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Small"
																					},
																					{
																						"name": "large",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Large"
																					},
																					{
																						"name": "full",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Full"
																					}
																				],
																				"type": "collection",
																				"label": "Thumbnails"
																			}
																		],
																		"type": "array",
																		"label": "Main Image"
																	},
																	{
																		"name": "Post Body",
																		"type": "text",
																		"label": "Post Body",
																		"multiline": true
																	},
																	{
																		"name": "Post Summary",
																		"type": "text",
																		"label": "Post Summary",
																		"multiline": true
																	},
																	{
																		"name": "IMG 1",
																		"spec": [
																			{
																				"name": "id",
																				"type": "text",
																				"label": "ID"
																			},
																			{
																				"name": "url",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"name": "filename",
																				"type": "filename",
																				"label": "File name"
																			},
																			{
																				"name": "size",
																				"type": "uinteger",
																				"label": "Size"
																			},
																			{
																				"name": "type",
																				"type": "text",
																				"label": "MIME type"
																			},
																			{
																				"name": "thumbnails",
																				"spec": [
																					{
																						"name": "small",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Small"
																					},
																					{
																						"name": "large",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Large"
																					},
																					{
																						"name": "full",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Full"
																					}
																				],
																				"type": "collection",
																				"label": "Thumbnails"
																			}
																		],
																		"type": "array",
																		"label": "IMG 1"
																	},
																	{
																		"name": "P1",
																		"type": "text",
																		"label": "P1",
																		"multiline": true
																	},
																	{
																		"name": "IMG 2",
																		"spec": [
																			{
																				"name": "id",
																				"type": "text",
																				"label": "ID"
																			},
																			{
																				"name": "url",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"name": "filename",
																				"type": "filename",
																				"label": "File name"
																			},
																			{
																				"name": "size",
																				"type": "uinteger",
																				"label": "Size"
																			},
																			{
																				"name": "type",
																				"type": "text",
																				"label": "MIME type"
																			},
																			{
																				"name": "thumbnails",
																				"spec": [
																					{
																						"name": "small",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Small"
																					},
																					{
																						"name": "large",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Large"
																					},
																					{
																						"name": "full",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Full"
																					}
																				],
																				"type": "collection",
																				"label": "Thumbnails"
																			}
																		],
																		"type": "array",
																		"label": "IMG 2"
																	},
																	{
																		"name": "P2",
																		"type": "text",
																		"label": "P2",
																		"multiline": true
																	},
																	{
																		"name": "IMG 3",
																		"spec": [
																			{
																				"name": "id",
																				"type": "text",
																				"label": "ID"
																			},
																			{
																				"name": "url",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"name": "filename",
																				"type": "filename",
																				"label": "File name"
																			},
																			{
																				"name": "size",
																				"type": "uinteger",
																				"label": "Size"
																			},
																			{
																				"name": "type",
																				"type": "text",
																				"label": "MIME type"
																			},
																			{
																				"name": "thumbnails",
																				"spec": [
																					{
																						"name": "small",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Small"
																					},
																					{
																						"name": "large",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Large"
																					},
																					{
																						"name": "full",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Full"
																					}
																				],
																				"type": "collection",
																				"label": "Thumbnails"
																			}
																		],
																		"type": "array",
																		"label": "IMG 3"
																	},
																	{
																		"name": "P3",
																		"type": "text",
																		"label": "P3",
																		"multiline": true
																	},
																	{
																		"name": "IMG 4",
																		"spec": [
																			{
																				"name": "id",
																				"type": "text",
																				"label": "ID"
																			},
																			{
																				"name": "url",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"name": "filename",
																				"type": "filename",
																				"label": "File name"
																			},
																			{
																				"name": "size",
																				"type": "uinteger",
																				"label": "Size"
																			},
																			{
																				"name": "type",
																				"type": "text",
																				"label": "MIME type"
																			},
																			{
																				"name": "thumbnails",
																				"spec": [
																					{
																						"name": "small",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Small"
																					},
																					{
																						"name": "large",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Large"
																					},
																					{
																						"name": "full",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Full"
																					}
																				],
																				"type": "collection",
																				"label": "Thumbnails"
																			}
																		],
																		"type": "array",
																		"label": "IMG 4"
																	},
																	{
																		"name": "P4",
																		"spec": {
																			"label": "Record ID"
																		},
																		"type": "array",
																		"label": "P4"
																	},
																	{
																		"name": "Author Picture",
																		"type": "text",
																		"label": "Author Picture",
																		"multiline": true
																	},
																	{
																		"name": "Author",
																		"type": "text",
																		"label": "Author"
																	},
																	{
																		"name": "Author URL",
																		"type": "url",
																		"label": "Author URL"
																	},
																	{
																		"name": "16x9 Image",
																		"spec": [
																			{
																				"name": "id",
																				"type": "text",
																				"label": "ID"
																			},
																			{
																				"name": "url",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"name": "filename",
																				"type": "filename",
																				"label": "File name"
																			},
																			{
																				"name": "size",
																				"type": "uinteger",
																				"label": "Size"
																			},
																			{
																				"name": "type",
																				"type": "text",
																				"label": "MIME type"
																			},
																			{
																				"name": "thumbnails",
																				"spec": [
																					{
																						"name": "small",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Small"
																					},
																					{
																						"name": "large",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Large"
																					},
																					{
																						"name": "full",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Full"
																					}
																				],
																				"type": "collection",
																				"label": "Thumbnails"
																			}
																		],
																		"type": "array",
																		"label": "16x9 Image"
																	},
																	{
																		"name": "16x9 Image URL",
																		"type": "url",
																		"label": "16x9 Image URL"
																	},
																	{
																		"name": "4:3 Image",
																		"spec": [
																			{
																				"name": "id",
																				"type": "text",
																				"label": "ID"
																			},
																			{
																				"name": "url",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"name": "filename",
																				"type": "filename",
																				"label": "File name"
																			},
																			{
																				"name": "size",
																				"type": "uinteger",
																				"label": "Size"
																			},
																			{
																				"name": "type",
																				"type": "text",
																				"label": "MIME type"
																			},
																			{
																				"name": "thumbnails",
																				"spec": [
																					{
																						"name": "small",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Small"
																					},
																					{
																						"name": "large",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Large"
																					},
																					{
																						"name": "full",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Full"
																					}
																				],
																				"type": "collection",
																				"label": "Thumbnails"
																			}
																		],
																		"type": "array",
																		"label": "4:3 Image"
																	},
																	{
																		"name": "4:3 Image URL",
																		"type": "url",
																		"label": "4:3 Image URL"
																	},
																	{
																		"name": "1:1 Image",
																		"spec": [
																			{
																				"name": "id",
																				"type": "text",
																				"label": "ID"
																			},
																			{
																				"name": "url",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"name": "filename",
																				"type": "filename",
																				"label": "File name"
																			},
																			{
																				"name": "size",
																				"type": "uinteger",
																				"label": "Size"
																			},
																			{
																				"name": "type",
																				"type": "text",
																				"label": "MIME type"
																			},
																			{
																				"name": "thumbnails",
																				"spec": [
																					{
																						"name": "small",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Small"
																					},
																					{
																						"name": "large",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Large"
																					},
																					{
																						"name": "full",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Full"
																					}
																				],
																				"type": "collection",
																				"label": "Thumbnails"
																			}
																		],
																		"type": "array",
																		"label": "1:1 Image"
																	},
																	{
																		"name": "1:1 Image Url",
																		"type": "url",
																		"label": "1:1 Image Url"
																	},
																	{
																		"name": "Thumbnail image",
																		"spec": [
																			{
																				"name": "id",
																				"type": "text",
																				"label": "ID"
																			},
																			{
																				"name": "url",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"name": "filename",
																				"type": "filename",
																				"label": "File name"
																			},
																			{
																				"name": "size",
																				"type": "uinteger",
																				"label": "Size"
																			},
																			{
																				"name": "type",
																				"type": "text",
																				"label": "MIME type"
																			},
																			{
																				"name": "thumbnails",
																				"spec": [
																					{
																						"name": "small",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Small"
																					},
																					{
																						"name": "large",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Large"
																					},
																					{
																						"name": "full",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Full"
																					}
																				],
																				"type": "collection",
																				"label": "Thumbnails"
																			}
																		],
																		"type": "array",
																		"label": "Thumbnail image"
																	},
																	{
																		"name": "URL",
																		"type": "url",
																		"label": "URL"
																	},
																	{
																		"name": "Featured?",
																		"type": "text",
																		"label": "Featured?"
																	},
																	{
																		"name": "Blog Post Page - BG Image",
																		"type": "text",
																		"label": "Blog Post Page - BG Image",
																		"multiline": true
																	},
																	{
																		"name": "URL copy",
																		"spec": [
																			{
																				"name": "id",
																				"type": "text",
																				"label": "ID"
																			},
																			{
																				"name": "url",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"name": "filename",
																				"type": "filename",
																				"label": "File name"
																			},
																			{
																				"name": "size",
																				"type": "uinteger",
																				"label": "Size"
																			},
																			{
																				"name": "type",
																				"type": "text",
																				"label": "MIME type"
																			},
																			{
																				"name": "thumbnails",
																				"spec": [
																					{
																						"name": "small",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Small"
																					},
																					{
																						"name": "large",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Large"
																					},
																					{
																						"name": "full",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Full"
																					}
																				],
																				"type": "collection",
																				"label": "Thumbnails"
																			}
																		],
																		"type": "array",
																		"label": "URL copy"
																	},
																	{
																		"name": "Blog Home Image",
																		"spec": [
																			{
																				"name": "id",
																				"type": "text",
																				"label": "ID"
																			},
																			{
																				"name": "url",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"name": "filename",
																				"type": "filename",
																				"label": "File name"
																			},
																			{
																				"name": "size",
																				"type": "uinteger",
																				"label": "Size"
																			},
																			{
																				"name": "type",
																				"type": "text",
																				"label": "MIME type"
																			},
																			{
																				"name": "thumbnails",
																				"spec": [
																					{
																						"name": "small",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Small"
																					},
																					{
																						"name": "large",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Large"
																					},
																					{
																						"name": "full",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Full"
																					}
																				],
																				"type": "collection",
																				"label": "Thumbnails"
																			}
																		],
																		"type": "array",
																		"label": "Blog Home Image"
																	},
																	{
																		"name": "URL copy copy",
																		"spec": [
																			{
																				"name": "id",
																				"type": "text",
																				"label": "ID"
																			},
																			{
																				"name": "url",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"name": "filename",
																				"type": "filename",
																				"label": "File name"
																			},
																			{
																				"name": "size",
																				"type": "uinteger",
																				"label": "Size"
																			},
																			{
																				"name": "type",
																				"type": "text",
																				"label": "MIME type"
																			},
																			{
																				"name": "thumbnails",
																				"spec": [
																					{
																						"name": "small",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Small"
																					},
																					{
																						"name": "large",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Large"
																					},
																					{
																						"name": "full",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Full"
																					}
																				],
																				"type": "collection",
																				"label": "Thumbnails"
																			}
																		],
																		"type": "array",
																		"label": "URL copy copy"
																	},
																	{
																		"name": "vl",
																		"type": "text",
																		"label": "vl"
																	},
																	{
																		"name": "URL copy copy copy",
																		"spec": [
																			{
																				"name": "id",
																				"type": "text",
																				"label": "ID"
																			},
																			{
																				"name": "url",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"name": "filename",
																				"type": "filename",
																				"label": "File name"
																			},
																			{
																				"name": "size",
																				"type": "uinteger",
																				"label": "Size"
																			},
																			{
																				"name": "type",
																				"type": "text",
																				"label": "MIME type"
																			},
																			{
																				"name": "thumbnails",
																				"spec": [
																					{
																						"name": "small",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Small"
																					},
																					{
																						"name": "large",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Large"
																					},
																					{
																						"name": "full",
																						"spec": [
																							{
																								"name": "url",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"name": "width",
																								"type": "uinteger",
																								"label": "Width"
																							},
																							{
																								"name": "height",
																								"type": "uinteger",
																								"label": "Height"
																							}
																						],
																						"type": "collection",
																						"label": "Full"
																					}
																				],
																				"type": "collection",
																				"label": "Thumbnails"
																			}
																		],
																		"type": "array",
																		"label": "URL copy copy copy"
																	},
																	{
																		"name": "lottie",
																		"type": "text",
																		"label": "lottie"
																	},
																	{
																		"name": "Disp Ads",
																		"type": "text",
																		"label": "Disp Ads"
																	},
																	{
																		"name": "Tags",
																		"type": "text",
																		"label": "Tags"
																	},
																	{
																		"name": "Keyword Stats",
																		"spec": {
																			"label": "Record ID"
																		},
																		"type": "array",
																		"label": "Keyword Stats"
																	},
																	{
																		"name": "AI Gen Ideas - Keywords (from Keyword Stats) 2",
																		"type": "array",
																		"label": "AI Gen Ideas - Keywords (from Keyword Stats) 2"
																	},
																	{
																		"name": "AI Gen Ideas - Keywords (from Keyword Stats)",
																		"type": "array",
																		"label": "AI Gen Ideas - Keywords (from Keyword Stats)"
																	},
																	{
																		"name": "AI Gen Ideas - Keywords (from New table)",
																		"type": "array",
																		"label": "AI Gen Ideas - Keywords (from New table)"
																	},
																	{
																		"name": "New table",
																		"spec": {
																			"label": "Record ID"
																		},
																		"type": "array",
																		"label": "New table"
																	},
																	{
																		"name": "Master Relation \\",
																		"spec": {
																			"label": "Record ID"
																		},
																		"type": "array",
																		"label": "Master Relation \\"
																	},
																	{
																		"name": "Keyword Stats 2",
																		"spec": {
																			"label": "Record ID"
																		},
																		"type": "array",
																		"label": "Keyword Stats 2"
																	}
																]
											}
					},
						{
							"id": 74,
								"module": "airtable:ActionUpdateRecords",
									"version": 3,
										"parameters": {
											"__IMTCONN__": 365050
										},
											"mapper": {
												"id": "{{101.id}}",
													"base": "appDTUXQvgkjIvceg",
														"table": "tblznvhtv4qcJ5TPM",
															"record": {
																"fldEo06grdNw5EmEB": "{{54.choices[].text}}",
																	"fldRyr27WCTYM6Rm5": "{{73.choices[].text}}"
															},
																"typecast": false,
																	"useColumnId": false
											},
												"metadata": {
													"designer": {
														"x": 847,
															"y": 510
													},
														"restore": {
															"expect": {
																"base": {
																	"label": "Blog Articles "
																},
																	"table": {
																		"label": "Articles"
																	},
																		"record": {
																			"nested": {
																				"fld6PQT4BKi9bQb0g": {
																					"mode": "chose"
																				},
																					"fld8uNBZ9ulQiWnLN": {
																						"mode": "chose"
																					},
																						"fldBV0qjRH0veJHmN": {
																							"mode": "edit"
																						},
																							"fldDCVCr8qSfqUjZr": {
																								"mode": "chose"
																							},
																								"fldFhgHIMgZiaGkdI": {
																									"mode": "chose"
																								},
																									"fldI1DkfxNeU7ghZX": {
																										"mode": "chose"
																									},
																										"fldI3QIRDkquLG5xd": {
																											"mode": "chose"
																										},
																											"fldNUG1XY4HtRyGrF": {
																												"mode": "chose"
																											},
																												"fldNsAmJYjDqpwMXx": {
																													"mode": "chose"
																												},
																													"fldTWuIZXDOQYX3E2": {
																														"mode": "chose"
																													},
																														"fldXjTm7bCyGwlxtc": {
																															"mode": "chose"
																														},
																															"fldXzfybHWG25OInJ": {
																																"mode": "chose"
																															},
																																"fldZvJROus4QqCuIH": {
																																	"mode": "chose"
																																},
																																	"fldcmft1ZViMIZVT4": {
																																		"mode": "chose"
																																	},
																																		"fldf1ZAC1OD5DAbwR": {
																																			"mode": "chose"
																																		},
																																			"fldfDb8rdV8N0nobz": {
																																				"mode": "chose"
																																			},
																																				"fldfWPIuDl6G3CL8p": {
																																					"mode": "edit"
																																				},
																																					"fldfnVVDN7oxeSc7Y": {
																																						"mode": "chose"
																																					},
																																						"fldgFmysxjG6Zhdjs": {
																																							"mode": "edit"
																																						},
																																							"fldk0lL6UBhic2Y8p": {
																																								"mode": "chose"
																																							},
																																								"fldmMEcGOxQF7Cgpv": {
																																									"mode": "chose"
																																								},
																																									"fldoHHAKHoIsbFC6a": {
																																										"mode": "chose"
																																									},
																																										"fldtRod4Ob4IolxwU": {
																																											"mode": "chose"
																																										},
																																											"fldvLUgOumhobHnfq": {
																																												"mode": "chose"
																																											}
																			}
																		},
																			"typecast": {
																				"mode": "chose"
																			},
																				"useColumnId": {
																					"mode": "chose"
																				}
															},
																"parameters": {
																	"__IMTCONN__": {
																		"data": {
																			"scoped": "true",
																				"connection": "airtable2"
																		},
																			"label": "My Airtable connection"
																	}
																}
														},
															"parameters": [
																{
																	"name": "__IMTCONN__",
																	"type": "account:airtable2",
																	"label": "Connection",
																	"required": true
																}
															],
																"expect": [
																	{
																		"name": "base",
																		"type": "select",
																		"label": "Base",
																		"required": true
																	},
																	{
																		"name": "typecast",
																		"type": "boolean",
																		"label": "Smart links",
																		"required": true
																	},
																	{
																		"name": "useColumnId",
																		"type": "boolean",
																		"label": "Use Column ID",
																		"required": true
																	},
																	{
																		"name": "table",
																		"type": "select",
																		"label": "Table",
																		"required": true
																	},
																	{
																		"name": "id",
																		"type": "text",
																		"label": "Record ID",
																		"required": true
																	},
																	{
																		"name": "record",
																		"spec": [
																			{
																				"name": "fldEo06grdNw5EmEB",
																				"type": "text",
																				"label": "Headline S"
																			},
																			{
																				"name": "fldf1ZAC1OD5DAbwR",
																				"spec": {
																					"mode": "edit",
																					"name": "value",
																					"type": "select",
																					"label": "Value",
																					"options": [
																						{
																							"label": "Fastest way to get your Facebook Conversion API setup.",
																							"value": "Fastest way to get your Facebook Conversion API setup."
																						},
																						{
																							"label": "7 Ways to Increase the Quality  of your Facebook Pixel Data",
																							"value": "7 Ways to Increase the Quality  of your Facebook Pixel Data"
																						},
																						{
																							"label": "Tragedy Strikes",
																							"value": "Tragedy Strikes"
																						},
																						{
																							"label": "A Talk With My Dad",
																							"value": "A Talk With My Dad"
																						},
																						{
																							"label": "Search Engine Optimization For Small Businesses",
																							"value": "Search Engine Optimization For Small Businesses"
																						},
																						{
																							"label": "How does SEO benefit from web design?",
																							"value": "How does SEO benefit from web design?"
																						},
																						{
																							"label": "How-to Connect Your IONOS Domain To A CMS (Kartra) 7 Easy Steps",
																							"value": "How-to Connect Your IONOS Domain To A CMS (Kartra) 7 Easy Steps"
																						},
																						{
																							"label": "The Essence Of The Soul; A Talk With My Grandma",
																							"value": "The Essence Of The Soul; A Talk With My Grandma"
																						},
																						{
																							"label": "Coronavirus; Statistics",
																							"value": "Coronavirus; Statistics"
																						},
																						{
																							"label": "Information",
																							"value": "Information"
																						},
																						{
																							"label": "and Background",
																							"value": "and Background"
																						},
																						{
																							"label": "Tragedy Strikes (Act Two)",
																							"value": "Tragedy Strikes (Act Two)"
																						},
																						{
																							"label": "How To Get A Domain Name Through Ionos (5 Easy Steps)",
																							"value": "How To Get A Domain Name Through Ionos (5 Easy Steps)"
																						},
																						{
																							"label": "The Fire Escape Ladder & The Bed Sheet Escape Rope",
																							"value": "The Fire Escape Ladder & The Bed Sheet Escape Rope"
																						},
																						{
																							"label": "What is a Sales Funnel (and how to create one)",
																							"value": "What is a Sales Funnel (and how to create one)"
																						},
																						{
																							"label": "Just Believe",
																							"value": "Just Believe"
																						},
																						{
																							"label": "\"Maximizing Your Digital Marketing Strategy with XML\"",
																							"value": "\"Maximizing Your Digital Marketing Strategy with XML\""
																						},
																						{
																							"label": "Web design agency",
																							"value": "Web design agency"
																						},
																						{
																							"label": "Graphic design services",
																							"value": "Graphic design services"
																						},
																						{
																							"label": "WordPress marketing strategies",
																							"value": "WordPress marketing strategies"
																						},
																						{
																							"label": "Website redesign for SEO",
																							"value": "Website redesign for SEO"
																						},
																						{
																							"label": "Custom conversion optimization for Facebook ads",
																							"value": "Custom conversion optimization for Facebook ads"
																						},
																						{
																							"label": "Cincinnati digital marketing services",
																							"value": "Cincinnati digital marketing services"
																						},
																						{
																							"label": "Kajabi website design services",
																							"value": "Kajabi website design services"
																						},
																						{
																							"label": "Kartra marketing automation",
																							"value": "Kartra marketing automation"
																						},
																						{
																							"label": "WordPress website design services",
																							"value": "WordPress website design services"
																						},
																						{
																							"label": "AI in digital marketing",
																							"value": "AI in digital marketing"
																						},
																						{
																							"label": "Profitable sales funnel design",
																							"value": "Profitable sales funnel design"
																						},
																						{
																							"label": "Data analytics for business",
																							"value": "Data analytics for business"
																						},
																						{
																							"label": "Facebook pixel implementation",
																							"value": "Facebook pixel implementation"
																						},
																						{
																							"label": "Website design agency",
																							"value": "Website design agency"
																						},
																						{
																							"label": "Brand management strategies",
																							"value": "Brand management strategies"
																						},
																						{
																							"label": "Instagram ads management",
																							"value": "Instagram ads management"
																						},
																						{
																							"label": "Free online website builder tools",
																							"value": "Free online website builder tools"
																						},
																						{
																							"label": "Facebook retargeting pixel setup",
																							"value": "Facebook retargeting pixel setup"
																						},
																						{
																							"label": "Digital marketing and graphic design services",
																							"value": "Digital marketing and graphic design services"
																						},
																						{
																							"label": "Facebook remarketing pixel setup",
																							"value": "Facebook remarketing pixel setup"
																						},
																						{
																							"label": "Digital branding agency services",
																							"value": "Digital branding agency services"
																						},
																						{
																							"label": "Machine learning applications in digital marketing",
																							"value": "Machine learning applications in digital marketing"
																						},
																						{
																							"label": "Kajabi marketing strategies",
																							"value": "Kajabi marketing strategies"
																						},
																						{
																							"label": "Digital marketing and website design services",
																							"value": "Digital marketing and website design services"
																						},
																						{
																							"label": "Facebook ads management",
																							"value": "Facebook ads management"
																						},
																						{
																							"label": "Professional website design services",
																							"value": "Professional website design services"
																						},
																						{
																							"label": "Facebook conversion tracking setup",
																							"value": "Facebook conversion tracking setup"
																						},
																						{
																							"label": "Digital web agency services",
																							"value": "Digital web agency services"
																						},
																						{
																							"label": "Email marketing campaigns",
																							"value": "Email marketing campaigns"
																						},
																						{
																							"label": "[Collection]",
																							"value": "[Collection]"
																						}
																					]
																				},
																				"type": "array",
																				"label": "Headline S copy"
																			},
																			{
																				"name": "fldXirSTFRMDHfGv4",
																				"type": "text",
																				"label": "Headline"
																			},
																			{
																				"name": "fldtJ45cBmKjiwnvX",
																				"type": "text",
																				"label": "Slug"
																			},
																			{
																				"name": "fld59oVkNRgdSqKSL",
																				"type": "text",
																				"label": "Item ID"
																			},
																			{
																				"name": "fldk0lL6UBhic2Y8p",
																				"spec": {
																					"name": "value",
																					"label": "Record ID"
																				},
																				"type": "array",
																				"label": "Imported table 2"
																			},
																			{
																				"name": "fldXjTm7bCyGwlxtc",
																				"type": "boolean",
																				"label": "Published"
																			},
																			{
																				"mode": "edit",
																				"name": "fldfWPIuDl6G3CL8p",
																				"type": "select",
																				"label": "Status ",
																				"validate": {
																					"enum": [
																						"Published ",
																						"Scheduled",
																						"Saved ",
																						"Draft",
																						"Archived",
																						"Active",
																						"16x9 Image",
																						"https://uploads-ssl.webflow.com/5e7e2e06df0f1eabeb57e1e6/635e6abb6c0ae0a74d625f4a_liui.png",
																						"https://uploads-ssl.webflow.com/5e7e2e06df0f1eabeb57e1e6/635e6791c917936f7f42f5ed_Untitled%20design.png",
																						"https://uploads-ssl.webflow.com/5e7e2e06df0f1eabeb57e1e6/635e664fc9179356e542ea1f_Untitled%20design.png",
																						"https://uploads-ssl.webflow.com/5e7e2e06df0f1eabeb57e1e6/635e5ed2e19fbd00d40e4a77_Untitled%20design.png",
																						"https://uploads-ssl.webflow.com/5e7e2e06df0f1eabeb57e1e6/635e5cdf70620bc132d3d970_Untitled%20design.png",
																						"https://uploads-ssl.webflow.com/5e7e2e06df0f1eabeb57e1e6/637df47ecd90333b35100883_Website%20Visitor.png",
																						"https://uploads-ssl.webflow.com/5e7e2e06df0f1eabeb57e1e6/638fd6f9854b99f5c3bd2a31_Untitled%20design%20(25).png",
																						"https://uploads-ssl.webflow.com/5e7e2e06df0f1eabeb57e1e6/63a4f2d214e99cb0b1e1d944_Untitled%20design%20(36).png"
																					]
																				}
																			},
																			{
																				"name": "fld9tFyIQEtfQQQ1e",
																				"type": "number",
																				"label": "Collection ID"
																			},
																			{
																				"name": "fldvWdIBa5IYPlXUe",
																				"time": true,
																				"type": "date",
																				"label": "Published On"
																			},
																			{
																				"name": "fldmMEcGOxQF7Cgpv",
																				"spec": [
																					{
																						"name": "url",
																						"type": "text",
																						"label": "File URL"
																					},
																					{
																						"name": "filename",
																						"type": "filename",
																						"label": "File name"
																					}
																				],
																				"type": "array",
																				"label": "Main Image"
																			},
																			{
																				"name": "fldznDfM50Ab2VdmV",
																				"type": "text",
																				"label": "Post Body"
																			},
																			{
																				"name": "fldkKclg8jJsO9cvn",
																				"type": "text",
																				"label": "Post Summary"
																			},
																			{
																				"name": "fldfnVVDN7oxeSc7Y",
																				"spec": [
																					{
																						"name": "url",
																						"type": "text",
																						"label": "File URL"
																					},
																					{
																						"name": "filename",
																						"type": "filename",
																						"label": "File name"
																					}
																				],
																				"type": "array",
																				"label": "IMG 1"
																			},
																			{
																				"name": "fldRyr27WCTYM6Rm5",
																				"type": "text",
																				"label": "P1"
																			},
																			{
																				"name": "fldvLUgOumhobHnfq",
																				"spec": [
																					{
																						"name": "url",
																						"type": "text",
																						"label": "File URL"
																					},
																					{
																						"name": "filename",
																						"type": "filename",
																						"label": "File name"
																					}
																				],
																				"type": "array",
																				"label": "IMG 2"
																			},
																			{
																				"name": "fldjSKeEpIfNaM9yc",
																				"type": "text",
																				"label": "P2"
																			},
																			{
																				"name": "fldtRod4Ob4IolxwU",
																				"spec": [
																					{
																						"name": "url",
																						"type": "text",
																						"label": "File URL"
																					},
																					{
																						"name": "filename",
																						"type": "filename",
																						"label": "File name"
																					}
																				],
																				"type": "array",
																				"label": "IMG 3"
																			},
																			{
																				"name": "fld22j2mGsSDAKdwC",
																				"type": "text",
																				"label": "P3"
																			},
																			{
																				"name": "fldcmft1ZViMIZVT4",
																				"spec": [
																					{
																						"name": "url",
																						"type": "text",
																						"label": "File URL"
																					},
																					{
																						"name": "filename",
																						"type": "filename",
																						"label": "File name"
																					}
																				],
																				"type": "array",
																				"label": "IMG 4"
																			},
																			{
																				"name": "fld8uNBZ9ulQiWnLN",
																				"spec": {
																					"name": "value",
																					"label": "Record ID"
																				},
																				"type": "array",
																				"label": "P4"
																			},
																			{
																				"name": "fld0RRcFilbX9pHbW",
																				"type": "text",
																				"label": "Author Picture"
																			},
																			{
																				"mode": "edit",
																				"name": "fldBV0qjRH0veJHmN",
																				"type": "select",
																				"label": "Author",
																				"validate": {
																					"enum": [
																						"Corey Shirey ",
																						"Corey Shirey",
																						"Author"
																					]
																				}
																			},
																			{
																				"name": "fld8SX3AfzOU9mneu",
																				"type": "url",
																				"label": "Author URL"
																			},
																			{
																				"name": "fldfDb8rdV8N0nobz",
																				"spec": [
																					{
																						"name": "url",
																						"type": "text",
																						"label": "File URL"
																					},
																					{
																						"name": "filename",
																						"type": "filename",
																						"label": "File name"
																					}
																				],
																				"type": "array",
																				"label": "16x9 Image"
																			},
																			{
																				"name": "fldHu898IejuOqfFw",
																				"type": "url",
																				"label": "16x9 Image URL"
																			},
																			{
																				"name": "fldZvJROus4QqCuIH",
																				"spec": [
																					{
																						"name": "url",
																						"type": "text",
																						"label": "File URL"
																					},
																					{
																						"name": "filename",
																						"type": "filename",
																						"label": "File name"
																					}
																				],
																				"type": "array",
																				"label": "4:3 Image"
																			},
																			{
																				"name": "fldojWNRAD5ztaxm4",
																				"type": "url",
																				"label": "4:3 Image URL"
																			},
																			{
																				"name": "fld6PQT4BKi9bQb0g",
																				"spec": [
																					{
																						"name": "url",
																						"type": "text",
																						"label": "File URL"
																					},
																					{
																						"name": "filename",
																						"type": "filename",
																						"label": "File name"
																					}
																				],
																				"type": "array",
																				"label": "1:1 Image"
																			},
																			{
																				"name": "fldBXJRrbwhigfVtY",
																				"type": "url",
																				"label": "1:1 Image Url"
																			},
																			{
																				"name": "fldFhgHIMgZiaGkdI",
																				"spec": [
																					{
																						"name": "url",
																						"type": "text",
																						"label": "File URL"
																					},
																					{
																						"name": "filename",
																						"type": "filename",
																						"label": "File name"
																					}
																				],
																				"type": "array",
																				"label": "Thumbnail image"
																			},
																			{
																				"name": "fldUOpxh3ayCldWom",
																				"type": "url",
																				"label": "URL"
																			},
																			{
																				"mode": "edit",
																				"name": "fldgFmysxjG6Zhdjs",
																				"type": "select",
																				"label": "Featured?",
																				"validate": {
																					"enum": [
																						"",
																						"true",
																						"false",
																						"Featured?"
																					]
																				}
																			},
																			{
																				"name": "fldNzGRRezuc2Kaj1",
																				"type": "text",
																				"label": "Blog Post Page - BG Image"
																			},
																			{
																				"name": "fldXzfybHWG25OInJ",
																				"spec": [
																					{
																						"name": "url",
																						"type": "text",
																						"label": "File URL"
																					},
																					{
																						"name": "filename",
																						"type": "filename",
																						"label": "File name"
																					}
																				],
																				"type": "array",
																				"label": "URL copy"
																			},
																			{
																				"name": "fldI3QIRDkquLG5xd",
																				"spec": [
																					{
																						"name": "url",
																						"type": "text",
																						"label": "File URL"
																					},
																					{
																						"name": "filename",
																						"type": "filename",
																						"label": "File name"
																					}
																				],
																				"type": "array",
																				"label": "Blog Home Image"
																			},
																			{
																				"name": "fldTWuIZXDOQYX3E2",
																				"spec": [
																					{
																						"name": "url",
																						"type": "text",
																						"label": "File URL"
																					},
																					{
																						"name": "filename",
																						"type": "filename",
																						"label": "File name"
																					}
																				],
																				"type": "array",
																				"label": "URL copy copy"
																			},
																			{
																				"name": "fldUyll7wgNyVAs4D",
																				"type": "text",
																				"label": "vl"
																			},
																			{
																				"name": "fldNsAmJYjDqpwMXx",
																				"spec": [
																					{
																						"name": "url",
																						"type": "text",
																						"label": "File URL"
																					},
																					{
																						"name": "filename",
																						"type": "filename",
																						"label": "File name"
																					}
																				],
																				"type": "array",
																				"label": "URL copy copy copy"
																			},
																			{
																				"name": "fldv4PST2GEuLdG3Y",
																				"type": "text",
																				"label": "lottie"
																			},
																			{
																				"name": "fld8Fw7QX2t4OvvFo",
																				"type": "text",
																				"label": "Disp Ads"
																			},
																			{
																				"name": "fldIuNKnPOHTJG8vL",
																				"type": "text",
																				"label": "Tags"
																			},
																			{
																				"name": "fldoHHAKHoIsbFC6a",
																				"spec": {
																					"name": "value",
																					"label": "Record ID"
																				},
																				"type": "array",
																				"label": "Keyword Stats"
																			},
																			{
																				"name": "fldI1DkfxNeU7ghZX",
																				"spec": {
																					"name": "value",
																					"label": "Record ID"
																				},
																				"type": "array",
																				"label": "New table"
																			},
																			{
																				"name": "fldDCVCr8qSfqUjZr",
																				"spec": {
																					"name": "value",
																					"label": "Record ID"
																				},
																				"type": "array",
																				"label": "Master Relation \\"
																			},
																			{
																				"name": "fldNUG1XY4HtRyGrF",
																				"spec": {
																					"name": "value",
																					"label": "Record ID"
																				},
																				"type": "array",
																				"label": "Keyword Stats 2"
																			}
																		],
																		"type": "collection",
																		"label": "Record"
																	}
																],
																	"interface": [
																		{
																			"name": "id",
																			"type": "text",
																			"label": "ID"
																		},
																		{
																			"name": "createdTime",
																			"type": "date",
																			"label": "Created Time"
																		},
																		{
																			"name": "Headline S",
																			"type": "text",
																			"label": "Headline S"
																		},
																		{
																			"name": "Original AI Title",
																			"type": "array",
																			"label": "Original AI Title"
																		},
																		{
																			"name": "Headline S copy",
																			"type": "array",
																			"label": "Headline S copy",
																			"editable": true
																		},
																		{
																			"name": "Headline",
																			"type": "text",
																			"label": "Headline"
																		},
																		{
																			"name": "Slug",
																			"type": "text",
																			"label": "Slug"
																		},
																		{
																			"name": "Item ID",
																			"type": "text",
																			"label": "Item ID"
																		},
																		{
																			"name": "Imported table 2",
																			"spec": {
																				"label": "Record ID"
																			},
																			"type": "array",
																			"label": "Imported table 2"
																		},
																		{
																			"name": "Published",
																			"type": "boolean",
																			"label": "Published"
																		},
																		{
																			"name": "Status ",
																			"type": "text",
																			"label": "Status "
																		},
																		{
																			"name": "Collection ID",
																			"type": "number",
																			"label": "Collection ID"
																		},
																		{
																			"name": "Created Time",
																			"type": "date",
																			"label": "Created Time"
																		},
																		{
																			"name": "Updated On",
																			"type": "date",
																			"label": "Updated On"
																		},
																		{
																			"name": "Published On",
																			"time": true,
																			"type": "date",
																			"label": "Published On"
																		},
																		{
																			"name": "Main Image",
																			"spec": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "url",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "filename",
																					"type": "filename",
																					"label": "File name"
																				},
																				{
																					"name": "size",
																					"type": "uinteger",
																					"label": "Size"
																				},
																				{
																					"name": "type",
																					"type": "text",
																					"label": "MIME type"
																				},
																				{
																					"name": "thumbnails",
																					"spec": [
																						{
																							"name": "small",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Small"
																						},
																						{
																							"name": "large",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Large"
																						},
																						{
																							"name": "full",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Full"
																						}
																					],
																					"type": "collection",
																					"label": "Thumbnails"
																				}
																			],
																			"type": "array",
																			"label": "Main Image"
																		},
																		{
																			"name": "Post Body",
																			"type": "text",
																			"label": "Post Body",
																			"multiline": true
																		},
																		{
																			"name": "Post Summary",
																			"type": "text",
																			"label": "Post Summary",
																			"multiline": true
																		},
																		{
																			"name": "IMG 1",
																			"spec": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "url",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "filename",
																					"type": "filename",
																					"label": "File name"
																				},
																				{
																					"name": "size",
																					"type": "uinteger",
																					"label": "Size"
																				},
																				{
																					"name": "type",
																					"type": "text",
																					"label": "MIME type"
																				},
																				{
																					"name": "thumbnails",
																					"spec": [
																						{
																							"name": "small",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Small"
																						},
																						{
																							"name": "large",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Large"
																						},
																						{
																							"name": "full",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Full"
																						}
																					],
																					"type": "collection",
																					"label": "Thumbnails"
																				}
																			],
																			"type": "array",
																			"label": "IMG 1"
																		},
																		{
																			"name": "P1",
																			"type": "text",
																			"label": "P1",
																			"multiline": true
																		},
																		{
																			"name": "IMG 2",
																			"spec": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "url",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "filename",
																					"type": "filename",
																					"label": "File name"
																				},
																				{
																					"name": "size",
																					"type": "uinteger",
																					"label": "Size"
																				},
																				{
																					"name": "type",
																					"type": "text",
																					"label": "MIME type"
																				},
																				{
																					"name": "thumbnails",
																					"spec": [
																						{
																							"name": "small",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Small"
																						},
																						{
																							"name": "large",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Large"
																						},
																						{
																							"name": "full",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Full"
																						}
																					],
																					"type": "collection",
																					"label": "Thumbnails"
																				}
																			],
																			"type": "array",
																			"label": "IMG 2"
																		},
																		{
																			"name": "P2",
																			"type": "text",
																			"label": "P2",
																			"multiline": true
																		},
																		{
																			"name": "IMG 3",
																			"spec": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "url",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "filename",
																					"type": "filename",
																					"label": "File name"
																				},
																				{
																					"name": "size",
																					"type": "uinteger",
																					"label": "Size"
																				},
																				{
																					"name": "type",
																					"type": "text",
																					"label": "MIME type"
																				},
																				{
																					"name": "thumbnails",
																					"spec": [
																						{
																							"name": "small",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Small"
																						},
																						{
																							"name": "large",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Large"
																						},
																						{
																							"name": "full",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Full"
																						}
																					],
																					"type": "collection",
																					"label": "Thumbnails"
																				}
																			],
																			"type": "array",
																			"label": "IMG 3"
																		},
																		{
																			"name": "P3",
																			"type": "text",
																			"label": "P3",
																			"multiline": true
																		},
																		{
																			"name": "IMG 4",
																			"spec": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "url",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "filename",
																					"type": "filename",
																					"label": "File name"
																				},
																				{
																					"name": "size",
																					"type": "uinteger",
																					"label": "Size"
																				},
																				{
																					"name": "type",
																					"type": "text",
																					"label": "MIME type"
																				},
																				{
																					"name": "thumbnails",
																					"spec": [
																						{
																							"name": "small",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Small"
																						},
																						{
																							"name": "large",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Large"
																						},
																						{
																							"name": "full",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Full"
																						}
																					],
																					"type": "collection",
																					"label": "Thumbnails"
																				}
																			],
																			"type": "array",
																			"label": "IMG 4"
																		},
																		{
																			"name": "P4",
																			"spec": {
																				"label": "Record ID"
																			},
																			"type": "array",
																			"label": "P4"
																		},
																		{
																			"name": "Author Picture",
																			"type": "text",
																			"label": "Author Picture",
																			"multiline": true
																		},
																		{
																			"name": "Author",
																			"type": "text",
																			"label": "Author"
																		},
																		{
																			"name": "Author URL",
																			"type": "url",
																			"label": "Author URL"
																		},
																		{
																			"name": "16x9 Image",
																			"spec": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "url",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "filename",
																					"type": "filename",
																					"label": "File name"
																				},
																				{
																					"name": "size",
																					"type": "uinteger",
																					"label": "Size"
																				},
																				{
																					"name": "type",
																					"type": "text",
																					"label": "MIME type"
																				},
																				{
																					"name": "thumbnails",
																					"spec": [
																						{
																							"name": "small",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Small"
																						},
																						{
																							"name": "large",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Large"
																						},
																						{
																							"name": "full",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Full"
																						}
																					],
																					"type": "collection",
																					"label": "Thumbnails"
																				}
																			],
																			"type": "array",
																			"label": "16x9 Image"
																		},
																		{
																			"name": "16x9 Image URL",
																			"type": "url",
																			"label": "16x9 Image URL"
																		},
																		{
																			"name": "4:3 Image",
																			"spec": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "url",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "filename",
																					"type": "filename",
																					"label": "File name"
																				},
																				{
																					"name": "size",
																					"type": "uinteger",
																					"label": "Size"
																				},
																				{
																					"name": "type",
																					"type": "text",
																					"label": "MIME type"
																				},
																				{
																					"name": "thumbnails",
																					"spec": [
																						{
																							"name": "small",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Small"
																						},
																						{
																							"name": "large",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Large"
																						},
																						{
																							"name": "full",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Full"
																						}
																					],
																					"type": "collection",
																					"label": "Thumbnails"
																				}
																			],
																			"type": "array",
																			"label": "4:3 Image"
																		},
																		{
																			"name": "4:3 Image URL",
																			"type": "url",
																			"label": "4:3 Image URL"
																		},
																		{
																			"name": "1:1 Image",
																			"spec": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "url",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "filename",
																					"type": "filename",
																					"label": "File name"
																				},
																				{
																					"name": "size",
																					"type": "uinteger",
																					"label": "Size"
																				},
																				{
																					"name": "type",
																					"type": "text",
																					"label": "MIME type"
																				},
																				{
																					"name": "thumbnails",
																					"spec": [
																						{
																							"name": "small",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Small"
																						},
																						{
																							"name": "large",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Large"
																						},
																						{
																							"name": "full",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Full"
																						}
																					],
																					"type": "collection",
																					"label": "Thumbnails"
																				}
																			],
																			"type": "array",
																			"label": "1:1 Image"
																		},
																		{
																			"name": "1:1 Image Url",
																			"type": "url",
																			"label": "1:1 Image Url"
																		},
																		{
																			"name": "Thumbnail image",
																			"spec": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "url",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "filename",
																					"type": "filename",
																					"label": "File name"
																				},
																				{
																					"name": "size",
																					"type": "uinteger",
																					"label": "Size"
																				},
																				{
																					"name": "type",
																					"type": "text",
																					"label": "MIME type"
																				},
																				{
																					"name": "thumbnails",
																					"spec": [
																						{
																							"name": "small",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Small"
																						},
																						{
																							"name": "large",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Large"
																						},
																						{
																							"name": "full",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Full"
																						}
																					],
																					"type": "collection",
																					"label": "Thumbnails"
																				}
																			],
																			"type": "array",
																			"label": "Thumbnail image"
																		},
																		{
																			"name": "URL",
																			"type": "url",
																			"label": "URL"
																		},
																		{
																			"name": "Featured?",
																			"type": "text",
																			"label": "Featured?"
																		},
																		{
																			"name": "Blog Post Page - BG Image",
																			"type": "text",
																			"label": "Blog Post Page - BG Image",
																			"multiline": true
																		},
																		{
																			"name": "URL copy",
																			"spec": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "url",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "filename",
																					"type": "filename",
																					"label": "File name"
																				},
																				{
																					"name": "size",
																					"type": "uinteger",
																					"label": "Size"
																				},
																				{
																					"name": "type",
																					"type": "text",
																					"label": "MIME type"
																				},
																				{
																					"name": "thumbnails",
																					"spec": [
																						{
																							"name": "small",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Small"
																						},
																						{
																							"name": "large",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Large"
																						},
																						{
																							"name": "full",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Full"
																						}
																					],
																					"type": "collection",
																					"label": "Thumbnails"
																				}
																			],
																			"type": "array",
																			"label": "URL copy"
																		},
																		{
																			"name": "Blog Home Image",
																			"spec": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "url",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "filename",
																					"type": "filename",
																					"label": "File name"
																				},
																				{
																					"name": "size",
																					"type": "uinteger",
																					"label": "Size"
																				},
																				{
																					"name": "type",
																					"type": "text",
																					"label": "MIME type"
																				},
																				{
																					"name": "thumbnails",
																					"spec": [
																						{
																							"name": "small",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Small"
																						},
																						{
																							"name": "large",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Large"
																						},
																						{
																							"name": "full",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Full"
																						}
																					],
																					"type": "collection",
																					"label": "Thumbnails"
																				}
																			],
																			"type": "array",
																			"label": "Blog Home Image"
																		},
																		{
																			"name": "URL copy copy",
																			"spec": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "url",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "filename",
																					"type": "filename",
																					"label": "File name"
																				},
																				{
																					"name": "size",
																					"type": "uinteger",
																					"label": "Size"
																				},
																				{
																					"name": "type",
																					"type": "text",
																					"label": "MIME type"
																				},
																				{
																					"name": "thumbnails",
																					"spec": [
																						{
																							"name": "small",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Small"
																						},
																						{
																							"name": "large",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Large"
																						},
																						{
																							"name": "full",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Full"
																						}
																					],
																					"type": "collection",
																					"label": "Thumbnails"
																				}
																			],
																			"type": "array",
																			"label": "URL copy copy"
																		},
																		{
																			"name": "vl",
																			"type": "text",
																			"label": "vl"
																		},
																		{
																			"name": "URL copy copy copy",
																			"spec": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "url",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "filename",
																					"type": "filename",
																					"label": "File name"
																				},
																				{
																					"name": "size",
																					"type": "uinteger",
																					"label": "Size"
																				},
																				{
																					"name": "type",
																					"type": "text",
																					"label": "MIME type"
																				},
																				{
																					"name": "thumbnails",
																					"spec": [
																						{
																							"name": "small",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Small"
																						},
																						{
																							"name": "large",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Large"
																						},
																						{
																							"name": "full",
																							"spec": [
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "width",
																									"type": "uinteger",
																									"label": "Width"
																								},
																								{
																									"name": "height",
																									"type": "uinteger",
																									"label": "Height"
																								}
																							],
																							"type": "collection",
																							"label": "Full"
																						}
																					],
																					"type": "collection",
																					"label": "Thumbnails"
																				}
																			],
																			"type": "array",
																			"label": "URL copy copy copy"
																		},
																		{
																			"name": "lottie",
																			"type": "text",
																			"label": "lottie"
																		},
																		{
																			"name": "Disp Ads",
																			"type": "text",
																			"label": "Disp Ads"
																		},
																		{
																			"name": "Tags",
																			"type": "text",
																			"label": "Tags"
																		},
																		{
																			"name": "Keyword Stats",
																			"spec": {
																				"label": "Record ID"
																			},
																			"type": "array",
																			"label": "Keyword Stats"
																		},
																		{
																			"name": "AI Gen Ideas - Keywords (from Keyword Stats) 2",
																			"type": "array",
																			"label": "AI Gen Ideas - Keywords (from Keyword Stats) 2"
																		},
																		{
																			"name": "AI Gen Ideas - Keywords (from Keyword Stats)",
																			"type": "array",
																			"label": "AI Gen Ideas - Keywords (from Keyword Stats)"
																		},
																		{
																			"name": "AI Gen Ideas - Keywords (from New table)",
																			"type": "array",
																			"label": "AI Gen Ideas - Keywords (from New table)"
																		},
																		{
																			"name": "New table",
																			"spec": {
																				"label": "Record ID"
																			},
																			"type": "array",
																			"label": "New table"
																		},
																		{
																			"name": "Master Relation \\",
																			"spec": {
																				"label": "Record ID"
																			},
																			"type": "array",
																			"label": "Master Relation \\"
																		},
																		{
																			"name": "Keyword Stats 2",
																			"spec": {
																				"label": "Record ID"
																			},
																			"type": "array",
																			"label": "Keyword Stats 2"
																		}
																	]
												}
						},
							{
								"id": 77,
									"module": "openai-gpt-3:CreateCompletion",
										"version": 1,
											"parameters": {
												"__IMTCONN__": 588038
											},
												"mapper": {
													"model": "text-davinci-003",
														"top_p": ".89",
															"prompt": "\"Your best skills and experience include creating, executing, and measuring successful digital marketing campaigns, optimizing website usability, code, and functionality, developing compelling content, and using analytics to assess performance and identify areas for improvement. I am organized, detail-oriented, and highly motivated to help businesses reach their goals. I use my knowledge and skills to create strategies that are tailored to each business's needs and objectives.\" \n...\n\"{{54.choices[].text}}\"\n...\n\"Write a short outline with a table of contents for a blog article using {{54.choices[].text}} as the subject Write a short outline with table of contents. Include 5 major keywords or keyword queries that relate your title as the headline for each item in the table of contents.\"\n...\n\"{{98.choices[].text}}\"\n...\nWrite the second paragraph for the second item in the table of contents. Include supporting links in that paragraph as a hyperlink. Format the paragraph in html ",
																"max_tokens": "1000",
																	"temperature": ".89",
																		"n_completions": "1"
												},
													"metadata": {
														"designer": {
															"x": 1200,
																"y": 450
														},
															"restore": {
																"expect": {
																	"echo": {
																		"mode": "chose"
																	},
																		"model": {
																			"mode": "chose",
																				"label": "text-davinci-003"
																		}
																},
																	"parameters": {
																		"__IMTCONN__": {
																			"data": {
																				"scoped": "true",
																					"connection": "openai-gpt-3"
																			},
																				"label": "My OpenAI connection"
																		}
																	}
															},
																"parameters": [
																	{
																		"name": "__IMTCONN__",
																		"type": "account:openai-gpt-3",
																		"label": "Connection",
																		"required": true
																	}
																],
																	"expect": [
																		{
																			"name": "model",
																			"type": "select",
																			"label": "Model",
																			"required": true
																		},
																		{
																			"name": "prompt",
																			"type": "text",
																			"label": "Prompt"
																		},
																		{
																			"name": "max_tokens",
																			"type": "number",
																			"label": "Max Tokens"
																		},
																		{
																			"name": "temperature",
																			"type": "number",
																			"label": "Temperature"
																		},
																		{
																			"name": "top_p",
																			"type": "number",
																			"label": "Top p"
																		},
																		{
																			"name": "n_completions",
																			"type": "number",
																			"label": "N"
																		},
																		{
																			"name": "echo",
																			"type": "boolean",
																			"label": "Echo"
																		}
																	]
													}
							},
								{
									"id": 78,
										"module": "airtable:ActionUpdateRecords",
											"version": 3,
												"parameters": {
													"__IMTCONN__": 365050
												},
													"mapper": {
														"id": "{{74.id}}",
															"base": "appDTUXQvgkjIvceg",
																"table": "tblznvhtv4qcJ5TPM",
																	"record": {
																		"fldjSKeEpIfNaM9yc": "{{77.choices[].text}}"
																	},
																		"typecast": true,
																			"useColumnId": false
													},
														"metadata": {
															"designer": {
																"x": 1500,
																	"y": 450
															},
																"restore": {
																	"expect": {
																		"base": {
																			"label": "Blog Articles "
																		},
																			"table": {
																				"label": "Articles"
																			},
																				"record": {
																					"nested": {
																						"fld6PQT4BKi9bQb0g": {
																							"mode": "chose"
																						},
																							"fld8uNBZ9ulQiWnLN": {
																								"mode": "chose"
																							},
																								"fldBV0qjRH0veJHmN": {
																									"mode": "edit"
																								},
																									"fldDCVCr8qSfqUjZr": {
																										"mode": "chose"
																									},
																										"fldFhgHIMgZiaGkdI": {
																											"mode": "chose"
																										},
																											"fldI1DkfxNeU7ghZX": {
																												"mode": "chose"
																											},
																												"fldI3QIRDkquLG5xd": {
																													"mode": "chose"
																												},
																													"fldNUG1XY4HtRyGrF": {
																														"mode": "chose"
																													},
																														"fldNsAmJYjDqpwMXx": {
																															"mode": "chose"
																														},
																															"fldTWuIZXDOQYX3E2": {
																																"mode": "chose"
																															},
																																"fldXjTm7bCyGwlxtc": {
																																	"mode": "chose"
																																},
																																	"fldXzfybHWG25OInJ": {
																																		"mode": "chose"
																																	},
																																		"fldZvJROus4QqCuIH": {
																																			"mode": "chose"
																																		},
																																			"fldcmft1ZViMIZVT4": {
																																				"mode": "chose"
																																			},
																																				"fldf1ZAC1OD5DAbwR": {
																																					"mode": "chose"
																																				},
																																					"fldfDb8rdV8N0nobz": {
																																						"mode": "chose"
																																					},
																																						"fldfWPIuDl6G3CL8p": {
																																							"mode": "edit"
																																						},
																																							"fldfnVVDN7oxeSc7Y": {
																																								"mode": "chose"
																																							},
																																								"fldgFmysxjG6Zhdjs": {
																																									"mode": "edit"
																																								},
																																									"fldk0lL6UBhic2Y8p": {
																																										"mode": "chose"
																																									},
																																										"fldmMEcGOxQF7Cgpv": {
																																											"mode": "chose"
																																										},
																																											"fldoHHAKHoIsbFC6a": {
																																												"mode": "chose"
																																											},
																																												"fldtRod4Ob4IolxwU": {
																																													"mode": "chose"
																																												},
																																													"fldvLUgOumhobHnfq": {
																																														"mode": "chose"
																																													}
																					}
																				},
																					"typecast": {
																						"mode": "chose"
																					},
																						"useColumnId": {
																							"mode": "chose"
																						}
																	},
																		"parameters": {
																			"__IMTCONN__": {
																				"data": {
																					"scoped": "true",
																						"connection": "airtable2"
																				},
																					"label": "My Airtable connection"
																			}
																		}
																},
																	"parameters": [
																		{
																			"name": "__IMTCONN__",
																			"type": "account:airtable2",
																			"label": "Connection",
																			"required": true
																		}
																	],
																		"expect": [
																			{
																				"name": "base",
																				"type": "select",
																				"label": "Base",
																				"required": true
																			},
																			{
																				"name": "typecast",
																				"type": "boolean",
																				"label": "Smart links",
																				"required": true
																			},
																			{
																				"name": "useColumnId",
																				"type": "boolean",
																				"label": "Use Column ID",
																				"required": true
																			},
																			{
																				"name": "table",
																				"type": "select",
																				"label": "Table",
																				"required": true
																			},
																			{
																				"name": "id",
																				"type": "text",
																				"label": "Record ID",
																				"required": true
																			},
																			{
																				"name": "record",
																				"spec": [
																					{
																						"name": "fldEo06grdNw5EmEB",
																						"type": "text",
																						"label": "Headline S"
																					},
																					{
																						"name": "fldf1ZAC1OD5DAbwR",
																						"spec": {
																							"mode": "edit",
																							"name": "value",
																							"type": "select",
																							"label": "Value",
																							"options": [
																								{
																									"label": "Fastest way to get your Facebook Conversion API setup.",
																									"value": "Fastest way to get your Facebook Conversion API setup."
																								},
																								{
																									"label": "7 Ways to Increase the Quality  of your Facebook Pixel Data",
																									"value": "7 Ways to Increase the Quality  of your Facebook Pixel Data"
																								},
																								{
																									"label": "Tragedy Strikes",
																									"value": "Tragedy Strikes"
																								},
																								{
																									"label": "A Talk With My Dad",
																									"value": "A Talk With My Dad"
																								},
																								{
																									"label": "Search Engine Optimization For Small Businesses",
																									"value": "Search Engine Optimization For Small Businesses"
																								},
																								{
																									"label": "How does SEO benefit from web design?",
																									"value": "How does SEO benefit from web design?"
																								},
																								{
																									"label": "How-to Connect Your IONOS Domain To A CMS (Kartra) 7 Easy Steps",
																									"value": "How-to Connect Your IONOS Domain To A CMS (Kartra) 7 Easy Steps"
																								},
																								{
																									"label": "The Essence Of The Soul; A Talk With My Grandma",
																									"value": "The Essence Of The Soul; A Talk With My Grandma"
																								},
																								{
																									"label": "Coronavirus; Statistics",
																									"value": "Coronavirus; Statistics"
																								},
																								{
																									"label": "Information",
																									"value": "Information"
																								},
																								{
																									"label": "and Background",
																									"value": "and Background"
																								},
																								{
																									"label": "Tragedy Strikes (Act Two)",
																									"value": "Tragedy Strikes (Act Two)"
																								},
																								{
																									"label": "How To Get A Domain Name Through Ionos (5 Easy Steps)",
																									"value": "How To Get A Domain Name Through Ionos (5 Easy Steps)"
																								},
																								{
																									"label": "The Fire Escape Ladder & The Bed Sheet Escape Rope",
																									"value": "The Fire Escape Ladder & The Bed Sheet Escape Rope"
																								},
																								{
																									"label": "What is a Sales Funnel (and how to create one)",
																									"value": "What is a Sales Funnel (and how to create one)"
																								},
																								{
																									"label": "Just Believe",
																									"value": "Just Believe"
																								},
																								{
																									"label": "\"Maximizing Your Digital Marketing Strategy with XML\"",
																									"value": "\"Maximizing Your Digital Marketing Strategy with XML\""
																								},
																								{
																									"label": "Web design agency",
																									"value": "Web design agency"
																								},
																								{
																									"label": "Graphic design services",
																									"value": "Graphic design services"
																								},
																								{
																									"label": "WordPress marketing strategies",
																									"value": "WordPress marketing strategies"
																								},
																								{
																									"label": "Website redesign for SEO",
																									"value": "Website redesign for SEO"
																								},
																								{
																									"label": "Custom conversion optimization for Facebook ads",
																									"value": "Custom conversion optimization for Facebook ads"
																								},
																								{
																									"label": "Cincinnati digital marketing services",
																									"value": "Cincinnati digital marketing services"
																								},
																								{
																									"label": "Kajabi website design services",
																									"value": "Kajabi website design services"
																								},
																								{
																									"label": "Kartra marketing automation",
																									"value": "Kartra marketing automation"
																								},
																								{
																									"label": "WordPress website design services",
																									"value": "WordPress website design services"
																								},
																								{
																									"label": "AI in digital marketing",
																									"value": "AI in digital marketing"
																								},
																								{
																									"label": "Profitable sales funnel design",
																									"value": "Profitable sales funnel design"
																								},
																								{
																									"label": "Data analytics for business",
																									"value": "Data analytics for business"
																								},
																								{
																									"label": "Facebook pixel implementation",
																									"value": "Facebook pixel implementation"
																								},
																								{
																									"label": "Website design agency",
																									"value": "Website design agency"
																								},
																								{
																									"label": "Brand management strategies",
																									"value": "Brand management strategies"
																								},
																								{
																									"label": "Instagram ads management",
																									"value": "Instagram ads management"
																								},
																								{
																									"label": "Free online website builder tools",
																									"value": "Free online website builder tools"
																								},
																								{
																									"label": "Facebook retargeting pixel setup",
																									"value": "Facebook retargeting pixel setup"
																								},
																								{
																									"label": "Digital marketing and graphic design services",
																									"value": "Digital marketing and graphic design services"
																								},
																								{
																									"label": "Facebook remarketing pixel setup",
																									"value": "Facebook remarketing pixel setup"
																								},
																								{
																									"label": "Digital branding agency services",
																									"value": "Digital branding agency services"
																								},
																								{
																									"label": "Machine learning applications in digital marketing",
																									"value": "Machine learning applications in digital marketing"
																								},
																								{
																									"label": "Kajabi marketing strategies",
																									"value": "Kajabi marketing strategies"
																								},
																								{
																									"label": "Digital marketing and website design services",
																									"value": "Digital marketing and website design services"
																								},
																								{
																									"label": "Facebook ads management",
																									"value": "Facebook ads management"
																								},
																								{
																									"label": "Professional website design services",
																									"value": "Professional website design services"
																								},
																								{
																									"label": "Facebook conversion tracking setup",
																									"value": "Facebook conversion tracking setup"
																								},
																								{
																									"label": "Digital web agency services",
																									"value": "Digital web agency services"
																								},
																								{
																									"label": "Email marketing campaigns",
																									"value": "Email marketing campaigns"
																								},
																								{
																									"label": "[Collection]",
																									"value": "[Collection]"
																								}
																							]
																						},
																						"type": "array",
																						"label": "Headline S copy"
																					},
																					{
																						"name": "fldXirSTFRMDHfGv4",
																						"type": "text",
																						"label": "Headline"
																					},
																					{
																						"name": "fldtJ45cBmKjiwnvX",
																						"type": "text",
																						"label": "Slug"
																					},
																					{
																						"name": "fld59oVkNRgdSqKSL",
																						"type": "text",
																						"label": "Item ID"
																					},
																					{
																						"name": "fldk0lL6UBhic2Y8p",
																						"spec": {
																							"name": "value",
																							"label": "Record ID"
																						},
																						"type": "array",
																						"label": "Imported table 2"
																					},
																					{
																						"name": "fldXjTm7bCyGwlxtc",
																						"type": "boolean",
																						"label": "Published"
																					},
																					{
																						"mode": "edit",
																						"name": "fldfWPIuDl6G3CL8p",
																						"type": "select",
																						"label": "Status ",
																						"validate": {
																							"enum": [
																								"Published ",
																								"Scheduled",
																								"Saved ",
																								"Draft",
																								"Archived",
																								"Active"
																							]
																						}
																					},
																					{
																						"name": "fld9tFyIQEtfQQQ1e",
																						"type": "number",
																						"label": "Collection ID"
																					},
																					{
																						"name": "fldvWdIBa5IYPlXUe",
																						"time": true,
																						"type": "date",
																						"label": "Published On"
																					},
																					{
																						"name": "fldmMEcGOxQF7Cgpv",
																						"spec": [
																							{
																								"name": "url",
																								"type": "text",
																								"label": "File URL"
																							},
																							{
																								"name": "filename",
																								"type": "filename",
																								"label": "File name"
																							}
																						],
																						"type": "array",
																						"label": "Main Image"
																					},
																					{
																						"name": "fldznDfM50Ab2VdmV",
																						"type": "text",
																						"label": "Post Body"
																					},
																					{
																						"name": "fldkKclg8jJsO9cvn",
																						"type": "text",
																						"label": "Post Summary"
																					},
																					{
																						"name": "fldfnVVDN7oxeSc7Y",
																						"spec": [
																							{
																								"name": "url",
																								"type": "text",
																								"label": "File URL"
																							},
																							{
																								"name": "filename",
																								"type": "filename",
																								"label": "File name"
																							}
																						],
																						"type": "array",
																						"label": "IMG 1"
																					},
																					{
																						"name": "fldRyr27WCTYM6Rm5",
																						"type": "text",
																						"label": "P1"
																					},
																					{
																						"name": "fldvLUgOumhobHnfq",
																						"spec": [
																							{
																								"name": "url",
																								"type": "text",
																								"label": "File URL"
																							},
																							{
																								"name": "filename",
																								"type": "filename",
																								"label": "File name"
																							}
																						],
																						"type": "array",
																						"label": "IMG 2"
																					},
																					{
																						"name": "fldjSKeEpIfNaM9yc",
																						"type": "text",
																						"label": "P2"
																					},
																					{
																						"name": "fldtRod4Ob4IolxwU",
																						"spec": [
																							{
																								"name": "url",
																								"type": "text",
																								"label": "File URL"
																							},
																							{
																								"name": "filename",
																								"type": "filename",
																								"label": "File name"
																							}
																						],
																						"type": "array",
																						"label": "IMG 3"
																					},
																					{
																						"name": "fld22j2mGsSDAKdwC",
																						"type": "text",
																						"label": "P3"
																					},
																					{
																						"name": "fldcmft1ZViMIZVT4",
																						"spec": [
																							{
																								"name": "url",
																								"type": "text",
																								"label": "File URL"
																							},
																							{
																								"name": "filename",
																								"type": "filename",
																								"label": "File name"
																							}
																						],
																						"type": "array",
																						"label": "IMG 4"
																					},
																					{
																						"name": "fld8uNBZ9ulQiWnLN",
																						"spec": {
																							"name": "value",
																							"label": "Record ID"
																						},
																						"type": "array",
																						"label": "P4"
																					},
																					{
																						"name": "fld0RRcFilbX9pHbW",
																						"type": "text",
																						"label": "Author Picture"
																					},
																					{
																						"mode": "edit",
																						"name": "fldBV0qjRH0veJHmN",
																						"type": "select",
																						"label": "Author",
																						"validate": {
																							"enum": [
																								"Corey Shirey ",
																								"Corey Shirey"
																							]
																						}
																					},
																					{
																						"name": "fld8SX3AfzOU9mneu",
																						"type": "url",
																						"label": "Author URL"
																					},
																					{
																						"name": "fldfDb8rdV8N0nobz",
																						"spec": [
																							{
																								"name": "url",
																								"type": "text",
																								"label": "File URL"
																							},
																							{
																								"name": "filename",
																								"type": "filename",
																								"label": "File name"
																							}
																						],
																						"type": "array",
																						"label": "16x9 Image"
																					},
																					{
																						"name": "fldHu898IejuOqfFw",
																						"type": "url",
																						"label": "16x9 Image URL"
																					},
																					{
																						"name": "fldZvJROus4QqCuIH",
																						"spec": [
																							{
																								"name": "url",
																								"type": "text",
																								"label": "File URL"
																							},
																							{
																								"name": "filename",
																								"type": "filename",
																								"label": "File name"
																							}
																						],
																						"type": "array",
																						"label": "4:3 Image"
																					},
																					{
																						"name": "fldojWNRAD5ztaxm4",
																						"type": "url",
																						"label": "4:3 Image URL"
																					},
																					{
																						"name": "fld6PQT4BKi9bQb0g",
																						"spec": [
																							{
																								"name": "url",
																								"type": "text",
																								"label": "File URL"
																							},
																							{
																								"name": "filename",
																								"type": "filename",
																								"label": "File name"
																							}
																						],
																						"type": "array",
																						"label": "1:1 Image"
																					},
																					{
																						"name": "fldBXJRrbwhigfVtY",
																						"type": "url",
																						"label": "1:1 Image Url"
																					},
																					{
																						"name": "fldFhgHIMgZiaGkdI",
																						"spec": [
																							{
																								"name": "url",
																								"type": "text",
																								"label": "File URL"
																							},
																							{
																								"name": "filename",
																								"type": "filename",
																								"label": "File name"
																							}
																						],
																						"type": "array",
																						"label": "Thumbnail image"
																					},
																					{
																						"name": "fldUOpxh3ayCldWom",
																						"type": "url",
																						"label": "URL"
																					},
																					{
																						"mode": "edit",
																						"name": "fldgFmysxjG6Zhdjs",
																						"type": "select",
																						"label": "Featured?",
																						"validate": {
																							"enum": [
																								"",
																								"true",
																								"false"
																							]
																						}
																					},
																					{
																						"name": "fldNzGRRezuc2Kaj1",
																						"type": "text",
																						"label": "Blog Post Page - BG Image"
																					},
																					{
																						"name": "fldXzfybHWG25OInJ",
																						"spec": [
																							{
																								"name": "url",
																								"type": "text",
																								"label": "File URL"
																							},
																							{
																								"name": "filename",
																								"type": "filename",
																								"label": "File name"
																							}
																						],
																						"type": "array",
																						"label": "URL copy"
																					},
																					{
																						"name": "fldI3QIRDkquLG5xd",
																						"spec": [
																							{
																								"name": "url",
																								"type": "text",
																								"label": "File URL"
																							},
																							{
																								"name": "filename",
																								"type": "filename",
																								"label": "File name"
																							}
																						],
																						"type": "array",
																						"label": "Blog Home Image"
																					},
																					{
																						"name": "fldTWuIZXDOQYX3E2",
																						"spec": [
																							{
																								"name": "url",
																								"type": "text",
																								"label": "File URL"
																							},
																							{
																								"name": "filename",
																								"type": "filename",
																								"label": "File name"
																							}
																						],
																						"type": "array",
																						"label": "URL copy copy"
																					},
																					{
																						"name": "fldUyll7wgNyVAs4D",
																						"type": "text",
																						"label": "vl"
																					},
																					{
																						"name": "fldNsAmJYjDqpwMXx",
																						"spec": [
																							{
																								"name": "url",
																								"type": "text",
																								"label": "File URL"
																							},
																							{
																								"name": "filename",
																								"type": "filename",
																								"label": "File name"
																							}
																						],
																						"type": "array",
																						"label": "URL copy copy copy"
																					},
																					{
																						"name": "fldv4PST2GEuLdG3Y",
																						"type": "text",
																						"label": "lottie"
																					},
																					{
																						"name": "fld8Fw7QX2t4OvvFo",
																						"type": "text",
																						"label": "Disp Ads"
																					},
																					{
																						"name": "fldIuNKnPOHTJG8vL",
																						"type": "text",
																						"label": "Tags"
																					},
																					{
																						"name": "fldoHHAKHoIsbFC6a",
																						"spec": {
																							"name": "value",
																							"label": "Record ID"
																						},
																						"type": "array",
																						"label": "Keyword Stats"
																					},
																					{
																						"name": "fldI1DkfxNeU7ghZX",
																						"spec": {
																							"name": "value",
																							"label": "Record ID"
																						},
																						"type": "array",
																						"label": "New table"
																					},
																					{
																						"name": "fldDCVCr8qSfqUjZr",
																						"spec": {
																							"name": "value",
																							"label": "Record ID"
																						},
																						"type": "array",
																						"label": "Master Relation \\"
																					},
																					{
																						"name": "fldNUG1XY4HtRyGrF",
																						"spec": {
																							"name": "value",
																							"label": "Record ID"
																						},
																						"type": "array",
																						"label": "Keyword Stats 2"
																					}
																				],
																				"type": "collection",
																				"label": "Record"
																			}
																		],
																			"interface": [
																				{
																					"name": "id",
																					"type": "text",
																					"label": "ID"
																				},
																				{
																					"name": "createdTime",
																					"type": "date",
																					"label": "Created Time"
																				},
																				{
																					"name": "Headline S",
																					"type": "text",
																					"label": "Headline S"
																				},
																				{
																					"name": "Headline S copy",
																					"type": "array",
																					"label": "Headline S copy",
																					"editable": true
																				},
																				{
																					"name": "Headline",
																					"type": "text",
																					"label": "Headline"
																				},
																				{
																					"name": "Slug",
																					"type": "text",
																					"label": "Slug"
																				},
																				{
																					"name": "Item ID",
																					"type": "text",
																					"label": "Item ID"
																				},
																				{
																					"name": "Imported table 2",
																					"spec": {
																						"label": "Record ID"
																					},
																					"type": "array",
																					"label": "Imported table 2"
																				},
																				{
																					"name": "Headline (from Imported table 2)",
																					"type": "array",
																					"label": "Headline (from Imported table 2)"
																				},
																				{
																					"name": "Published",
																					"type": "boolean",
																					"label": "Published"
																				},
																				{
																					"name": "Status ",
																					"type": "text",
																					"label": "Status "
																				},
																				{
																					"name": "Collection ID",
																					"type": "number",
																					"label": "Collection ID"
																				},
																				{
																					"name": "Created Time",
																					"type": "date",
																					"label": "Created Time"
																				},
																				{
																					"name": "Updated On",
																					"type": "date",
																					"label": "Updated On"
																				},
																				{
																					"name": "Published On",
																					"time": true,
																					"type": "date",
																					"label": "Published On"
																				},
																				{
																					"name": "Main Image",
																					"spec": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "url",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "filename",
																							"type": "filename",
																							"label": "File name"
																						},
																						{
																							"name": "size",
																							"type": "uinteger",
																							"label": "Size"
																						},
																						{
																							"name": "type",
																							"type": "text",
																							"label": "MIME type"
																						},
																						{
																							"name": "thumbnails",
																							"spec": [
																								{
																									"name": "small",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Small"
																								},
																								{
																									"name": "large",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Large"
																								},
																								{
																									"name": "full",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Full"
																								}
																							],
																							"type": "collection",
																							"label": "Thumbnails"
																						}
																					],
																					"type": "array",
																					"label": "Main Image"
																				},
																				{
																					"name": "Post Body",
																					"type": "text",
																					"label": "Post Body",
																					"multiline": true
																				},
																				{
																					"name": "Post Summary",
																					"type": "text",
																					"label": "Post Summary",
																					"multiline": true
																				},
																				{
																					"name": "IMG 1",
																					"spec": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "url",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "filename",
																							"type": "filename",
																							"label": "File name"
																						},
																						{
																							"name": "size",
																							"type": "uinteger",
																							"label": "Size"
																						},
																						{
																							"name": "type",
																							"type": "text",
																							"label": "MIME type"
																						},
																						{
																							"name": "thumbnails",
																							"spec": [
																								{
																									"name": "small",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Small"
																								},
																								{
																									"name": "large",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Large"
																								},
																								{
																									"name": "full",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Full"
																								}
																							],
																							"type": "collection",
																							"label": "Thumbnails"
																						}
																					],
																					"type": "array",
																					"label": "IMG 1"
																				},
																				{
																					"name": "P1",
																					"type": "text",
																					"label": "P1",
																					"multiline": true
																				},
																				{
																					"name": "IMG 2",
																					"spec": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "url",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "filename",
																							"type": "filename",
																							"label": "File name"
																						},
																						{
																							"name": "size",
																							"type": "uinteger",
																							"label": "Size"
																						},
																						{
																							"name": "type",
																							"type": "text",
																							"label": "MIME type"
																						},
																						{
																							"name": "thumbnails",
																							"spec": [
																								{
																									"name": "small",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Small"
																								},
																								{
																									"name": "large",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Large"
																								},
																								{
																									"name": "full",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Full"
																								}
																							],
																							"type": "collection",
																							"label": "Thumbnails"
																						}
																					],
																					"type": "array",
																					"label": "IMG 2"
																				},
																				{
																					"name": "P2",
																					"type": "text",
																					"label": "P2",
																					"multiline": true
																				},
																				{
																					"name": "IMG 3",
																					"spec": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "url",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "filename",
																							"type": "filename",
																							"label": "File name"
																						},
																						{
																							"name": "size",
																							"type": "uinteger",
																							"label": "Size"
																						},
																						{
																							"name": "type",
																							"type": "text",
																							"label": "MIME type"
																						},
																						{
																							"name": "thumbnails",
																							"spec": [
																								{
																									"name": "small",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Small"
																								},
																								{
																									"name": "large",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Large"
																								},
																								{
																									"name": "full",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Full"
																								}
																							],
																							"type": "collection",
																							"label": "Thumbnails"
																						}
																					],
																					"type": "array",
																					"label": "IMG 3"
																				},
																				{
																					"name": "P3",
																					"type": "text",
																					"label": "P3",
																					"multiline": true
																				},
																				{
																					"name": "IMG 4",
																					"spec": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "url",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "filename",
																							"type": "filename",
																							"label": "File name"
																						},
																						{
																							"name": "size",
																							"type": "uinteger",
																							"label": "Size"
																						},
																						{
																							"name": "type",
																							"type": "text",
																							"label": "MIME type"
																						},
																						{
																							"name": "thumbnails",
																							"spec": [
																								{
																									"name": "small",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Small"
																								},
																								{
																									"name": "large",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Large"
																								},
																								{
																									"name": "full",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Full"
																								}
																							],
																							"type": "collection",
																							"label": "Thumbnails"
																						}
																					],
																					"type": "array",
																					"label": "IMG 4"
																				},
																				{
																					"name": "P4",
																					"spec": {
																						"label": "Record ID"
																					},
																					"type": "array",
																					"label": "P4"
																				},
																				{
																					"name": "Author Picture",
																					"type": "text",
																					"label": "Author Picture",
																					"multiline": true
																				},
																				{
																					"name": "Author",
																					"type": "text",
																					"label": "Author"
																				},
																				{
																					"name": "Author URL",
																					"type": "url",
																					"label": "Author URL"
																				},
																				{
																					"name": "16x9 Image",
																					"spec": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "url",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "filename",
																							"type": "filename",
																							"label": "File name"
																						},
																						{
																							"name": "size",
																							"type": "uinteger",
																							"label": "Size"
																						},
																						{
																							"name": "type",
																							"type": "text",
																							"label": "MIME type"
																						},
																						{
																							"name": "thumbnails",
																							"spec": [
																								{
																									"name": "small",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Small"
																								},
																								{
																									"name": "large",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Large"
																								},
																								{
																									"name": "full",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Full"
																								}
																							],
																							"type": "collection",
																							"label": "Thumbnails"
																						}
																					],
																					"type": "array",
																					"label": "16x9 Image"
																				},
																				{
																					"name": "16x9 Image URL",
																					"type": "url",
																					"label": "16x9 Image URL"
																				},
																				{
																					"name": "4:3 Image",
																					"spec": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "url",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "filename",
																							"type": "filename",
																							"label": "File name"
																						},
																						{
																							"name": "size",
																							"type": "uinteger",
																							"label": "Size"
																						},
																						{
																							"name": "type",
																							"type": "text",
																							"label": "MIME type"
																						},
																						{
																							"name": "thumbnails",
																							"spec": [
																								{
																									"name": "small",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Small"
																								},
																								{
																									"name": "large",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Large"
																								},
																								{
																									"name": "full",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Full"
																								}
																							],
																							"type": "collection",
																							"label": "Thumbnails"
																						}
																					],
																					"type": "array",
																					"label": "4:3 Image"
																				},
																				{
																					"name": "4:3 Image URL",
																					"type": "url",
																					"label": "4:3 Image URL"
																				},
																				{
																					"name": "1:1 Image",
																					"spec": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "url",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "filename",
																							"type": "filename",
																							"label": "File name"
																						},
																						{
																							"name": "size",
																							"type": "uinteger",
																							"label": "Size"
																						},
																						{
																							"name": "type",
																							"type": "text",
																							"label": "MIME type"
																						},
																						{
																							"name": "thumbnails",
																							"spec": [
																								{
																									"name": "small",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Small"
																								},
																								{
																									"name": "large",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Large"
																								},
																								{
																									"name": "full",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Full"
																								}
																							],
																							"type": "collection",
																							"label": "Thumbnails"
																						}
																					],
																					"type": "array",
																					"label": "1:1 Image"
																				},
																				{
																					"name": "1:1 Image Url",
																					"type": "url",
																					"label": "1:1 Image Url"
																				},
																				{
																					"name": "Thumbnail image",
																					"spec": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "url",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "filename",
																							"type": "filename",
																							"label": "File name"
																						},
																						{
																							"name": "size",
																							"type": "uinteger",
																							"label": "Size"
																						},
																						{
																							"name": "type",
																							"type": "text",
																							"label": "MIME type"
																						},
																						{
																							"name": "thumbnails",
																							"spec": [
																								{
																									"name": "small",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Small"
																								},
																								{
																									"name": "large",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Large"
																								},
																								{
																									"name": "full",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Full"
																								}
																							],
																							"type": "collection",
																							"label": "Thumbnails"
																						}
																					],
																					"type": "array",
																					"label": "Thumbnail image"
																				},
																				{
																					"name": "URL",
																					"type": "url",
																					"label": "URL"
																				},
																				{
																					"name": "Featured?",
																					"type": "text",
																					"label": "Featured?"
																				},
																				{
																					"name": "Blog Post Page - BG Image",
																					"type": "text",
																					"label": "Blog Post Page - BG Image",
																					"multiline": true
																				},
																				{
																					"name": "URL copy",
																					"spec": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "url",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "filename",
																							"type": "filename",
																							"label": "File name"
																						},
																						{
																							"name": "size",
																							"type": "uinteger",
																							"label": "Size"
																						},
																						{
																							"name": "type",
																							"type": "text",
																							"label": "MIME type"
																						},
																						{
																							"name": "thumbnails",
																							"spec": [
																								{
																									"name": "small",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Small"
																								},
																								{
																									"name": "large",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Large"
																								},
																								{
																									"name": "full",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Full"
																								}
																							],
																							"type": "collection",
																							"label": "Thumbnails"
																						}
																					],
																					"type": "array",
																					"label": "URL copy"
																				},
																				{
																					"name": "Blog Home Image",
																					"spec": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "url",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "filename",
																							"type": "filename",
																							"label": "File name"
																						},
																						{
																							"name": "size",
																							"type": "uinteger",
																							"label": "Size"
																						},
																						{
																							"name": "type",
																							"type": "text",
																							"label": "MIME type"
																						},
																						{
																							"name": "thumbnails",
																							"spec": [
																								{
																									"name": "small",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Small"
																								},
																								{
																									"name": "large",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Large"
																								},
																								{
																									"name": "full",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Full"
																								}
																							],
																							"type": "collection",
																							"label": "Thumbnails"
																						}
																					],
																					"type": "array",
																					"label": "Blog Home Image"
																				},
																				{
																					"name": "URL copy copy",
																					"spec": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "url",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "filename",
																							"type": "filename",
																							"label": "File name"
																						},
																						{
																							"name": "size",
																							"type": "uinteger",
																							"label": "Size"
																						},
																						{
																							"name": "type",
																							"type": "text",
																							"label": "MIME type"
																						},
																						{
																							"name": "thumbnails",
																							"spec": [
																								{
																									"name": "small",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Small"
																								},
																								{
																									"name": "large",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Large"
																								},
																								{
																									"name": "full",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Full"
																								}
																							],
																							"type": "collection",
																							"label": "Thumbnails"
																						}
																					],
																					"type": "array",
																					"label": "URL copy copy"
																				},
																				{
																					"name": "vl",
																					"type": "text",
																					"label": "vl"
																				},
																				{
																					"name": "URL copy copy copy",
																					"spec": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "url",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "filename",
																							"type": "filename",
																							"label": "File name"
																						},
																						{
																							"name": "size",
																							"type": "uinteger",
																							"label": "Size"
																						},
																						{
																							"name": "type",
																							"type": "text",
																							"label": "MIME type"
																						},
																						{
																							"name": "thumbnails",
																							"spec": [
																								{
																									"name": "small",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Small"
																								},
																								{
																									"name": "large",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Large"
																								},
																								{
																									"name": "full",
																									"spec": [
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "width",
																											"type": "uinteger",
																											"label": "Width"
																										},
																										{
																											"name": "height",
																											"type": "uinteger",
																											"label": "Height"
																										}
																									],
																									"type": "collection",
																									"label": "Full"
																								}
																							],
																							"type": "collection",
																							"label": "Thumbnails"
																						}
																					],
																					"type": "array",
																					"label": "URL copy copy copy"
																				},
																				{
																					"name": "lottie",
																					"type": "text",
																					"label": "lottie"
																				},
																				{
																					"name": "Disp Ads",
																					"type": "text",
																					"label": "Disp Ads"
																				},
																				{
																					"name": "Tags",
																					"type": "text",
																					"label": "Tags"
																				},
																				{
																					"name": "Keyword Stats",
																					"spec": {
																						"label": "Record ID"
																					},
																					"type": "array",
																					"label": "Keyword Stats"
																				},
																				{
																					"name": "AI Gen Ideas - Keywords (from Keyword Stats) 2",
																					"type": "array",
																					"label": "AI Gen Ideas - Keywords (from Keyword Stats) 2"
																				},
																				{
																					"name": "AI Gen Ideas - Keywords (from Keyword Stats)",
																					"type": "array",
																					"label": "AI Gen Ideas - Keywords (from Keyword Stats)"
																				},
																				{
																					"name": "AI Gen Ideas - Keywords (from New table)",
																					"type": "array",
																					"label": "AI Gen Ideas - Keywords (from New table)"
																				},
																				{
																					"name": "New table",
																					"spec": {
																						"label": "Record ID"
																					},
																					"type": "array",
																					"label": "New table"
																				},
																				{
																					"name": "Master Relation \\",
																					"spec": {
																						"label": "Record ID"
																					},
																					"type": "array",
																					"label": "Master Relation \\"
																				},
																				{
																					"name": "Keyword Stats 2",
																					"spec": {
																						"label": "Record ID"
																					},
																					"type": "array",
																					"label": "Keyword Stats 2"
																				}
																			]
														}
								},
									{
										"id": 80,
											"module": "openai-gpt-3:CreateCompletion",
												"version": 1,
													"parameters": {
														"__IMTCONN__": 588038
													},
														"mapper": {
															"model": "text-davinci-003",
																"top_p": ".89",
																	"prompt": "\"Your best skills and experience include creating, executing, and measuring successful digital marketing campaigns, optimizing website usability, code, and functionality, developing compelling content, and using analytics to assess performance and identify areas for improvement. I am organized, detail-oriented, and highly motivated to help businesses reach their goals. I use my knowledge and skills to create strategies that are tailored to each business's needs and objectives.\" \n...\n\"{{54.choices[].text}}\"\n...\n\"Write a short outline with a table of contents for a blog article using {{54.choices[].text}} as the subject Write a short outline with table of contents. Include 5 major keywords or keyword queries that relate your title as the headline for each item in the table of contents.\"\n...\n\"{{98.choices[].text}}\"\n\nWrite the third paragraph for the third item in the table of contents. Include supporting links in that paragraph as a hyperlink. Format the paragraph in html ",
																		"max_tokens": "1000",
																			"temperature": ".89",
																				"n_completions": "1"
														},
															"metadata": {
																"designer": {
																	"x": 1800,
																		"y": 450
																},
																	"restore": {
																		"expect": {
																			"echo": {
																				"mode": "chose"
																			},
																				"model": {
																					"mode": "chose",
																						"label": "text-davinci-003"
																				}
																		},
																			"parameters": {
																				"__IMTCONN__": {
																					"data": {
																						"scoped": "true",
																							"connection": "openai-gpt-3"
																					},
																						"label": "My OpenAI connection"
																				}
																			}
																	},
																		"parameters": [
																			{
																				"name": "__IMTCONN__",
																				"type": "account:openai-gpt-3",
																				"label": "Connection",
																				"required": true
																			}
																		],
																			"expect": [
																				{
																					"name": "model",
																					"type": "select",
																					"label": "Model",
																					"required": true
																				},
																				{
																					"name": "prompt",
																					"type": "text",
																					"label": "Prompt"
																				},
																				{
																					"name": "max_tokens",
																					"type": "number",
																					"label": "Max Tokens"
																				},
																				{
																					"name": "temperature",
																					"type": "number",
																					"label": "Temperature"
																				},
																				{
																					"name": "top_p",
																					"type": "number",
																					"label": "Top p"
																				},
																				{
																					"name": "n_completions",
																					"type": "number",
																					"label": "N"
																				},
																				{
																					"name": "echo",
																					"type": "boolean",
																					"label": "Echo"
																				}
																			]
															}
									},
										{
											"id": 81,
												"module": "airtable:ActionUpdateRecords",
													"version": 3,
														"parameters": {
															"__IMTCONN__": 365050
														},
															"mapper": {
																"id": "{{78.id}}",
																	"base": "appDTUXQvgkjIvceg",
																		"table": "tblznvhtv4qcJ5TPM",
																			"record": {
																				"fld22j2mGsSDAKdwC": "{{80.choices[].text}}"
																			},
																				"typecast": false,
																					"useColumnId": false
															},
																"metadata": {
																	"designer": {
																		"x": 2100,
																			"y": 450
																	},
																		"restore": {
																			"expect": {
																				"base": {
																					"label": "Blog Articles "
																				},
																					"table": {
																						"label": "Articles"
																					},
																						"record": {
																							"nested": {
																								"fld6PQT4BKi9bQb0g": {
																									"mode": "chose"
																								},
																									"fld8uNBZ9ulQiWnLN": {
																										"mode": "chose"
																									},
																										"fldBV0qjRH0veJHmN": {
																											"mode": "edit"
																										},
																											"fldDCVCr8qSfqUjZr": {
																												"mode": "chose"
																											},
																												"fldFhgHIMgZiaGkdI": {
																													"mode": "chose"
																												},
																													"fldI1DkfxNeU7ghZX": {
																														"mode": "chose"
																													},
																														"fldI3QIRDkquLG5xd": {
																															"mode": "chose"
																														},
																															"fldNUG1XY4HtRyGrF": {
																																"mode": "chose"
																															},
																																"fldNsAmJYjDqpwMXx": {
																																	"mode": "chose"
																																},
																																	"fldTWuIZXDOQYX3E2": {
																																		"mode": "chose"
																																	},
																																		"fldXjTm7bCyGwlxtc": {
																																			"mode": "chose"
																																		},
																																			"fldXzfybHWG25OInJ": {
																																				"mode": "chose"
																																			},
																																				"fldZvJROus4QqCuIH": {
																																					"mode": "chose"
																																				},
																																					"fldcmft1ZViMIZVT4": {
																																						"mode": "chose"
																																					},
																																						"fldf1ZAC1OD5DAbwR": {
																																							"mode": "chose"
																																						},
																																							"fldfDb8rdV8N0nobz": {
																																								"mode": "chose"
																																							},
																																								"fldfWPIuDl6G3CL8p": {
																																									"mode": "edit"
																																								},
																																									"fldfnVVDN7oxeSc7Y": {
																																										"mode": "chose"
																																									},
																																										"fldgFmysxjG6Zhdjs": {
																																											"mode": "edit"
																																										},
																																											"fldk0lL6UBhic2Y8p": {
																																												"mode": "chose"
																																											},
																																												"fldmMEcGOxQF7Cgpv": {
																																													"mode": "chose"
																																												},
																																													"fldoHHAKHoIsbFC6a": {
																																														"mode": "chose"
																																													},
																																														"fldtRod4Ob4IolxwU": {
																																															"mode": "chose"
																																														},
																																															"fldvLUgOumhobHnfq": {
																																																"mode": "chose"
																																															}
																							}
																						},
																							"typecast": {
																								"mode": "chose"
																							},
																								"useColumnId": {
																									"mode": "chose"
																								}
																			},
																				"parameters": {
																					"__IMTCONN__": {
																						"data": {
																							"scoped": "true",
																								"connection": "airtable2"
																						},
																							"label": "My Airtable connection"
																					}
																				}
																		},
																			"parameters": [
																				{
																					"name": "__IMTCONN__",
																					"type": "account:airtable2",
																					"label": "Connection",
																					"required": true
																				}
																			],
																				"expect": [
																					{
																						"name": "base",
																						"type": "select",
																						"label": "Base",
																						"required": true
																					},
																					{
																						"name": "typecast",
																						"type": "boolean",
																						"label": "Smart links",
																						"required": true
																					},
																					{
																						"name": "useColumnId",
																						"type": "boolean",
																						"label": "Use Column ID",
																						"required": true
																					},
																					{
																						"name": "table",
																						"type": "select",
																						"label": "Table",
																						"required": true
																					},
																					{
																						"name": "id",
																						"type": "text",
																						"label": "Record ID",
																						"required": true
																					},
																					{
																						"name": "record",
																						"spec": [
																							{
																								"name": "fldEo06grdNw5EmEB",
																								"type": "text",
																								"label": "Headline S"
																							},
																							{
																								"name": "fldf1ZAC1OD5DAbwR",
																								"spec": {
																									"mode": "edit",
																									"name": "value",
																									"type": "select",
																									"label": "Value",
																									"options": [
																										{
																											"label": "Fastest way to get your Facebook Conversion API setup.",
																											"value": "Fastest way to get your Facebook Conversion API setup."
																										},
																										{
																											"label": "7 Ways to Increase the Quality  of your Facebook Pixel Data",
																											"value": "7 Ways to Increase the Quality  of your Facebook Pixel Data"
																										},
																										{
																											"label": "Tragedy Strikes",
																											"value": "Tragedy Strikes"
																										},
																										{
																											"label": "A Talk With My Dad",
																											"value": "A Talk With My Dad"
																										},
																										{
																											"label": "Search Engine Optimization For Small Businesses",
																											"value": "Search Engine Optimization For Small Businesses"
																										},
																										{
																											"label": "How does SEO benefit from web design?",
																											"value": "How does SEO benefit from web design?"
																										},
																										{
																											"label": "How-to Connect Your IONOS Domain To A CMS (Kartra) 7 Easy Steps",
																											"value": "How-to Connect Your IONOS Domain To A CMS (Kartra) 7 Easy Steps"
																										},
																										{
																											"label": "The Essence Of The Soul; A Talk With My Grandma",
																											"value": "The Essence Of The Soul; A Talk With My Grandma"
																										},
																										{
																											"label": "Coronavirus; Statistics",
																											"value": "Coronavirus; Statistics"
																										},
																										{
																											"label": "Information",
																											"value": "Information"
																										},
																										{
																											"label": "and Background",
																											"value": "and Background"
																										},
																										{
																											"label": "Tragedy Strikes (Act Two)",
																											"value": "Tragedy Strikes (Act Two)"
																										},
																										{
																											"label": "How To Get A Domain Name Through Ionos (5 Easy Steps)",
																											"value": "How To Get A Domain Name Through Ionos (5 Easy Steps)"
																										},
																										{
																											"label": "The Fire Escape Ladder & The Bed Sheet Escape Rope",
																											"value": "The Fire Escape Ladder & The Bed Sheet Escape Rope"
																										},
																										{
																											"label": "What is a Sales Funnel (and how to create one)",
																											"value": "What is a Sales Funnel (and how to create one)"
																										},
																										{
																											"label": "Just Believe",
																											"value": "Just Believe"
																										},
																										{
																											"label": "\"Maximizing Your Digital Marketing Strategy with XML\"",
																											"value": "\"Maximizing Your Digital Marketing Strategy with XML\""
																										},
																										{
																											"label": "Web design agency",
																											"value": "Web design agency"
																										},
																										{
																											"label": "Graphic design services",
																											"value": "Graphic design services"
																										},
																										{
																											"label": "WordPress marketing strategies",
																											"value": "WordPress marketing strategies"
																										},
																										{
																											"label": "Website redesign for SEO",
																											"value": "Website redesign for SEO"
																										},
																										{
																											"label": "Custom conversion optimization for Facebook ads",
																											"value": "Custom conversion optimization for Facebook ads"
																										},
																										{
																											"label": "Cincinnati digital marketing services",
																											"value": "Cincinnati digital marketing services"
																										},
																										{
																											"label": "Kajabi website design services",
																											"value": "Kajabi website design services"
																										},
																										{
																											"label": "Kartra marketing automation",
																											"value": "Kartra marketing automation"
																										},
																										{
																											"label": "WordPress website design services",
																											"value": "WordPress website design services"
																										},
																										{
																											"label": "AI in digital marketing",
																											"value": "AI in digital marketing"
																										},
																										{
																											"label": "Profitable sales funnel design",
																											"value": "Profitable sales funnel design"
																										},
																										{
																											"label": "Data analytics for business",
																											"value": "Data analytics for business"
																										},
																										{
																											"label": "Facebook pixel implementation",
																											"value": "Facebook pixel implementation"
																										},
																										{
																											"label": "Website design agency",
																											"value": "Website design agency"
																										},
																										{
																											"label": "Brand management strategies",
																											"value": "Brand management strategies"
																										},
																										{
																											"label": "Instagram ads management",
																											"value": "Instagram ads management"
																										},
																										{
																											"label": "Free online website builder tools",
																											"value": "Free online website builder tools"
																										},
																										{
																											"label": "Facebook retargeting pixel setup",
																											"value": "Facebook retargeting pixel setup"
																										},
																										{
																											"label": "Digital marketing and graphic design services",
																											"value": "Digital marketing and graphic design services"
																										},
																										{
																											"label": "Facebook remarketing pixel setup",
																											"value": "Facebook remarketing pixel setup"
																										},
																										{
																											"label": "Digital branding agency services",
																											"value": "Digital branding agency services"
																										},
																										{
																											"label": "Machine learning applications in digital marketing",
																											"value": "Machine learning applications in digital marketing"
																										},
																										{
																											"label": "Kajabi marketing strategies",
																											"value": "Kajabi marketing strategies"
																										},
																										{
																											"label": "Digital marketing and website design services",
																											"value": "Digital marketing and website design services"
																										},
																										{
																											"label": "Facebook ads management",
																											"value": "Facebook ads management"
																										},
																										{
																											"label": "Professional website design services",
																											"value": "Professional website design services"
																										},
																										{
																											"label": "Facebook conversion tracking setup",
																											"value": "Facebook conversion tracking setup"
																										},
																										{
																											"label": "Digital web agency services",
																											"value": "Digital web agency services"
																										},
																										{
																											"label": "Email marketing campaigns",
																											"value": "Email marketing campaigns"
																										},
																										{
																											"label": "[Collection]",
																											"value": "[Collection]"
																										}
																									]
																								},
																								"type": "array",
																								"label": "Headline S copy"
																							},
																							{
																								"name": "fldXirSTFRMDHfGv4",
																								"type": "text",
																								"label": "Headline"
																							},
																							{
																								"name": "fldtJ45cBmKjiwnvX",
																								"type": "text",
																								"label": "Slug"
																							},
																							{
																								"name": "fld59oVkNRgdSqKSL",
																								"type": "text",
																								"label": "Item ID"
																							},
																							{
																								"name": "fldk0lL6UBhic2Y8p",
																								"spec": {
																									"name": "value",
																									"label": "Record ID"
																								},
																								"type": "array",
																								"label": "Imported table 2"
																							},
																							{
																								"name": "fldXjTm7bCyGwlxtc",
																								"type": "boolean",
																								"label": "Published"
																							},
																							{
																								"mode": "edit",
																								"name": "fldfWPIuDl6G3CL8p",
																								"type": "select",
																								"label": "Status ",
																								"validate": {
																									"enum": [
																										"Published ",
																										"Scheduled",
																										"Saved ",
																										"Draft",
																										"Archived",
																										"Active"
																									]
																								}
																							},
																							{
																								"name": "fld9tFyIQEtfQQQ1e",
																								"type": "number",
																								"label": "Collection ID"
																							},
																							{
																								"name": "fldvWdIBa5IYPlXUe",
																								"time": true,
																								"type": "date",
																								"label": "Published On"
																							},
																							{
																								"name": "fldmMEcGOxQF7Cgpv",
																								"spec": [
																									{
																										"name": "url",
																										"type": "text",
																										"label": "File URL"
																									},
																									{
																										"name": "filename",
																										"type": "filename",
																										"label": "File name"
																									}
																								],
																								"type": "array",
																								"label": "Main Image"
																							},
																							{
																								"name": "fldznDfM50Ab2VdmV",
																								"type": "text",
																								"label": "Post Body"
																							},
																							{
																								"name": "fldkKclg8jJsO9cvn",
																								"type": "text",
																								"label": "Post Summary"
																							},
																							{
																								"name": "fldfnVVDN7oxeSc7Y",
																								"spec": [
																									{
																										"name": "url",
																										"type": "text",
																										"label": "File URL"
																									},
																									{
																										"name": "filename",
																										"type": "filename",
																										"label": "File name"
																									}
																								],
																								"type": "array",
																								"label": "IMG 1"
																							},
																							{
																								"name": "fldRyr27WCTYM6Rm5",
																								"type": "text",
																								"label": "P1"
																							},
																							{
																								"name": "fldvLUgOumhobHnfq",
																								"spec": [
																									{
																										"name": "url",
																										"type": "text",
																										"label": "File URL"
																									},
																									{
																										"name": "filename",
																										"type": "filename",
																										"label": "File name"
																									}
																								],
																								"type": "array",
																								"label": "IMG 2"
																							},
																							{
																								"name": "fldjSKeEpIfNaM9yc",
																								"type": "text",
																								"label": "P2"
																							},
																							{
																								"name": "fldtRod4Ob4IolxwU",
																								"spec": [
																									{
																										"name": "url",
																										"type": "text",
																										"label": "File URL"
																									},
																									{
																										"name": "filename",
																										"type": "filename",
																										"label": "File name"
																									}
																								],
																								"type": "array",
																								"label": "IMG 3"
																							},
																							{
																								"name": "fld22j2mGsSDAKdwC",
																								"type": "text",
																								"label": "P3"
																							},
																							{
																								"name": "fldcmft1ZViMIZVT4",
																								"spec": [
																									{
																										"name": "url",
																										"type": "text",
																										"label": "File URL"
																									},
																									{
																										"name": "filename",
																										"type": "filename",
																										"label": "File name"
																									}
																								],
																								"type": "array",
																								"label": "IMG 4"
																							},
																							{
																								"name": "fld8uNBZ9ulQiWnLN",
																								"spec": {
																									"name": "value",
																									"label": "Record ID"
																								},
																								"type": "array",
																								"label": "P4"
																							},
																							{
																								"name": "fld0RRcFilbX9pHbW",
																								"type": "text",
																								"label": "Author Picture"
																							},
																							{
																								"mode": "edit",
																								"name": "fldBV0qjRH0veJHmN",
																								"type": "select",
																								"label": "Author",
																								"validate": {
																									"enum": [
																										"Corey Shirey ",
																										"Corey Shirey"
																									]
																								}
																							},
																							{
																								"name": "fld8SX3AfzOU9mneu",
																								"type": "url",
																								"label": "Author URL"
																							},
																							{
																								"name": "fldfDb8rdV8N0nobz",
																								"spec": [
																									{
																										"name": "url",
																										"type": "text",
																										"label": "File URL"
																									},
																									{
																										"name": "filename",
																										"type": "filename",
																										"label": "File name"
																									}
																								],
																								"type": "array",
																								"label": "16x9 Image"
																							},
																							{
																								"name": "fldHu898IejuOqfFw",
																								"type": "url",
																								"label": "16x9 Image URL"
																							},
																							{
																								"name": "fldZvJROus4QqCuIH",
																								"spec": [
																									{
																										"name": "url",
																										"type": "text",
																										"label": "File URL"
																									},
																									{
																										"name": "filename",
																										"type": "filename",
																										"label": "File name"
																									}
																								],
																								"type": "array",
																								"label": "4:3 Image"
																							},
																							{
																								"name": "fldojWNRAD5ztaxm4",
																								"type": "url",
																								"label": "4:3 Image URL"
																							},
																							{
																								"name": "fld6PQT4BKi9bQb0g",
																								"spec": [
																									{
																										"name": "url",
																										"type": "text",
																										"label": "File URL"
																									},
																									{
																										"name": "filename",
																										"type": "filename",
																										"label": "File name"
																									}
																								],
																								"type": "array",
																								"label": "1:1 Image"
																							},
																							{
																								"name": "fldBXJRrbwhigfVtY",
																								"type": "url",
																								"label": "1:1 Image Url"
																							},
																							{
																								"name": "fldFhgHIMgZiaGkdI",
																								"spec": [
																									{
																										"name": "url",
																										"type": "text",
																										"label": "File URL"
																									},
																									{
																										"name": "filename",
																										"type": "filename",
																										"label": "File name"
																									}
																								],
																								"type": "array",
																								"label": "Thumbnail image"
																							},
																							{
																								"name": "fldUOpxh3ayCldWom",
																								"type": "url",
																								"label": "URL"
																							},
																							{
																								"mode": "edit",
																								"name": "fldgFmysxjG6Zhdjs",
																								"type": "select",
																								"label": "Featured?",
																								"validate": {
																									"enum": [
																										"",
																										"true",
																										"false"
																									]
																								}
																							},
																							{
																								"name": "fldNzGRRezuc2Kaj1",
																								"type": "text",
																								"label": "Blog Post Page - BG Image"
																							},
																							{
																								"name": "fldXzfybHWG25OInJ",
																								"spec": [
																									{
																										"name": "url",
																										"type": "text",
																										"label": "File URL"
																									},
																									{
																										"name": "filename",
																										"type": "filename",
																										"label": "File name"
																									}
																								],
																								"type": "array",
																								"label": "URL copy"
																							},
																							{
																								"name": "fldI3QIRDkquLG5xd",
																								"spec": [
																									{
																										"name": "url",
																										"type": "text",
																										"label": "File URL"
																									},
																									{
																										"name": "filename",
																										"type": "filename",
																										"label": "File name"
																									}
																								],
																								"type": "array",
																								"label": "Blog Home Image"
																							},
																							{
																								"name": "fldTWuIZXDOQYX3E2",
																								"spec": [
																									{
																										"name": "url",
																										"type": "text",
																										"label": "File URL"
																									},
																									{
																										"name": "filename",
																										"type": "filename",
																										"label": "File name"
																									}
																								],
																								"type": "array",
																								"label": "URL copy copy"
																							},
																							{
																								"name": "fldUyll7wgNyVAs4D",
																								"type": "text",
																								"label": "vl"
																							},
																							{
																								"name": "fldNsAmJYjDqpwMXx",
																								"spec": [
																									{
																										"name": "url",
																										"type": "text",
																										"label": "File URL"
																									},
																									{
																										"name": "filename",
																										"type": "filename",
																										"label": "File name"
																									}
																								],
																								"type": "array",
																								"label": "URL copy copy copy"
																							},
																							{
																								"name": "fldv4PST2GEuLdG3Y",
																								"type": "text",
																								"label": "lottie"
																							},
																							{
																								"name": "fld8Fw7QX2t4OvvFo",
																								"type": "text",
																								"label": "Disp Ads"
																							},
																							{
																								"name": "fldIuNKnPOHTJG8vL",
																								"type": "text",
																								"label": "Tags"
																							},
																							{
																								"name": "fldoHHAKHoIsbFC6a",
																								"spec": {
																									"name": "value",
																									"label": "Record ID"
																								},
																								"type": "array",
																								"label": "Keyword Stats"
																							},
																							{
																								"name": "fldI1DkfxNeU7ghZX",
																								"spec": {
																									"name": "value",
																									"label": "Record ID"
																								},
																								"type": "array",
																								"label": "New table"
																							},
																							{
																								"name": "fldDCVCr8qSfqUjZr",
																								"spec": {
																									"name": "value",
																									"label": "Record ID"
																								},
																								"type": "array",
																								"label": "Master Relation \\"
																							},
																							{
																								"name": "fldNUG1XY4HtRyGrF",
																								"spec": {
																									"name": "value",
																									"label": "Record ID"
																								},
																								"type": "array",
																								"label": "Keyword Stats 2"
																							}
																						],
																						"type": "collection",
																						"label": "Record"
																					}
																				],
																					"interface": [
																						{
																							"name": "id",
																							"type": "text",
																							"label": "ID"
																						},
																						{
																							"name": "createdTime",
																							"type": "date",
																							"label": "Created Time"
																						},
																						{
																							"name": "Headline S",
																							"type": "text",
																							"label": "Headline S"
																						},
																						{
																							"name": "Headline S copy",
																							"type": "array",
																							"label": "Headline S copy",
																							"editable": true
																						},
																						{
																							"name": "Headline",
																							"type": "text",
																							"label": "Headline"
																						},
																						{
																							"name": "Slug",
																							"type": "text",
																							"label": "Slug"
																						},
																						{
																							"name": "Item ID",
																							"type": "text",
																							"label": "Item ID"
																						},
																						{
																							"name": "Imported table 2",
																							"spec": {
																								"label": "Record ID"
																							},
																							"type": "array",
																							"label": "Imported table 2"
																						},
																						{
																							"name": "Headline (from Imported table 2)",
																							"type": "array",
																							"label": "Headline (from Imported table 2)"
																						},
																						{
																							"name": "Published",
																							"type": "boolean",
																							"label": "Published"
																						},
																						{
																							"name": "Status ",
																							"type": "text",
																							"label": "Status "
																						},
																						{
																							"name": "Collection ID",
																							"type": "number",
																							"label": "Collection ID"
																						},
																						{
																							"name": "Created Time",
																							"type": "date",
																							"label": "Created Time"
																						},
																						{
																							"name": "Updated On",
																							"type": "date",
																							"label": "Updated On"
																						},
																						{
																							"name": "Published On",
																							"time": true,
																							"type": "date",
																							"label": "Published On"
																						},
																						{
																							"name": "Main Image",
																							"spec": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "filename",
																									"type": "filename",
																									"label": "File name"
																								},
																								{
																									"name": "size",
																									"type": "uinteger",
																									"label": "Size"
																								},
																								{
																									"name": "type",
																									"type": "text",
																									"label": "MIME type"
																								},
																								{
																									"name": "thumbnails",
																									"spec": [
																										{
																											"name": "small",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Small"
																										},
																										{
																											"name": "large",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Large"
																										},
																										{
																											"name": "full",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Full"
																										}
																									],
																									"type": "collection",
																									"label": "Thumbnails"
																								}
																							],
																							"type": "array",
																							"label": "Main Image"
																						},
																						{
																							"name": "Post Body",
																							"type": "text",
																							"label": "Post Body",
																							"multiline": true
																						},
																						{
																							"name": "Post Summary",
																							"type": "text",
																							"label": "Post Summary",
																							"multiline": true
																						},
																						{
																							"name": "IMG 1",
																							"spec": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "filename",
																									"type": "filename",
																									"label": "File name"
																								},
																								{
																									"name": "size",
																									"type": "uinteger",
																									"label": "Size"
																								},
																								{
																									"name": "type",
																									"type": "text",
																									"label": "MIME type"
																								},
																								{
																									"name": "thumbnails",
																									"spec": [
																										{
																											"name": "small",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Small"
																										},
																										{
																											"name": "large",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Large"
																										},
																										{
																											"name": "full",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Full"
																										}
																									],
																									"type": "collection",
																									"label": "Thumbnails"
																								}
																							],
																							"type": "array",
																							"label": "IMG 1"
																						},
																						{
																							"name": "P1",
																							"type": "text",
																							"label": "P1",
																							"multiline": true
																						},
																						{
																							"name": "IMG 2",
																							"spec": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "filename",
																									"type": "filename",
																									"label": "File name"
																								},
																								{
																									"name": "size",
																									"type": "uinteger",
																									"label": "Size"
																								},
																								{
																									"name": "type",
																									"type": "text",
																									"label": "MIME type"
																								},
																								{
																									"name": "thumbnails",
																									"spec": [
																										{
																											"name": "small",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Small"
																										},
																										{
																											"name": "large",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Large"
																										},
																										{
																											"name": "full",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Full"
																										}
																									],
																									"type": "collection",
																									"label": "Thumbnails"
																								}
																							],
																							"type": "array",
																							"label": "IMG 2"
																						},
																						{
																							"name": "P2",
																							"type": "text",
																							"label": "P2",
																							"multiline": true
																						},
																						{
																							"name": "IMG 3",
																							"spec": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "filename",
																									"type": "filename",
																									"label": "File name"
																								},
																								{
																									"name": "size",
																									"type": "uinteger",
																									"label": "Size"
																								},
																								{
																									"name": "type",
																									"type": "text",
																									"label": "MIME type"
																								},
																								{
																									"name": "thumbnails",
																									"spec": [
																										{
																											"name": "small",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Small"
																										},
																										{
																											"name": "large",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Large"
																										},
																										{
																											"name": "full",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Full"
																										}
																									],
																									"type": "collection",
																									"label": "Thumbnails"
																								}
																							],
																							"type": "array",
																							"label": "IMG 3"
																						},
																						{
																							"name": "P3",
																							"type": "text",
																							"label": "P3",
																							"multiline": true
																						},
																						{
																							"name": "IMG 4",
																							"spec": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "filename",
																									"type": "filename",
																									"label": "File name"
																								},
																								{
																									"name": "size",
																									"type": "uinteger",
																									"label": "Size"
																								},
																								{
																									"name": "type",
																									"type": "text",
																									"label": "MIME type"
																								},
																								{
																									"name": "thumbnails",
																									"spec": [
																										{
																											"name": "small",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Small"
																										},
																										{
																											"name": "large",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Large"
																										},
																										{
																											"name": "full",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Full"
																										}
																									],
																									"type": "collection",
																									"label": "Thumbnails"
																								}
																							],
																							"type": "array",
																							"label": "IMG 4"
																						},
																						{
																							"name": "P4",
																							"spec": {
																								"label": "Record ID"
																							},
																							"type": "array",
																							"label": "P4"
																						},
																						{
																							"name": "Author Picture",
																							"type": "text",
																							"label": "Author Picture",
																							"multiline": true
																						},
																						{
																							"name": "Author",
																							"type": "text",
																							"label": "Author"
																						},
																						{
																							"name": "Author URL",
																							"type": "url",
																							"label": "Author URL"
																						},
																						{
																							"name": "16x9 Image",
																							"spec": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "filename",
																									"type": "filename",
																									"label": "File name"
																								},
																								{
																									"name": "size",
																									"type": "uinteger",
																									"label": "Size"
																								},
																								{
																									"name": "type",
																									"type": "text",
																									"label": "MIME type"
																								},
																								{
																									"name": "thumbnails",
																									"spec": [
																										{
																											"name": "small",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Small"
																										},
																										{
																											"name": "large",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Large"
																										},
																										{
																											"name": "full",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Full"
																										}
																									],
																									"type": "collection",
																									"label": "Thumbnails"
																								}
																							],
																							"type": "array",
																							"label": "16x9 Image"
																						},
																						{
																							"name": "16x9 Image URL",
																							"type": "url",
																							"label": "16x9 Image URL"
																						},
																						{
																							"name": "4:3 Image",
																							"spec": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "filename",
																									"type": "filename",
																									"label": "File name"
																								},
																								{
																									"name": "size",
																									"type": "uinteger",
																									"label": "Size"
																								},
																								{
																									"name": "type",
																									"type": "text",
																									"label": "MIME type"
																								},
																								{
																									"name": "thumbnails",
																									"spec": [
																										{
																											"name": "small",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Small"
																										},
																										{
																											"name": "large",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Large"
																										},
																										{
																											"name": "full",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Full"
																										}
																									],
																									"type": "collection",
																									"label": "Thumbnails"
																								}
																							],
																							"type": "array",
																							"label": "4:3 Image"
																						},
																						{
																							"name": "4:3 Image URL",
																							"type": "url",
																							"label": "4:3 Image URL"
																						},
																						{
																							"name": "1:1 Image",
																							"spec": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "filename",
																									"type": "filename",
																									"label": "File name"
																								},
																								{
																									"name": "size",
																									"type": "uinteger",
																									"label": "Size"
																								},
																								{
																									"name": "type",
																									"type": "text",
																									"label": "MIME type"
																								},
																								{
																									"name": "thumbnails",
																									"spec": [
																										{
																											"name": "small",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Small"
																										},
																										{
																											"name": "large",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Large"
																										},
																										{
																											"name": "full",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Full"
																										}
																									],
																									"type": "collection",
																									"label": "Thumbnails"
																								}
																							],
																							"type": "array",
																							"label": "1:1 Image"
																						},
																						{
																							"name": "1:1 Image Url",
																							"type": "url",
																							"label": "1:1 Image Url"
																						},
																						{
																							"name": "Thumbnail image",
																							"spec": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "filename",
																									"type": "filename",
																									"label": "File name"
																								},
																								{
																									"name": "size",
																									"type": "uinteger",
																									"label": "Size"
																								},
																								{
																									"name": "type",
																									"type": "text",
																									"label": "MIME type"
																								},
																								{
																									"name": "thumbnails",
																									"spec": [
																										{
																											"name": "small",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Small"
																										},
																										{
																											"name": "large",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Large"
																										},
																										{
																											"name": "full",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Full"
																										}
																									],
																									"type": "collection",
																									"label": "Thumbnails"
																								}
																							],
																							"type": "array",
																							"label": "Thumbnail image"
																						},
																						{
																							"name": "URL",
																							"type": "url",
																							"label": "URL"
																						},
																						{
																							"name": "Featured?",
																							"type": "text",
																							"label": "Featured?"
																						},
																						{
																							"name": "Blog Post Page - BG Image",
																							"type": "text",
																							"label": "Blog Post Page - BG Image",
																							"multiline": true
																						},
																						{
																							"name": "URL copy",
																							"spec": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "filename",
																									"type": "filename",
																									"label": "File name"
																								},
																								{
																									"name": "size",
																									"type": "uinteger",
																									"label": "Size"
																								},
																								{
																									"name": "type",
																									"type": "text",
																									"label": "MIME type"
																								},
																								{
																									"name": "thumbnails",
																									"spec": [
																										{
																											"name": "small",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Small"
																										},
																										{
																											"name": "large",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Large"
																										},
																										{
																											"name": "full",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Full"
																										}
																									],
																									"type": "collection",
																									"label": "Thumbnails"
																								}
																							],
																							"type": "array",
																							"label": "URL copy"
																						},
																						{
																							"name": "Blog Home Image",
																							"spec": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "filename",
																									"type": "filename",
																									"label": "File name"
																								},
																								{
																									"name": "size",
																									"type": "uinteger",
																									"label": "Size"
																								},
																								{
																									"name": "type",
																									"type": "text",
																									"label": "MIME type"
																								},
																								{
																									"name": "thumbnails",
																									"spec": [
																										{
																											"name": "small",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Small"
																										},
																										{
																											"name": "large",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Large"
																										},
																										{
																											"name": "full",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Full"
																										}
																									],
																									"type": "collection",
																									"label": "Thumbnails"
																								}
																							],
																							"type": "array",
																							"label": "Blog Home Image"
																						},
																						{
																							"name": "URL copy copy",
																							"spec": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "filename",
																									"type": "filename",
																									"label": "File name"
																								},
																								{
																									"name": "size",
																									"type": "uinteger",
																									"label": "Size"
																								},
																								{
																									"name": "type",
																									"type": "text",
																									"label": "MIME type"
																								},
																								{
																									"name": "thumbnails",
																									"spec": [
																										{
																											"name": "small",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Small"
																										},
																										{
																											"name": "large",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Large"
																										},
																										{
																											"name": "full",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Full"
																										}
																									],
																									"type": "collection",
																									"label": "Thumbnails"
																								}
																							],
																							"type": "array",
																							"label": "URL copy copy"
																						},
																						{
																							"name": "vl",
																							"type": "text",
																							"label": "vl"
																						},
																						{
																							"name": "URL copy copy copy",
																							"spec": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "url",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "filename",
																									"type": "filename",
																									"label": "File name"
																								},
																								{
																									"name": "size",
																									"type": "uinteger",
																									"label": "Size"
																								},
																								{
																									"name": "type",
																									"type": "text",
																									"label": "MIME type"
																								},
																								{
																									"name": "thumbnails",
																									"spec": [
																										{
																											"name": "small",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Small"
																										},
																										{
																											"name": "large",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Large"
																										},
																										{
																											"name": "full",
																											"spec": [
																												{
																													"name": "url",
																													"type": "url",
																													"label": "URL"
																												},
																												{
																													"name": "width",
																													"type": "uinteger",
																													"label": "Width"
																												},
																												{
																													"name": "height",
																													"type": "uinteger",
																													"label": "Height"
																												}
																											],
																											"type": "collection",
																											"label": "Full"
																										}
																									],
																									"type": "collection",
																									"label": "Thumbnails"
																								}
																							],
																							"type": "array",
																							"label": "URL copy copy copy"
																						},
																						{
																							"name": "lottie",
																							"type": "text",
																							"label": "lottie"
																						},
																						{
																							"name": "Disp Ads",
																							"type": "text",
																							"label": "Disp Ads"
																						},
																						{
																							"name": "Tags",
																							"type": "text",
																							"label": "Tags"
																						},
																						{
																							"name": "Keyword Stats",
																							"spec": {
																								"label": "Record ID"
																							},
																							"type": "array",
																							"label": "Keyword Stats"
																						},
																						{
																							"name": "AI Gen Ideas - Keywords (from Keyword Stats) 2",
																							"type": "array",
																							"label": "AI Gen Ideas - Keywords (from Keyword Stats) 2"
																						},
																						{
																							"name": "AI Gen Ideas - Keywords (from Keyword Stats)",
																							"type": "array",
																							"label": "AI Gen Ideas - Keywords (from Keyword Stats)"
																						},
																						{
																							"name": "AI Gen Ideas - Keywords (from New table)",
																							"type": "array",
																							"label": "AI Gen Ideas - Keywords (from New table)"
																						},
																						{
																							"name": "New table",
																							"spec": {
																								"label": "Record ID"
																							},
																							"type": "array",
																							"label": "New table"
																						},
																						{
																							"name": "Master Relation \\",
																							"spec": {
																								"label": "Record ID"
																							},
																							"type": "array",
																							"label": "Master Relation \\"
																						},
																						{
																							"name": "Keyword Stats 2",
																							"spec": {
																								"label": "Record ID"
																							},
																							"type": "array",
																							"label": "Keyword Stats 2"
																						}
																					]
																}
										},
											{
												"id": 82,
													"module": "openai-gpt-3:CreateCompletion",
														"version": 1,
															"parameters": {
																"__IMTCONN__": 588038
															},
																"mapper": {
																	"model": "text-davinci-003",
																		"top_p": ".89",
																			"prompt": "\"Your best skills and experience include creating, executing, and measuring successful digital marketing campaigns, optimizing website usability, code, and functionality, developing compelling content, and using analytics to assess performance and identify areas for improvement. I am organized, detail-oriented, and highly motivated to help businesses reach their goals. I use my knowledge and skills to create strategies that are tailored to each business's needs and objectives.\" \n...\n\"{{54.choices[].text}}\"\n...\n\"Write a short outline with a table of contents for a blog article using {{54.choices[].text}} as the subject Write a short outline with table of contents. Include 5 major keywords or keyword queries that relate your title as the headline for each item in the table of contents.\"\n...\n\"{{98.choices[].text}}\"\n...\nWrite the fourth paragraph for the fourth item in the table of contents. Include supporting links in that paragraph as a hyperlink. Format the paragraph in html ",
																				"max_tokens": "1000",
																					"temperature": ".89",
																						"n_completions": "1"
																},
																	"metadata": {
																		"designer": {
																			"x": 2400,
																				"y": 450
																		},
																			"restore": {
																				"expect": {
																					"echo": {
																						"mode": "chose"
																					},
																						"model": {
																							"mode": "chose",
																								"label": "text-davinci-003"
																						}
																				},
																					"parameters": {
																						"__IMTCONN__": {
																							"data": {
																								"scoped": "true",
																									"connection": "openai-gpt-3"
																							},
																								"label": "My OpenAI connection"
																						}
																					}
																			},
																				"parameters": [
																					{
																						"name": "__IMTCONN__",
																						"type": "account:openai-gpt-3",
																						"label": "Connection",
																						"required": true
																					}
																				],
																					"expect": [
																						{
																							"name": "model",
																							"type": "select",
																							"label": "Model",
																							"required": true
																						},
																						{
																							"name": "prompt",
																							"type": "text",
																							"label": "Prompt"
																						},
																						{
																							"name": "max_tokens",
																							"type": "number",
																							"label": "Max Tokens"
																						},
																						{
																							"name": "temperature",
																							"type": "number",
																							"label": "Temperature"
																						},
																						{
																							"name": "top_p",
																							"type": "number",
																							"label": "Top p"
																						},
																						{
																							"name": "n_completions",
																							"type": "number",
																							"label": "N"
																						},
																						{
																							"name": "echo",
																							"type": "boolean",
																							"label": "Echo"
																						}
																					]
																	}
											},
												{
													"id": 83,
														"module": "airtable:ActionUpdateRecords",
															"version": 3,
																"parameters": {
																	"__IMTCONN__": 365050
																},
																	"mapper": {
																		"id": "{{81.id}}",
																			"base": "appDTUXQvgkjIvceg",
																				"table": "tblznvhtv4qcJ5TPM",
																					"record": {
																						"fld8uNBZ9ulQiWnLN": [
																							"{{82.choices[].text}}"
																						],
																							"fldcmft1ZViMIZVT4": [
																								{}
																							]
																					},
																						"typecast": true,
																							"useColumnId": false
																	},
																		"metadata": {
																			"designer": {
																				"x": 2700,
																					"y": 450
																			},
																				"restore": {
																					"expect": {
																						"base": {
																							"label": "Blog Articles "
																						},
																							"table": {
																								"label": "Articles"
																							},
																								"record": {
																									"nested": {
																										"fld6PQT4BKi9bQb0g": {
																											"mode": "chose"
																										},
																											"fld8uNBZ9ulQiWnLN": {
																												"mode": "chose",
																													"items": [
																														null
																													]
																											},
																												"fldBV0qjRH0veJHmN": {
																													"mode": "chose",
																														"label": "Empty"
																												},
																													"fldDCVCr8qSfqUjZr": {
																														"mode": "chose"
																													},
																														"fldFhgHIMgZiaGkdI": {
																															"mode": "chose"
																														},
																															"fldI1DkfxNeU7ghZX": {
																																"mode": "chose"
																															},
																																"fldI3QIRDkquLG5xd": {
																																	"mode": "chose"
																																},
																																	"fldNUG1XY4HtRyGrF": {
																																		"mode": "chose"
																																	},
																																		"fldNsAmJYjDqpwMXx": {
																																			"mode": "chose"
																																		},
																																			"fldTWuIZXDOQYX3E2": {
																																				"mode": "chose"
																																			},
																																				"fldXjTm7bCyGwlxtc": {
																																					"mode": "chose"
																																				},
																																					"fldXzfybHWG25OInJ": {
																																						"mode": "chose"
																																					},
																																						"fldZvJROus4QqCuIH": {
																																							"mode": "chose"
																																						},
																																							"fldcmft1ZViMIZVT4": {
																																								"mode": "chose",
																																									"items": [
																																										null
																																									],
																																										"collapsed": true
																																							},
																																								"fldf1ZAC1OD5DAbwR": {
																																									"mode": "chose"
																																								},
																																									"fldfDb8rdV8N0nobz": {
																																										"mode": "chose"
																																									},
																																										"fldfWPIuDl6G3CL8p": {
																																											"mode": "edit"
																																										},
																																											"fldfnVVDN7oxeSc7Y": {
																																												"mode": "chose"
																																											},
																																												"fldgFmysxjG6Zhdjs": {
																																													"mode": "edit"
																																												},
																																													"fldk0lL6UBhic2Y8p": {
																																														"mode": "chose"
																																													},
																																														"fldmMEcGOxQF7Cgpv": {
																																															"mode": "chose"
																																														},
																																															"fldoHHAKHoIsbFC6a": {
																																																"mode": "chose"
																																															},
																																																"fldtRod4Ob4IolxwU": {
																																																	"mode": "chose"
																																																},
																																																	"fldvLUgOumhobHnfq": {
																																																		"mode": "chose"
																																																	}
																									}
																								},
																									"typecast": {
																										"mode": "chose"
																									},
																										"useColumnId": {
																											"mode": "chose"
																										}
																					},
																						"parameters": {
																							"__IMTCONN__": {
																								"data": {
																									"scoped": "true",
																										"connection": "airtable2"
																								},
																									"label": "My Airtable connection"
																							}
																						}
																				},
																					"parameters": [
																						{
																							"name": "__IMTCONN__",
																							"type": "account:airtable2",
																							"label": "Connection",
																							"required": true
																						}
																					],
																						"expect": [
																							{
																								"name": "base",
																								"type": "select",
																								"label": "Base",
																								"required": true
																							},
																							{
																								"name": "typecast",
																								"type": "boolean",
																								"label": "Smart links",
																								"required": true
																							},
																							{
																								"name": "useColumnId",
																								"type": "boolean",
																								"label": "Use Column ID",
																								"required": true
																							},
																							{
																								"name": "table",
																								"type": "select",
																								"label": "Table",
																								"required": true
																							},
																							{
																								"name": "id",
																								"type": "text",
																								"label": "Record ID",
																								"required": true
																							},
																							{
																								"name": "record",
																								"spec": [
																									{
																										"name": "fldEo06grdNw5EmEB",
																										"type": "text",
																										"label": "Headline S"
																									},
																									{
																										"name": "fldf1ZAC1OD5DAbwR",
																										"spec": {
																											"mode": "edit",
																											"name": "value",
																											"type": "select",
																											"label": "Value",
																											"options": [
																												{
																													"label": "Fastest way to get your Facebook Conversion API setup.",
																													"value": "Fastest way to get your Facebook Conversion API setup."
																												},
																												{
																													"label": "7 Ways to Increase the Quality  of your Facebook Pixel Data",
																													"value": "7 Ways to Increase the Quality  of your Facebook Pixel Data"
																												},
																												{
																													"label": "Tragedy Strikes",
																													"value": "Tragedy Strikes"
																												},
																												{
																													"label": "A Talk With My Dad",
																													"value": "A Talk With My Dad"
																												},
																												{
																													"label": "Search Engine Optimization For Small Businesses",
																													"value": "Search Engine Optimization For Small Businesses"
																												},
																												{
																													"label": "How does SEO benefit from web design?",
																													"value": "How does SEO benefit from web design?"
																												},
																												{
																													"label": "How-to Connect Your IONOS Domain To A CMS (Kartra) 7 Easy Steps",
																													"value": "How-to Connect Your IONOS Domain To A CMS (Kartra) 7 Easy Steps"
																												},
																												{
																													"label": "The Essence Of The Soul; A Talk With My Grandma",
																													"value": "The Essence Of The Soul; A Talk With My Grandma"
																												},
																												{
																													"label": "Coronavirus; Statistics",
																													"value": "Coronavirus; Statistics"
																												},
																												{
																													"label": "Information",
																													"value": "Information"
																												},
																												{
																													"label": "and Background",
																													"value": "and Background"
																												},
																												{
																													"label": "Tragedy Strikes (Act Two)",
																													"value": "Tragedy Strikes (Act Two)"
																												},
																												{
																													"label": "How To Get A Domain Name Through Ionos (5 Easy Steps)",
																													"value": "How To Get A Domain Name Through Ionos (5 Easy Steps)"
																												},
																												{
																													"label": "The Fire Escape Ladder & The Bed Sheet Escape Rope",
																													"value": "The Fire Escape Ladder & The Bed Sheet Escape Rope"
																												},
																												{
																													"label": "What is a Sales Funnel (and how to create one)",
																													"value": "What is a Sales Funnel (and how to create one)"
																												},
																												{
																													"label": "Just Believe",
																													"value": "Just Believe"
																												},
																												{
																													"label": "\"Maximizing Your Digital Marketing Strategy with XML\"",
																													"value": "\"Maximizing Your Digital Marketing Strategy with XML\""
																												},
																												{
																													"label": "Web design agency",
																													"value": "Web design agency"
																												},
																												{
																													"label": "Graphic design services",
																													"value": "Graphic design services"
																												},
																												{
																													"label": "WordPress marketing strategies",
																													"value": "WordPress marketing strategies"
																												},
																												{
																													"label": "Website redesign for SEO",
																													"value": "Website redesign for SEO"
																												},
																												{
																													"label": "Custom conversion optimization for Facebook ads",
																													"value": "Custom conversion optimization for Facebook ads"
																												},
																												{
																													"label": "Cincinnati digital marketing services",
																													"value": "Cincinnati digital marketing services"
																												},
																												{
																													"label": "Kajabi website design services",
																													"value": "Kajabi website design services"
																												},
																												{
																													"label": "Kartra marketing automation",
																													"value": "Kartra marketing automation"
																												},
																												{
																													"label": "WordPress website design services",
																													"value": "WordPress website design services"
																												},
																												{
																													"label": "AI in digital marketing",
																													"value": "AI in digital marketing"
																												},
																												{
																													"label": "Profitable sales funnel design",
																													"value": "Profitable sales funnel design"
																												},
																												{
																													"label": "Data analytics for business",
																													"value": "Data analytics for business"
																												},
																												{
																													"label": "Facebook pixel implementation",
																													"value": "Facebook pixel implementation"
																												},
																												{
																													"label": "Website design agency",
																													"value": "Website design agency"
																												},
																												{
																													"label": "Brand management strategies",
																													"value": "Brand management strategies"
																												},
																												{
																													"label": "Instagram ads management",
																													"value": "Instagram ads management"
																												},
																												{
																													"label": "Free online website builder tools",
																													"value": "Free online website builder tools"
																												},
																												{
																													"label": "Facebook retargeting pixel setup",
																													"value": "Facebook retargeting pixel setup"
																												},
																												{
																													"label": "Digital marketing and graphic design services",
																													"value": "Digital marketing and graphic design services"
																												},
																												{
																													"label": "Facebook remarketing pixel setup",
																													"value": "Facebook remarketing pixel setup"
																												},
																												{
																													"label": "Digital branding agency services",
																													"value": "Digital branding agency services"
																												},
																												{
																													"label": "Machine learning applications in digital marketing",
																													"value": "Machine learning applications in digital marketing"
																												},
																												{
																													"label": "Kajabi marketing strategies",
																													"value": "Kajabi marketing strategies"
																												},
																												{
																													"label": "Digital marketing and website design services",
																													"value": "Digital marketing and website design services"
																												},
																												{
																													"label": "Facebook ads management",
																													"value": "Facebook ads management"
																												},
																												{
																													"label": "Professional website design services",
																													"value": "Professional website design services"
																												},
																												{
																													"label": "Facebook conversion tracking setup",
																													"value": "Facebook conversion tracking setup"
																												},
																												{
																													"label": "Digital web agency services",
																													"value": "Digital web agency services"
																												},
																												{
																													"label": "Email marketing campaigns",
																													"value": "Email marketing campaigns"
																												},
																												{
																													"label": "[Collection]",
																													"value": "[Collection]"
																												}
																											]
																										},
																										"type": "array",
																										"label": "Headline S copy"
																									},
																									{
																										"name": "fldXirSTFRMDHfGv4",
																										"type": "text",
																										"label": "Headline"
																									},
																									{
																										"name": "fldtJ45cBmKjiwnvX",
																										"type": "text",
																										"label": "Slug"
																									},
																									{
																										"name": "fld59oVkNRgdSqKSL",
																										"type": "text",
																										"label": "Item ID"
																									},
																									{
																										"name": "fldk0lL6UBhic2Y8p",
																										"spec": {
																											"name": "value",
																											"label": "Record ID"
																										},
																										"type": "array",
																										"label": "Imported table 2"
																									},
																									{
																										"name": "fldXjTm7bCyGwlxtc",
																										"type": "boolean",
																										"label": "Published"
																									},
																									{
																										"mode": "edit",
																										"name": "fldfWPIuDl6G3CL8p",
																										"type": "select",
																										"label": "Status ",
																										"validate": {
																											"enum": [
																												"Published ",
																												"Scheduled",
																												"Saved ",
																												"Draft",
																												"Archived",
																												"Active"
																											]
																										}
																									},
																									{
																										"name": "fld9tFyIQEtfQQQ1e",
																										"type": "number",
																										"label": "Collection ID"
																									},
																									{
																										"name": "fldvWdIBa5IYPlXUe",
																										"time": true,
																										"type": "date",
																										"label": "Published On"
																									},
																									{
																										"name": "fldmMEcGOxQF7Cgpv",
																										"spec": [
																											{
																												"name": "url",
																												"type": "text",
																												"label": "File URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											}
																										],
																										"type": "array",
																										"label": "Main Image"
																									},
																									{
																										"name": "fldznDfM50Ab2VdmV",
																										"type": "text",
																										"label": "Post Body"
																									},
																									{
																										"name": "fldkKclg8jJsO9cvn",
																										"type": "text",
																										"label": "Post Summary"
																									},
																									{
																										"name": "fldfnVVDN7oxeSc7Y",
																										"spec": [
																											{
																												"name": "url",
																												"type": "text",
																												"label": "File URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											}
																										],
																										"type": "array",
																										"label": "IMG 1"
																									},
																									{
																										"name": "fldRyr27WCTYM6Rm5",
																										"type": "text",
																										"label": "P1"
																									},
																									{
																										"name": "fldvLUgOumhobHnfq",
																										"spec": [
																											{
																												"name": "url",
																												"type": "text",
																												"label": "File URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											}
																										],
																										"type": "array",
																										"label": "IMG 2"
																									},
																									{
																										"name": "fldjSKeEpIfNaM9yc",
																										"type": "text",
																										"label": "P2"
																									},
																									{
																										"name": "fldtRod4Ob4IolxwU",
																										"spec": [
																											{
																												"name": "url",
																												"type": "text",
																												"label": "File URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											}
																										],
																										"type": "array",
																										"label": "IMG 3"
																									},
																									{
																										"name": "fld22j2mGsSDAKdwC",
																										"type": "text",
																										"label": "P3"
																									},
																									{
																										"name": "fldcmft1ZViMIZVT4",
																										"spec": [
																											{
																												"name": "url",
																												"type": "text",
																												"label": "File URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											}
																										],
																										"type": "array",
																										"label": "IMG 4"
																									},
																									{
																										"name": "fld8uNBZ9ulQiWnLN",
																										"spec": {
																											"name": "value",
																											"label": "Record ID"
																										},
																										"type": "array",
																										"label": "P4"
																									},
																									{
																										"name": "fld0RRcFilbX9pHbW",
																										"type": "text",
																										"label": "Author Picture"
																									},
																									{
																										"mode": "edit",
																										"name": "fldBV0qjRH0veJHmN",
																										"type": "select",
																										"label": "Author",
																										"validate": {
																											"enum": [
																												"Corey Shirey ",
																												"Corey Shirey"
																											]
																										}
																									},
																									{
																										"name": "fld8SX3AfzOU9mneu",
																										"type": "url",
																										"label": "Author URL"
																									},
																									{
																										"name": "fldfDb8rdV8N0nobz",
																										"spec": [
																											{
																												"name": "url",
																												"type": "text",
																												"label": "File URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											}
																										],
																										"type": "array",
																										"label": "16x9 Image"
																									},
																									{
																										"name": "fldHu898IejuOqfFw",
																										"type": "url",
																										"label": "16x9 Image URL"
																									},
																									{
																										"name": "fldZvJROus4QqCuIH",
																										"spec": [
																											{
																												"name": "url",
																												"type": "text",
																												"label": "File URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											}
																										],
																										"type": "array",
																										"label": "4:3 Image"
																									},
																									{
																										"name": "fldojWNRAD5ztaxm4",
																										"type": "url",
																										"label": "4:3 Image URL"
																									},
																									{
																										"name": "fld6PQT4BKi9bQb0g",
																										"spec": [
																											{
																												"name": "url",
																												"type": "text",
																												"label": "File URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											}
																										],
																										"type": "array",
																										"label": "1:1 Image"
																									},
																									{
																										"name": "fldBXJRrbwhigfVtY",
																										"type": "url",
																										"label": "1:1 Image Url"
																									},
																									{
																										"name": "fldFhgHIMgZiaGkdI",
																										"spec": [
																											{
																												"name": "url",
																												"type": "text",
																												"label": "File URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											}
																										],
																										"type": "array",
																										"label": "Thumbnail image"
																									},
																									{
																										"name": "fldUOpxh3ayCldWom",
																										"type": "url",
																										"label": "URL"
																									},
																									{
																										"mode": "edit",
																										"name": "fldgFmysxjG6Zhdjs",
																										"type": "select",
																										"label": "Featured?",
																										"validate": {
																											"enum": [
																												"",
																												"true",
																												"false"
																											]
																										}
																									},
																									{
																										"name": "fldNzGRRezuc2Kaj1",
																										"type": "text",
																										"label": "Blog Post Page - BG Image"
																									},
																									{
																										"name": "fldXzfybHWG25OInJ",
																										"spec": [
																											{
																												"name": "url",
																												"type": "text",
																												"label": "File URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											}
																										],
																										"type": "array",
																										"label": "URL copy"
																									},
																									{
																										"name": "fldI3QIRDkquLG5xd",
																										"spec": [
																											{
																												"name": "url",
																												"type": "text",
																												"label": "File URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											}
																										],
																										"type": "array",
																										"label": "Blog Home Image"
																									},
																									{
																										"name": "fldTWuIZXDOQYX3E2",
																										"spec": [
																											{
																												"name": "url",
																												"type": "text",
																												"label": "File URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											}
																										],
																										"type": "array",
																										"label": "URL copy copy"
																									},
																									{
																										"name": "fldUyll7wgNyVAs4D",
																										"type": "text",
																										"label": "vl"
																									},
																									{
																										"name": "fldNsAmJYjDqpwMXx",
																										"spec": [
																											{
																												"name": "url",
																												"type": "text",
																												"label": "File URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											}
																										],
																										"type": "array",
																										"label": "URL copy copy copy"
																									},
																									{
																										"name": "fldv4PST2GEuLdG3Y",
																										"type": "text",
																										"label": "lottie"
																									},
																									{
																										"name": "fld8Fw7QX2t4OvvFo",
																										"type": "text",
																										"label": "Disp Ads"
																									},
																									{
																										"name": "fldIuNKnPOHTJG8vL",
																										"type": "text",
																										"label": "Tags"
																									},
																									{
																										"name": "fldoHHAKHoIsbFC6a",
																										"spec": {
																											"name": "value",
																											"label": "Record ID"
																										},
																										"type": "array",
																										"label": "Keyword Stats"
																									},
																									{
																										"name": "fldI1DkfxNeU7ghZX",
																										"spec": {
																											"name": "value",
																											"label": "Record ID"
																										},
																										"type": "array",
																										"label": "New table"
																									},
																									{
																										"name": "fldDCVCr8qSfqUjZr",
																										"spec": {
																											"name": "value",
																											"label": "Record ID"
																										},
																										"type": "array",
																										"label": "Master Relation \\"
																									},
																									{
																										"name": "fldNUG1XY4HtRyGrF",
																										"spec": {
																											"name": "value",
																											"label": "Record ID"
																										},
																										"type": "array",
																										"label": "Keyword Stats 2"
																									}
																								],
																								"type": "collection",
																								"label": "Record"
																							}
																						],
																							"interface": [
																								{
																									"name": "id",
																									"type": "text",
																									"label": "ID"
																								},
																								{
																									"name": "createdTime",
																									"type": "date",
																									"label": "Created Time"
																								},
																								{
																									"name": "Headline S",
																									"type": "text",
																									"label": "Headline S"
																								},
																								{
																									"name": "Headline S copy",
																									"type": "array",
																									"label": "Headline S copy",
																									"editable": true
																								},
																								{
																									"name": "Headline",
																									"type": "text",
																									"label": "Headline"
																								},
																								{
																									"name": "Slug",
																									"type": "text",
																									"label": "Slug"
																								},
																								{
																									"name": "Item ID",
																									"type": "text",
																									"label": "Item ID"
																								},
																								{
																									"name": "Imported table 2",
																									"spec": {
																										"label": "Record ID"
																									},
																									"type": "array",
																									"label": "Imported table 2"
																								},
																								{
																									"name": "Headline (from Imported table 2)",
																									"type": "array",
																									"label": "Headline (from Imported table 2)"
																								},
																								{
																									"name": "Published",
																									"type": "boolean",
																									"label": "Published"
																								},
																								{
																									"name": "Status ",
																									"type": "text",
																									"label": "Status "
																								},
																								{
																									"name": "Collection ID",
																									"type": "number",
																									"label": "Collection ID"
																								},
																								{
																									"name": "Created Time",
																									"type": "date",
																									"label": "Created Time"
																								},
																								{
																									"name": "Updated On",
																									"type": "date",
																									"label": "Updated On"
																								},
																								{
																									"name": "Published On",
																									"time": true,
																									"type": "date",
																									"label": "Published On"
																								},
																								{
																									"name": "Main Image",
																									"spec": [
																										{
																											"name": "id",
																											"type": "text",
																											"label": "ID"
																										},
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "filename",
																											"type": "filename",
																											"label": "File name"
																										},
																										{
																											"name": "size",
																											"type": "uinteger",
																											"label": "Size"
																										},
																										{
																											"name": "type",
																											"type": "text",
																											"label": "MIME type"
																										},
																										{
																											"name": "thumbnails",
																											"spec": [
																												{
																													"name": "small",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Small"
																												},
																												{
																													"name": "large",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Large"
																												},
																												{
																													"name": "full",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Full"
																												}
																											],
																											"type": "collection",
																											"label": "Thumbnails"
																										}
																									],
																									"type": "array",
																									"label": "Main Image"
																								},
																								{
																									"name": "Post Body",
																									"type": "text",
																									"label": "Post Body",
																									"multiline": true
																								},
																								{
																									"name": "Post Summary",
																									"type": "text",
																									"label": "Post Summary",
																									"multiline": true
																								},
																								{
																									"name": "IMG 1",
																									"spec": [
																										{
																											"name": "id",
																											"type": "text",
																											"label": "ID"
																										},
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "filename",
																											"type": "filename",
																											"label": "File name"
																										},
																										{
																											"name": "size",
																											"type": "uinteger",
																											"label": "Size"
																										},
																										{
																											"name": "type",
																											"type": "text",
																											"label": "MIME type"
																										},
																										{
																											"name": "thumbnails",
																											"spec": [
																												{
																													"name": "small",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Small"
																												},
																												{
																													"name": "large",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Large"
																												},
																												{
																													"name": "full",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Full"
																												}
																											],
																											"type": "collection",
																											"label": "Thumbnails"
																										}
																									],
																									"type": "array",
																									"label": "IMG 1"
																								},
																								{
																									"name": "P1",
																									"type": "text",
																									"label": "P1",
																									"multiline": true
																								},
																								{
																									"name": "IMG 2",
																									"spec": [
																										{
																											"name": "id",
																											"type": "text",
																											"label": "ID"
																										},
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "filename",
																											"type": "filename",
																											"label": "File name"
																										},
																										{
																											"name": "size",
																											"type": "uinteger",
																											"label": "Size"
																										},
																										{
																											"name": "type",
																											"type": "text",
																											"label": "MIME type"
																										},
																										{
																											"name": "thumbnails",
																											"spec": [
																												{
																													"name": "small",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Small"
																												},
																												{
																													"name": "large",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Large"
																												},
																												{
																													"name": "full",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Full"
																												}
																											],
																											"type": "collection",
																											"label": "Thumbnails"
																										}
																									],
																									"type": "array",
																									"label": "IMG 2"
																								},
																								{
																									"name": "P2",
																									"type": "text",
																									"label": "P2",
																									"multiline": true
																								},
																								{
																									"name": "IMG 3",
																									"spec": [
																										{
																											"name": "id",
																											"type": "text",
																											"label": "ID"
																										},
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "filename",
																											"type": "filename",
																											"label": "File name"
																										},
																										{
																											"name": "size",
																											"type": "uinteger",
																											"label": "Size"
																										},
																										{
																											"name": "type",
																											"type": "text",
																											"label": "MIME type"
																										},
																										{
																											"name": "thumbnails",
																											"spec": [
																												{
																													"name": "small",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Small"
																												},
																												{
																													"name": "large",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Large"
																												},
																												{
																													"name": "full",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Full"
																												}
																											],
																											"type": "collection",
																											"label": "Thumbnails"
																										}
																									],
																									"type": "array",
																									"label": "IMG 3"
																								},
																								{
																									"name": "P3",
																									"type": "text",
																									"label": "P3",
																									"multiline": true
																								},
																								{
																									"name": "IMG 4",
																									"spec": [
																										{
																											"name": "id",
																											"type": "text",
																											"label": "ID"
																										},
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "filename",
																											"type": "filename",
																											"label": "File name"
																										},
																										{
																											"name": "size",
																											"type": "uinteger",
																											"label": "Size"
																										},
																										{
																											"name": "type",
																											"type": "text",
																											"label": "MIME type"
																										},
																										{
																											"name": "thumbnails",
																											"spec": [
																												{
																													"name": "small",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Small"
																												},
																												{
																													"name": "large",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Large"
																												},
																												{
																													"name": "full",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Full"
																												}
																											],
																											"type": "collection",
																											"label": "Thumbnails"
																										}
																									],
																									"type": "array",
																									"label": "IMG 4"
																								},
																								{
																									"name": "P4",
																									"spec": {
																										"label": "Record ID"
																									},
																									"type": "array",
																									"label": "P4"
																								},
																								{
																									"name": "Author Picture",
																									"type": "text",
																									"label": "Author Picture",
																									"multiline": true
																								},
																								{
																									"name": "Author",
																									"type": "text",
																									"label": "Author"
																								},
																								{
																									"name": "Author URL",
																									"type": "url",
																									"label": "Author URL"
																								},
																								{
																									"name": "16x9 Image",
																									"spec": [
																										{
																											"name": "id",
																											"type": "text",
																											"label": "ID"
																										},
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "filename",
																											"type": "filename",
																											"label": "File name"
																										},
																										{
																											"name": "size",
																											"type": "uinteger",
																											"label": "Size"
																										},
																										{
																											"name": "type",
																											"type": "text",
																											"label": "MIME type"
																										},
																										{
																											"name": "thumbnails",
																											"spec": [
																												{
																													"name": "small",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Small"
																												},
																												{
																													"name": "large",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Large"
																												},
																												{
																													"name": "full",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Full"
																												}
																											],
																											"type": "collection",
																											"label": "Thumbnails"
																										}
																									],
																									"type": "array",
																									"label": "16x9 Image"
																								},
																								{
																									"name": "16x9 Image URL",
																									"type": "url",
																									"label": "16x9 Image URL"
																								},
																								{
																									"name": "4:3 Image",
																									"spec": [
																										{
																											"name": "id",
																											"type": "text",
																											"label": "ID"
																										},
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "filename",
																											"type": "filename",
																											"label": "File name"
																										},
																										{
																											"name": "size",
																											"type": "uinteger",
																											"label": "Size"
																										},
																										{
																											"name": "type",
																											"type": "text",
																											"label": "MIME type"
																										},
																										{
																											"name": "thumbnails",
																											"spec": [
																												{
																													"name": "small",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Small"
																												},
																												{
																													"name": "large",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Large"
																												},
																												{
																													"name": "full",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Full"
																												}
																											],
																											"type": "collection",
																											"label": "Thumbnails"
																										}
																									],
																									"type": "array",
																									"label": "4:3 Image"
																								},
																								{
																									"name": "4:3 Image URL",
																									"type": "url",
																									"label": "4:3 Image URL"
																								},
																								{
																									"name": "1:1 Image",
																									"spec": [
																										{
																											"name": "id",
																											"type": "text",
																											"label": "ID"
																										},
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "filename",
																											"type": "filename",
																											"label": "File name"
																										},
																										{
																											"name": "size",
																											"type": "uinteger",
																											"label": "Size"
																										},
																										{
																											"name": "type",
																											"type": "text",
																											"label": "MIME type"
																										},
																										{
																											"name": "thumbnails",
																											"spec": [
																												{
																													"name": "small",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Small"
																												},
																												{
																													"name": "large",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Large"
																												},
																												{
																													"name": "full",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Full"
																												}
																											],
																											"type": "collection",
																											"label": "Thumbnails"
																										}
																									],
																									"type": "array",
																									"label": "1:1 Image"
																								},
																								{
																									"name": "1:1 Image Url",
																									"type": "url",
																									"label": "1:1 Image Url"
																								},
																								{
																									"name": "Thumbnail image",
																									"spec": [
																										{
																											"name": "id",
																											"type": "text",
																											"label": "ID"
																										},
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "filename",
																											"type": "filename",
																											"label": "File name"
																										},
																										{
																											"name": "size",
																											"type": "uinteger",
																											"label": "Size"
																										},
																										{
																											"name": "type",
																											"type": "text",
																											"label": "MIME type"
																										},
																										{
																											"name": "thumbnails",
																											"spec": [
																												{
																													"name": "small",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Small"
																												},
																												{
																													"name": "large",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Large"
																												},
																												{
																													"name": "full",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Full"
																												}
																											],
																											"type": "collection",
																											"label": "Thumbnails"
																										}
																									],
																									"type": "array",
																									"label": "Thumbnail image"
																								},
																								{
																									"name": "URL",
																									"type": "url",
																									"label": "URL"
																								},
																								{
																									"name": "Featured?",
																									"type": "text",
																									"label": "Featured?"
																								},
																								{
																									"name": "Blog Post Page - BG Image",
																									"type": "text",
																									"label": "Blog Post Page - BG Image",
																									"multiline": true
																								},
																								{
																									"name": "URL copy",
																									"spec": [
																										{
																											"name": "id",
																											"type": "text",
																											"label": "ID"
																										},
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "filename",
																											"type": "filename",
																											"label": "File name"
																										},
																										{
																											"name": "size",
																											"type": "uinteger",
																											"label": "Size"
																										},
																										{
																											"name": "type",
																											"type": "text",
																											"label": "MIME type"
																										},
																										{
																											"name": "thumbnails",
																											"spec": [
																												{
																													"name": "small",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Small"
																												},
																												{
																													"name": "large",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Large"
																												},
																												{
																													"name": "full",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Full"
																												}
																											],
																											"type": "collection",
																											"label": "Thumbnails"
																										}
																									],
																									"type": "array",
																									"label": "URL copy"
																								},
																								{
																									"name": "Blog Home Image",
																									"spec": [
																										{
																											"name": "id",
																											"type": "text",
																											"label": "ID"
																										},
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "filename",
																											"type": "filename",
																											"label": "File name"
																										},
																										{
																											"name": "size",
																											"type": "uinteger",
																											"label": "Size"
																										},
																										{
																											"name": "type",
																											"type": "text",
																											"label": "MIME type"
																										},
																										{
																											"name": "thumbnails",
																											"spec": [
																												{
																													"name": "small",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Small"
																												},
																												{
																													"name": "large",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Large"
																												},
																												{
																													"name": "full",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Full"
																												}
																											],
																											"type": "collection",
																											"label": "Thumbnails"
																										}
																									],
																									"type": "array",
																									"label": "Blog Home Image"
																								},
																								{
																									"name": "URL copy copy",
																									"spec": [
																										{
																											"name": "id",
																											"type": "text",
																											"label": "ID"
																										},
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "filename",
																											"type": "filename",
																											"label": "File name"
																										},
																										{
																											"name": "size",
																											"type": "uinteger",
																											"label": "Size"
																										},
																										{
																											"name": "type",
																											"type": "text",
																											"label": "MIME type"
																										},
																										{
																											"name": "thumbnails",
																											"spec": [
																												{
																													"name": "small",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Small"
																												},
																												{
																													"name": "large",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Large"
																												},
																												{
																													"name": "full",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Full"
																												}
																											],
																											"type": "collection",
																											"label": "Thumbnails"
																										}
																									],
																									"type": "array",
																									"label": "URL copy copy"
																								},
																								{
																									"name": "vl",
																									"type": "text",
																									"label": "vl"
																								},
																								{
																									"name": "URL copy copy copy",
																									"spec": [
																										{
																											"name": "id",
																											"type": "text",
																											"label": "ID"
																										},
																										{
																											"name": "url",
																											"type": "url",
																											"label": "URL"
																										},
																										{
																											"name": "filename",
																											"type": "filename",
																											"label": "File name"
																										},
																										{
																											"name": "size",
																											"type": "uinteger",
																											"label": "Size"
																										},
																										{
																											"name": "type",
																											"type": "text",
																											"label": "MIME type"
																										},
																										{
																											"name": "thumbnails",
																											"spec": [
																												{
																													"name": "small",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Small"
																												},
																												{
																													"name": "large",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Large"
																												},
																												{
																													"name": "full",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														},
																														{
																															"name": "width",
																															"type": "uinteger",
																															"label": "Width"
																														},
																														{
																															"name": "height",
																															"type": "uinteger",
																															"label": "Height"
																														}
																													],
																													"type": "collection",
																													"label": "Full"
																												}
																											],
																											"type": "collection",
																											"label": "Thumbnails"
																										}
																									],
																									"type": "array",
																									"label": "URL copy copy copy"
																								},
																								{
																									"name": "lottie",
																									"type": "text",
																									"label": "lottie"
																								},
																								{
																									"name": "Disp Ads",
																									"type": "text",
																									"label": "Disp Ads"
																								},
																								{
																									"name": "Tags",
																									"type": "text",
																									"label": "Tags"
																								},
																								{
																									"name": "Keyword Stats",
																									"spec": {
																										"label": "Record ID"
																									},
																									"type": "array",
																									"label": "Keyword Stats"
																								},
																								{
																									"name": "AI Gen Ideas - Keywords (from Keyword Stats) 2",
																									"type": "array",
																									"label": "AI Gen Ideas - Keywords (from Keyword Stats) 2"
																								},
																								{
																									"name": "AI Gen Ideas - Keywords (from Keyword Stats)",
																									"type": "array",
																									"label": "AI Gen Ideas - Keywords (from Keyword Stats)"
																								},
																								{
																									"name": "AI Gen Ideas - Keywords (from New table)",
																									"type": "array",
																									"label": "AI Gen Ideas - Keywords (from New table)"
																								},
																								{
																									"name": "New table",
																									"spec": {
																										"label": "Record ID"
																									},
																									"type": "array",
																									"label": "New table"
																								},
																								{
																									"name": "Master Relation \\",
																									"spec": {
																										"label": "Record ID"
																									},
																									"type": "array",
																									"label": "Master Relation \\"
																								},
																								{
																									"name": "Keyword Stats 2",
																									"spec": {
																										"label": "Record ID"
																									},
																									"type": "array",
																									"label": "Keyword Stats 2"
																								}
																							]
																		}
												},
													{
														"id": 85,
															"module": "airtable:ActionGetRecord",
																"version": 3,
																	"parameters": {
																		"__IMTCONN__": 365050
																	},
																		"mapper": {
																			"id": "{{78.id}}",
																				"base": "appDTUXQvgkjIvceg",
																					"table": "tblznvhtv4qcJ5TPM",
																						"useColumnId": false
																		},
																			"metadata": {
																				"designer": {
																					"x": 3000,
																						"y": 450
																				},
																					"restore": {
																						"expect": {
																							"base": {
																								"mode": "chose",
																									"label": "Blog Articles "
																							},
																								"table": {
																									"mode": "chose",
																										"label": "Articles"
																								},
																									"useColumnId": {
																										"mode": "chose"
																									}
																						},
																							"parameters": {
																								"__IMTCONN__": {
																									"data": {
																										"scoped": "true",
																											"connection": "airtable2"
																									},
																										"label": "My Airtable connection"
																								}
																							}
																					},
																						"parameters": [
																							{
																								"name": "__IMTCONN__",
																								"type": "account:airtable2",
																								"label": "Connection",
																								"required": true
																							}
																						],
																							"expect": [
																								{
																									"name": "base",
																									"type": "select",
																									"label": "Base",
																									"required": true
																								},
																								{
																									"name": "useColumnId",
																									"type": "boolean",
																									"label": "Use Column ID",
																									"required": true
																								},
																								{
																									"name": "table",
																									"type": "select",
																									"label": "Table",
																									"required": true
																								},
																								{
																									"name": "id",
																									"type": "text",
																									"label": "Record ID",
																									"required": true
																								}
																							],
																								"interface": [
																									{
																										"name": "id",
																										"type": "text",
																										"label": "ID"
																									},
																									{
																										"name": "createdTime",
																										"type": "date",
																										"label": "Created Time"
																									},
																									{
																										"name": "Headline S",
																										"type": "text",
																										"label": "Headline S"
																									},
																									{
																										"name": "Headline S copy",
																										"type": "array",
																										"label": "Headline S copy",
																										"editable": true
																									},
																									{
																										"name": "Headline",
																										"type": "text",
																										"label": "Headline"
																									},
																									{
																										"name": "Slug",
																										"type": "text",
																										"label": "Slug"
																									},
																									{
																										"name": "Item ID",
																										"type": "text",
																										"label": "Item ID"
																									},
																									{
																										"name": "Imported table 2",
																										"spec": {
																											"label": "Record ID"
																										},
																										"type": "array",
																										"label": "Imported table 2"
																									},
																									{
																										"name": "Headline (from Imported table 2)",
																										"type": "array",
																										"label": "Headline (from Imported table 2)"
																									},
																									{
																										"name": "Published",
																										"type": "boolean",
																										"label": "Published"
																									},
																									{
																										"name": "Status ",
																										"type": "text",
																										"label": "Status "
																									},
																									{
																										"name": "Collection ID",
																										"type": "number",
																										"label": "Collection ID"
																									},
																									{
																										"name": "Created Time",
																										"type": "date",
																										"label": "Created Time"
																									},
																									{
																										"name": "Updated On",
																										"type": "date",
																										"label": "Updated On"
																									},
																									{
																										"name": "Published On",
																										"time": true,
																										"type": "date",
																										"label": "Published On"
																									},
																									{
																										"name": "Main Image",
																										"spec": [
																											{
																												"name": "id",
																												"type": "text",
																												"label": "ID"
																											},
																											{
																												"name": "url",
																												"type": "url",
																												"label": "URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											},
																											{
																												"name": "size",
																												"type": "uinteger",
																												"label": "Size"
																											},
																											{
																												"name": "type",
																												"type": "text",
																												"label": "MIME type"
																											},
																											{
																												"name": "thumbnails",
																												"spec": [
																													{
																														"name": "small",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Small"
																													},
																													{
																														"name": "large",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Large"
																													},
																													{
																														"name": "full",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Full"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnails"
																											}
																										],
																										"type": "array",
																										"label": "Main Image"
																									},
																									{
																										"name": "Post Body",
																										"type": "text",
																										"label": "Post Body",
																										"multiline": true
																									},
																									{
																										"name": "Post Summary",
																										"type": "text",
																										"label": "Post Summary",
																										"multiline": true
																									},
																									{
																										"name": "IMG 1",
																										"spec": [
																											{
																												"name": "id",
																												"type": "text",
																												"label": "ID"
																											},
																											{
																												"name": "url",
																												"type": "url",
																												"label": "URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											},
																											{
																												"name": "size",
																												"type": "uinteger",
																												"label": "Size"
																											},
																											{
																												"name": "type",
																												"type": "text",
																												"label": "MIME type"
																											},
																											{
																												"name": "thumbnails",
																												"spec": [
																													{
																														"name": "small",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Small"
																													},
																													{
																														"name": "large",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Large"
																													},
																													{
																														"name": "full",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Full"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnails"
																											}
																										],
																										"type": "array",
																										"label": "IMG 1"
																									},
																									{
																										"name": "P1",
																										"type": "text",
																										"label": "P1",
																										"multiline": true
																									},
																									{
																										"name": "IMG 2",
																										"spec": [
																											{
																												"name": "id",
																												"type": "text",
																												"label": "ID"
																											},
																											{
																												"name": "url",
																												"type": "url",
																												"label": "URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											},
																											{
																												"name": "size",
																												"type": "uinteger",
																												"label": "Size"
																											},
																											{
																												"name": "type",
																												"type": "text",
																												"label": "MIME type"
																											},
																											{
																												"name": "thumbnails",
																												"spec": [
																													{
																														"name": "small",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Small"
																													},
																													{
																														"name": "large",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Large"
																													},
																													{
																														"name": "full",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Full"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnails"
																											}
																										],
																										"type": "array",
																										"label": "IMG 2"
																									},
																									{
																										"name": "P2",
																										"type": "text",
																										"label": "P2",
																										"multiline": true
																									},
																									{
																										"name": "IMG 3",
																										"spec": [
																											{
																												"name": "id",
																												"type": "text",
																												"label": "ID"
																											},
																											{
																												"name": "url",
																												"type": "url",
																												"label": "URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											},
																											{
																												"name": "size",
																												"type": "uinteger",
																												"label": "Size"
																											},
																											{
																												"name": "type",
																												"type": "text",
																												"label": "MIME type"
																											},
																											{
																												"name": "thumbnails",
																												"spec": [
																													{
																														"name": "small",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Small"
																													},
																													{
																														"name": "large",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Large"
																													},
																													{
																														"name": "full",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Full"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnails"
																											}
																										],
																										"type": "array",
																										"label": "IMG 3"
																									},
																									{
																										"name": "P3",
																										"type": "text",
																										"label": "P3",
																										"multiline": true
																									},
																									{
																										"name": "IMG 4",
																										"spec": [
																											{
																												"name": "id",
																												"type": "text",
																												"label": "ID"
																											},
																											{
																												"name": "url",
																												"type": "url",
																												"label": "URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											},
																											{
																												"name": "size",
																												"type": "uinteger",
																												"label": "Size"
																											},
																											{
																												"name": "type",
																												"type": "text",
																												"label": "MIME type"
																											},
																											{
																												"name": "thumbnails",
																												"spec": [
																													{
																														"name": "small",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Small"
																													},
																													{
																														"name": "large",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Large"
																													},
																													{
																														"name": "full",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Full"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnails"
																											}
																										],
																										"type": "array",
																										"label": "IMG 4"
																									},
																									{
																										"name": "P4",
																										"spec": {
																											"label": "Record ID"
																										},
																										"type": "array",
																										"label": "P4"
																									},
																									{
																										"name": "Author Picture",
																										"type": "text",
																										"label": "Author Picture",
																										"multiline": true
																									},
																									{
																										"name": "Author",
																										"type": "text",
																										"label": "Author"
																									},
																									{
																										"name": "Author URL",
																										"type": "url",
																										"label": "Author URL"
																									},
																									{
																										"name": "16x9 Image",
																										"spec": [
																											{
																												"name": "id",
																												"type": "text",
																												"label": "ID"
																											},
																											{
																												"name": "url",
																												"type": "url",
																												"label": "URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											},
																											{
																												"name": "size",
																												"type": "uinteger",
																												"label": "Size"
																											},
																											{
																												"name": "type",
																												"type": "text",
																												"label": "MIME type"
																											},
																											{
																												"name": "thumbnails",
																												"spec": [
																													{
																														"name": "small",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Small"
																													},
																													{
																														"name": "large",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Large"
																													},
																													{
																														"name": "full",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Full"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnails"
																											}
																										],
																										"type": "array",
																										"label": "16x9 Image"
																									},
																									{
																										"name": "16x9 Image URL",
																										"type": "url",
																										"label": "16x9 Image URL"
																									},
																									{
																										"name": "4:3 Image",
																										"spec": [
																											{
																												"name": "id",
																												"type": "text",
																												"label": "ID"
																											},
																											{
																												"name": "url",
																												"type": "url",
																												"label": "URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											},
																											{
																												"name": "size",
																												"type": "uinteger",
																												"label": "Size"
																											},
																											{
																												"name": "type",
																												"type": "text",
																												"label": "MIME type"
																											},
																											{
																												"name": "thumbnails",
																												"spec": [
																													{
																														"name": "small",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Small"
																													},
																													{
																														"name": "large",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Large"
																													},
																													{
																														"name": "full",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Full"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnails"
																											}
																										],
																										"type": "array",
																										"label": "4:3 Image"
																									},
																									{
																										"name": "4:3 Image URL",
																										"type": "url",
																										"label": "4:3 Image URL"
																									},
																									{
																										"name": "1:1 Image",
																										"spec": [
																											{
																												"name": "id",
																												"type": "text",
																												"label": "ID"
																											},
																											{
																												"name": "url",
																												"type": "url",
																												"label": "URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											},
																											{
																												"name": "size",
																												"type": "uinteger",
																												"label": "Size"
																											},
																											{
																												"name": "type",
																												"type": "text",
																												"label": "MIME type"
																											},
																											{
																												"name": "thumbnails",
																												"spec": [
																													{
																														"name": "small",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Small"
																													},
																													{
																														"name": "large",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Large"
																													},
																													{
																														"name": "full",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Full"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnails"
																											}
																										],
																										"type": "array",
																										"label": "1:1 Image"
																									},
																									{
																										"name": "1:1 Image Url",
																										"type": "url",
																										"label": "1:1 Image Url"
																									},
																									{
																										"name": "Thumbnail image",
																										"spec": [
																											{
																												"name": "id",
																												"type": "text",
																												"label": "ID"
																											},
																											{
																												"name": "url",
																												"type": "url",
																												"label": "URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											},
																											{
																												"name": "size",
																												"type": "uinteger",
																												"label": "Size"
																											},
																											{
																												"name": "type",
																												"type": "text",
																												"label": "MIME type"
																											},
																											{
																												"name": "thumbnails",
																												"spec": [
																													{
																														"name": "small",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Small"
																													},
																													{
																														"name": "large",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Large"
																													},
																													{
																														"name": "full",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Full"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnails"
																											}
																										],
																										"type": "array",
																										"label": "Thumbnail image"
																									},
																									{
																										"name": "URL",
																										"type": "url",
																										"label": "URL"
																									},
																									{
																										"name": "Featured?",
																										"type": "text",
																										"label": "Featured?"
																									},
																									{
																										"name": "Blog Post Page - BG Image",
																										"type": "text",
																										"label": "Blog Post Page - BG Image",
																										"multiline": true
																									},
																									{
																										"name": "URL copy",
																										"spec": [
																											{
																												"name": "id",
																												"type": "text",
																												"label": "ID"
																											},
																											{
																												"name": "url",
																												"type": "url",
																												"label": "URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											},
																											{
																												"name": "size",
																												"type": "uinteger",
																												"label": "Size"
																											},
																											{
																												"name": "type",
																												"type": "text",
																												"label": "MIME type"
																											},
																											{
																												"name": "thumbnails",
																												"spec": [
																													{
																														"name": "small",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Small"
																													},
																													{
																														"name": "large",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Large"
																													},
																													{
																														"name": "full",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Full"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnails"
																											}
																										],
																										"type": "array",
																										"label": "URL copy"
																									},
																									{
																										"name": "Blog Home Image",
																										"spec": [
																											{
																												"name": "id",
																												"type": "text",
																												"label": "ID"
																											},
																											{
																												"name": "url",
																												"type": "url",
																												"label": "URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											},
																											{
																												"name": "size",
																												"type": "uinteger",
																												"label": "Size"
																											},
																											{
																												"name": "type",
																												"type": "text",
																												"label": "MIME type"
																											},
																											{
																												"name": "thumbnails",
																												"spec": [
																													{
																														"name": "small",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Small"
																													},
																													{
																														"name": "large",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Large"
																													},
																													{
																														"name": "full",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Full"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnails"
																											}
																										],
																										"type": "array",
																										"label": "Blog Home Image"
																									},
																									{
																										"name": "URL copy copy",
																										"spec": [
																											{
																												"name": "id",
																												"type": "text",
																												"label": "ID"
																											},
																											{
																												"name": "url",
																												"type": "url",
																												"label": "URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											},
																											{
																												"name": "size",
																												"type": "uinteger",
																												"label": "Size"
																											},
																											{
																												"name": "type",
																												"type": "text",
																												"label": "MIME type"
																											},
																											{
																												"name": "thumbnails",
																												"spec": [
																													{
																														"name": "small",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Small"
																													},
																													{
																														"name": "large",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Large"
																													},
																													{
																														"name": "full",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Full"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnails"
																											}
																										],
																										"type": "array",
																										"label": "URL copy copy"
																									},
																									{
																										"name": "vl",
																										"type": "text",
																										"label": "vl"
																									},
																									{
																										"name": "URL copy copy copy",
																										"spec": [
																											{
																												"name": "id",
																												"type": "text",
																												"label": "ID"
																											},
																											{
																												"name": "url",
																												"type": "url",
																												"label": "URL"
																											},
																											{
																												"name": "filename",
																												"type": "filename",
																												"label": "File name"
																											},
																											{
																												"name": "size",
																												"type": "uinteger",
																												"label": "Size"
																											},
																											{
																												"name": "type",
																												"type": "text",
																												"label": "MIME type"
																											},
																											{
																												"name": "thumbnails",
																												"spec": [
																													{
																														"name": "small",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Small"
																													},
																													{
																														"name": "large",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Large"
																													},
																													{
																														"name": "full",
																														"spec": [
																															{
																																"name": "url",
																																"type": "url",
																																"label": "URL"
																															},
																															{
																																"name": "width",
																																"type": "uinteger",
																																"label": "Width"
																															},
																															{
																																"name": "height",
																																"type": "uinteger",
																																"label": "Height"
																															}
																														],
																														"type": "collection",
																														"label": "Full"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnails"
																											}
																										],
																										"type": "array",
																										"label": "URL copy copy copy"
																									},
																									{
																										"name": "lottie",
																										"type": "text",
																										"label": "lottie"
																									},
																									{
																										"name": "Disp Ads",
																										"type": "text",
																										"label": "Disp Ads"
																									},
																									{
																										"name": "Tags",
																										"type": "text",
																										"label": "Tags"
																									},
																									{
																										"name": "Keyword Stats",
																										"spec": {
																											"label": "Record ID"
																										},
																										"type": "array",
																										"label": "Keyword Stats"
																									},
																									{
																										"name": "AI Gen Ideas - Keywords (from Keyword Stats) 2",
																										"type": "array",
																										"label": "AI Gen Ideas - Keywords (from Keyword Stats) 2"
																									},
																									{
																										"name": "AI Gen Ideas - Keywords (from Keyword Stats)",
																										"type": "array",
																										"label": "AI Gen Ideas - Keywords (from Keyword Stats)"
																									},
																									{
																										"name": "AI Gen Ideas - Keywords (from New table)",
																										"type": "array",
																										"label": "AI Gen Ideas - Keywords (from New table)"
																									},
																									{
																										"name": "New table",
																										"spec": {
																											"label": "Record ID"
																										},
																										"type": "array",
																										"label": "New table"
																									},
																									{
																										"name": "Master Relation \\",
																										"spec": {
																											"label": "Record ID"
																										},
																										"type": "array",
																										"label": "Master Relation \\"
																									},
																									{
																										"name": "Keyword Stats 2",
																										"spec": {
																											"label": "Record ID"
																										},
																										"type": "array",
																										"label": "Keyword Stats 2"
																									}
																								]
																			}
													},
														{
															"id": 89,
																"module": "openai-gpt-3:GenerateImage",
																	"version": 1,
																		"parameters": {
																			"__IMTCONN__": 588038
																		},
																			"mapper": {
																				"n": "1",
																					"size": "1024x1024",
																						"prompt": "{{92.`AI Gen Ideas - Keywords`}} generate an image that describes this. It can be a literal interpretationn or one that is not literal. ",
																							"response_format": "url"
																			},
																				"metadata": {
																					"designer": {
																						"x": 3280,
																							"y": 466
																					},
																						"restore": {
																							"expect": {
																								"size": {
																									"mode": "chose",
																										"label": "1024x1024"
																								},
																									"response_format": {
																										"mode": "chose",
																											"label": "URL"
																									}
																							},
																								"parameters": {
																									"__IMTCONN__": {
																										"data": {
																											"scoped": "true",
																												"connection": "openai-gpt-3"
																										},
																											"label": "My OpenAI connection"
																									}
																								}
																						},
																							"parameters": [
																								{
																									"name": "__IMTCONN__",
																									"type": "account:openai-gpt-3",
																									"label": "Connection",
																									"required": true
																								}
																							],
																								"expect": [
																									{
																										"name": "prompt",
																										"type": "text",
																										"label": "Prompt",
																										"required": true,
																										"validate": {
																											"max": 1000,
																											"min": 0
																										}
																									},
																									{
																										"name": "size",
																										"type": "select",
																										"label": "Size",
																										"validate": {
																											"enum": [
																												"256x256",
																												"512x512",
																												"1024x1024"
																											]
																										}
																									},
																									{
																										"name": "response_format",
																										"type": "select",
																										"label": "Response Format",
																										"validate": {
																											"enum": [
																												"url",
																												"b64_json"
																											]
																										}
																									},
																									{
																										"name": "n",
																										"type": "integer",
																										"label": "N",
																										"validate": {
																											"max": 10,
																											"min": 1
																										}
																									}
																								]
																				}
														},
															{
																"id": 51,
																	"module": "webflow:createItem",
																		"version": 1,
																			"parameters": {
																				"__IMTCONN__": 528598
																			},
																				"mapper": {
																					"live": false,
																						"fields": {
																							"p1": "{{85.P1}}",
																								"p2": "{{85.P2}}",
																									"p3": "{{85.P3}}",
																										"p4": "{{85.P4}}",
																											"img3": {},
																												"name": "{{85.`Headline S`}}",
																													"img-1": {},
																														"img-2": {},
																															"img-4": {},
																																"_draft": true,
																																	"_archived": false,
																																		"post-body": "{{85.`Post Body`}}",
																																			"16x9-image": {},
																																				"main-image": {
																																					"url": "{{89.data[].url}}"
																																				},
																																					"1-1-image-2": {},
																																						"4-3-image-2": {},
																																							"post-summary": "{{85.`Post Summary`}}",
																																								"author-picture": {},
																																									"thumbnail-image": {}
																						},
																							"site_id": "5e74359e0bfaae1b18fbb242",
																								"collection_id": "5e8f6b68a438dd2a4600e200"
																				},
																					"metadata": {
																						"designer": {
																							"x": 3573,
																								"y": 471
																						},
																							"restore": {
																								"expect": {
																									"live": {
																										"mode": "chose"
																									},
																										"fields": {
																											"nested": {
																												"tags": {
																													"mode": "chose"
																												},
																													"_draft": {
																														"mode": "chose"
																													},
																														"featured": {
																															"mode": "chose"
																														},
																															"_archived": {
																																"mode": "chose"
																															}
																											}
																										},
																											"site_id": {
																												"mode": "chose",
																													"label": "Premium Design Partners"
																											},
																												"collection_id": {
																													"mode": "chose",
																														"label": "Blog Posts",
																															"nested": [
																																{
																																	"name": "fields",
																																	"spec": [
																																		{
																																			"name": "main-image",
																																			"spec": [
																																				{
																																					"help": "Valid URL with Image extension in it.",
																																					"name": "url",
																																					"type": "url",
																																					"label": "URL",
																																					"required": false
																																				}
																																			],
																																			"type": "collection",
																																			"label": "Main Image",
																																			"required": false
																																		},
																																		{
																																			"name": "post-body",
																																			"type": "text",
																																			"label": "Post Body",
																																			"required": false,
																																			"multiline": true
																																		},
																																		{
																																			"name": "post-summary",
																																			"type": "text",
																																			"label": "Post Summary",
																																			"required": false
																																		},
																																		{
																																			"name": "author-picture",
																																			"spec": [
																																				{
																																					"help": "Valid URL with Image extension in it.",
																																					"name": "url",
																																					"type": "url",
																																					"label": "URL",
																																					"required": false
																																				}
																																			],
																																			"type": "collection",
																																			"label": "Author Picture",
																																			"required": false
																																		},
																																		{
																																			"name": "author",
																																			"type": "text",
																																			"label": "Author",
																																			"required": false
																																		},
																																		{
																																			"name": "author-url",
																																			"type": "url",
																																			"label": "Author URL",
																																			"required": false
																																		},
																																		{
																																			"name": "16x9-image",
																																			"spec": [
																																				{
																																					"help": "Valid URL with Image extension in it.",
																																					"name": "url",
																																					"type": "url",
																																					"label": "URL",
																																					"required": false
																																				}
																																			],
																																			"type": "collection",
																																			"label": "16x9 Image",
																																			"required": false
																																		},
																																		{
																																			"name": "16x9-image-url",
																																			"type": "url",
																																			"label": "16x9 Image URL",
																																			"required": false
																																		},
																																		{
																																			"name": "4-3-image-2",
																																			"spec": [
																																				{
																																					"help": "Valid URL with Image extension in it.",
																																					"name": "url",
																																					"type": "url",
																																					"label": "URL",
																																					"required": false
																																				}
																																			],
																																			"type": "collection",
																																			"label": "4:3 Image",
																																			"required": false
																																		},
																																		{
																																			"name": "4-3-image-url",
																																			"type": "url",
																																			"label": "4:3 Image URL",
																																			"required": false
																																		},
																																		{
																																			"name": "1-1-image-2",
																																			"spec": [
																																				{
																																					"help": "Valid URL with Image extension in it.",
																																					"name": "url",
																																					"type": "url",
																																					"label": "URL",
																																					"required": false
																																				}
																																			],
																																			"type": "collection",
																																			"label": "1:1 Image",
																																			"required": false
																																		},
																																		{
																																			"name": "1-1-image-url",
																																			"type": "url",
																																			"label": "1:1 Image Url",
																																			"required": false
																																		},
																																		{
																																			"name": "thumbnail-image",
																																			"spec": [
																																				{
																																					"help": "Valid URL with Image extension in it.",
																																					"name": "url",
																																					"type": "url",
																																					"label": "URL",
																																					"required": false
																																				}
																																			],
																																			"type": "collection",
																																			"label": "Thumbnail image",
																																			"required": false
																																		},
																																		{
																																			"name": "featured",
																																			"type": "boolean",
																																			"label": "Featured?",
																																			"required": false
																																		},
																																		{
																																			"name": "color",
																																			"type": "color",
																																			"label": "Color",
																																			"required": false
																																		},
																																		{
																																			"name": "vl",
																																			"type": "url",
																																			"label": "vl",
																																			"required": false
																																		},
																																		{
																																			"name": "https-lottiefiles-com-69517-how-targeted-traffic-works",
																																			"type": "text",
																																			"label": "lottie",
																																			"required": false
																																		},
																																		{
																																			"name": "ltie",
																																			"type": "text",
																																			"label": "ltie",
																																			"required": false,
																																			"multiline": true
																																		},
																																		{
																																			"name": "disp-ads",
																																			"type": "text",
																																			"label": "Disp Ads",
																																			"required": false,
																																			"multiline": true
																																		},
																																		{
																																			"name": "tags",
																																			"spec": {
																																				"type": "text"
																																			},
																																			"type": "array",
																																			"label": "Tags",
																																			"required": false
																																		},
																																		{
																																			"name": "img-1",
																																			"spec": [
																																				{
																																					"help": "Valid URL with Image extension in it.",
																																					"name": "url",
																																					"type": "url",
																																					"label": "URL",
																																					"required": false
																																				}
																																			],
																																			"type": "collection",
																																			"label": "IMG 1",
																																			"required": false
																																		},
																																		{
																																			"name": "p1",
																																			"type": "text",
																																			"label": "P1",
																																			"required": false,
																																			"multiline": true
																																		},
																																		{
																																			"name": "img-2",
																																			"spec": [
																																				{
																																					"help": "Valid URL with Image extension in it.",
																																					"name": "url",
																																					"type": "url",
																																					"label": "URL",
																																					"required": false
																																				}
																																			],
																																			"type": "collection",
																																			"label": "IMG 2",
																																			"required": false
																																		},
																																		{
																																			"name": "p2",
																																			"type": "text",
																																			"label": "P2",
																																			"required": false,
																																			"multiline": true
																																		},
																																		{
																																			"name": "img3",
																																			"spec": [
																																				{
																																					"help": "Valid URL with Image extension in it.",
																																					"name": "url",
																																					"type": "url",
																																					"label": "URL",
																																					"required": false
																																				}
																																			],
																																			"type": "collection",
																																			"label": "IMG3",
																																			"required": false
																																		},
																																		{
																																			"name": "p3",
																																			"type": "text",
																																			"label": "P3",
																																			"required": false,
																																			"multiline": true
																																		},
																																		{
																																			"name": "img-4",
																																			"spec": [
																																				{
																																					"help": "Valid URL with Image extension in it.",
																																					"name": "url",
																																					"type": "url",
																																					"label": "URL",
																																					"required": false
																																				}
																																			],
																																			"type": "collection",
																																			"label": "IMG 4",
																																			"required": false
																																		},
																																		{
																																			"name": "p4",
																																			"type": "text",
																																			"label": "P4",
																																			"required": false,
																																			"multiline": true
																																		},
																																		{
																																			"help": "This field is an ID of Item reference.",
																																			"name": "auth",
																																			"type": "text",
																																			"label": "Auth",
																																			"required": false
																																		},
																																		{
																																			"name": "name",
																																			"type": "text",
																																			"label": "Headline",
																																			"required": true,
																																			"validate": {
																																				"max": 256
																																			}
																																		},
																																		{
																																			"help": "Must be alphanumerical and not contain any spaces or special characters",
																																			"name": "slug",
																																			"type": "text",
																																			"label": "Slug",
																																			"required": false,
																																			"validate": {
																																				"max": 256
																																			}
																																		},
																																		{
																																			"name": "_archived",
																																			"type": "boolean",
																																			"label": "Archived",
																																			"default": false,
																																			"required": true
																																		},
																																		{
																																			"help": "Please note that if you want to set your item as \"Draft\", then you also need to select **No** in \"Live\" below.\nAlso note that setting the item as \"Draft\" will unpublish your item from live site (this is a native behavior of Webflow API).",
																																			"name": "_draft",
																																			"type": "boolean",
																																			"label": "Draft",
																																			"default": false,
																																			"required": true
																																		}
																																	],
																																	"type": "collection",
																																	"label": "Fields"
																																}
																															]
																												}
																								},
																									"parameters": {
																										"__IMTCONN__": {
																											"data": {
																												"scoped": "true",
																													"connection": "webflow"
																											},
																												"label": "Webflow  (Make)"
																										}
																									}
																							},
																								"parameters": [
																									{
																										"name": "__IMTCONN__",
																										"type": "account:webflow",
																										"label": "Connection",
																										"required": true
																									}
																								],
																									"expect": [
																										{
																											"name": "site_id",
																											"type": "select",
																											"label": "Site ID",
																											"required": true
																										},
																										{
																											"name": "live",
																											"type": "boolean",
																											"label": "Live"
																										},
																										{
																											"name": "collection_id",
																											"type": "select",
																											"label": "Collection ID",
																											"required": true
																										},
																										{
																											"name": "fields",
																											"spec": [
																												{
																													"name": "main-image",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														}
																													],
																													"type": "collection",
																													"label": "Main Image"
																												},
																												{
																													"name": "post-body",
																													"type": "text",
																													"label": "Post Body"
																												},
																												{
																													"name": "post-summary",
																													"type": "text",
																													"label": "Post Summary"
																												},
																												{
																													"name": "author-picture",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														}
																													],
																													"type": "collection",
																													"label": "Author Picture"
																												},
																												{
																													"name": "author",
																													"type": "text",
																													"label": "Author"
																												},
																												{
																													"name": "author-url",
																													"type": "url",
																													"label": "Author URL"
																												},
																												{
																													"name": "16x9-image",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														}
																													],
																													"type": "collection",
																													"label": "16x9 Image"
																												},
																												{
																													"name": "16x9-image-url",
																													"type": "url",
																													"label": "16x9 Image URL"
																												},
																												{
																													"name": "4-3-image-2",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														}
																													],
																													"type": "collection",
																													"label": "4:3 Image"
																												},
																												{
																													"name": "4-3-image-url",
																													"type": "url",
																													"label": "4:3 Image URL"
																												},
																												{
																													"name": "1-1-image-2",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														}
																													],
																													"type": "collection",
																													"label": "1:1 Image"
																												},
																												{
																													"name": "1-1-image-url",
																													"type": "url",
																													"label": "1:1 Image Url"
																												},
																												{
																													"name": "thumbnail-image",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														}
																													],
																													"type": "collection",
																													"label": "Thumbnail image"
																												},
																												{
																													"name": "featured",
																													"type": "boolean",
																													"label": "Featured?"
																												},
																												{
																													"name": "color",
																													"type": "color",
																													"label": "Color"
																												},
																												{
																													"name": "vl",
																													"type": "url"
																												},
																												{
																													"name": "https-lottiefiles-com-69517-how-targeted-traffic-works",
																													"type": "text",
																													"label": "lottie"
																												},
																												{
																													"name": "ltie",
																													"type": "text"
																												},
																												{
																													"name": "disp-ads",
																													"type": "text",
																													"label": "Disp Ads"
																												},
																												{
																													"name": "tags",
																													"spec": {
																														"name": "value",
																														"type": "text"
																													},
																													"type": "array",
																													"label": "Tags"
																												},
																												{
																													"name": "img-1",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														}
																													],
																													"type": "collection",
																													"label": "IMG 1"
																												},
																												{
																													"name": "p1",
																													"type": "text",
																													"label": "P1"
																												},
																												{
																													"name": "img-2",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														}
																													],
																													"type": "collection",
																													"label": "IMG 2"
																												},
																												{
																													"name": "p2",
																													"type": "text",
																													"label": "P2"
																												},
																												{
																													"name": "img3",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														}
																													],
																													"type": "collection",
																													"label": "IMG3"
																												},
																												{
																													"name": "p3",
																													"type": "text",
																													"label": "P3"
																												},
																												{
																													"name": "img-4",
																													"spec": [
																														{
																															"name": "url",
																															"type": "url",
																															"label": "URL"
																														}
																													],
																													"type": "collection",
																													"label": "IMG 4"
																												},
																												{
																													"name": "p4",
																													"type": "text",
																													"label": "P4"
																												},
																												{
																													"name": "auth",
																													"type": "text",
																													"label": "Auth"
																												},
																												{
																													"name": "name",
																													"type": "text",
																													"label": "Headline",
																													"required": true,
																													"validate": {
																														"max": 256
																													}
																												},
																												{
																													"name": "slug",
																													"type": "text",
																													"label": "Slug",
																													"validate": {
																														"max": 256
																													}
																												},
																												{
																													"name": "_archived",
																													"type": "boolean",
																													"label": "Archived",
																													"required": true
																												},
																												{
																													"name": "_draft",
																													"type": "boolean",
																													"label": "Draft",
																													"required": true
																												}
																											],
																											"type": "collection",
																											"label": "Fields"
																										}
																									],
																										"interface": [
																											{
																												"name": "updated-by",
																												"type": "text",
																												"label": "Updated By"
																											},
																											{
																												"name": "created-by",
																												"type": "text",
																												"label": "Created By"
																											},
																											{
																												"name": "published-by",
																												"type": "text",
																												"label": "Published By"
																											},
																											{
																												"name": "_cid",
																												"type": "text",
																												"label": "Collection ID"
																											},
																											{
																												"name": "_id",
																												"type": "text",
																												"label": "Item ID"
																											},
																											{
																												"name": "main-image",
																												"spec": [
																													{
																														"name": "url",
																														"type": "url",
																														"label": "URL"
																													},
																													{
																														"name": "id",
																														"type": "text",
																														"label": "File ID"
																													},
																													{
																														"name": "name",
																														"type": "text",
																														"label": "Name"
																													}
																												],
																												"type": "collection",
																												"label": "Main Image",
																												"required": false
																											},
																											{
																												"name": "post-body",
																												"type": "text",
																												"label": "Post Body",
																												"required": false,
																												"multiline": true
																											},
																											{
																												"name": "post-summary",
																												"type": "text",
																												"label": "Post Summary",
																												"required": false
																											},
																											{
																												"name": "author-picture",
																												"spec": [
																													{
																														"name": "url",
																														"type": "url",
																														"label": "URL"
																													},
																													{
																														"name": "id",
																														"type": "text",
																														"label": "File ID"
																													},
																													{
																														"name": "name",
																														"type": "text",
																														"label": "Name"
																													}
																												],
																												"type": "collection",
																												"label": "Author Picture",
																												"required": false
																											},
																											{
																												"name": "author",
																												"type": "text",
																												"label": "Author",
																												"required": false
																											},
																											{
																												"name": "author-url",
																												"type": "url",
																												"label": "Author URL",
																												"required": false
																											},
																											{
																												"name": "16x9-image",
																												"spec": [
																													{
																														"name": "url",
																														"type": "url",
																														"label": "URL"
																													},
																													{
																														"name": "id",
																														"type": "text",
																														"label": "File ID"
																													},
																													{
																														"name": "name",
																														"type": "text",
																														"label": "Name"
																													}
																												],
																												"type": "collection",
																												"label": "16x9 Image",
																												"required": false
																											},
																											{
																												"name": "16x9-image-url",
																												"type": "url",
																												"label": "16x9 Image URL",
																												"required": false
																											},
																											{
																												"name": "4-3-image-2",
																												"spec": [
																													{
																														"name": "url",
																														"type": "url",
																														"label": "URL"
																													},
																													{
																														"name": "id",
																														"type": "text",
																														"label": "File ID"
																													},
																													{
																														"name": "name",
																														"type": "text",
																														"label": "Name"
																													}
																												],
																												"type": "collection",
																												"label": "4:3 Image",
																												"required": false
																											},
																											{
																												"name": "4-3-image-url",
																												"type": "url",
																												"label": "4:3 Image URL",
																												"required": false
																											},
																											{
																												"name": "1-1-image-2",
																												"spec": [
																													{
																														"name": "url",
																														"type": "url",
																														"label": "URL"
																													},
																													{
																														"name": "id",
																														"type": "text",
																														"label": "File ID"
																													},
																													{
																														"name": "name",
																														"type": "text",
																														"label": "Name"
																													}
																												],
																												"type": "collection",
																												"label": "1:1 Image",
																												"required": false
																											},
																											{
																												"name": "1-1-image-url",
																												"type": "url",
																												"label": "1:1 Image Url",
																												"required": false
																											},
																											{
																												"name": "thumbnail-image",
																												"spec": [
																													{
																														"name": "url",
																														"type": "url",
																														"label": "URL"
																													},
																													{
																														"name": "id",
																														"type": "text",
																														"label": "File ID"
																													},
																													{
																														"name": "name",
																														"type": "text",
																														"label": "Name"
																													}
																												],
																												"type": "collection",
																												"label": "Thumbnail image",
																												"required": false
																											},
																											{
																												"name": "featured",
																												"type": "boolean",
																												"label": "Featured?",
																												"required": false
																											},
																											{
																												"name": "color",
																												"type": "color",
																												"label": "Color",
																												"required": false
																											},
																											{
																												"name": "vl",
																												"type": "url",
																												"label": "vl",
																												"required": false
																											},
																											{
																												"name": "https-lottiefiles-com-69517-how-targeted-traffic-works",
																												"type": "text",
																												"label": "lottie",
																												"required": false
																											},
																											{
																												"name": "ltie",
																												"type": "text",
																												"label": "ltie",
																												"required": false,
																												"multiline": true
																											},
																											{
																												"name": "disp-ads",
																												"type": "text",
																												"label": "Disp Ads",
																												"required": false,
																												"multiline": true
																											},
																											{
																												"name": "tags",
																												"spec": {
																													"type": "text"
																												},
																												"type": "array",
																												"label": "Tags",
																												"required": false
																											},
																											{
																												"name": "img-1",
																												"spec": [
																													{
																														"name": "url",
																														"type": "url",
																														"label": "URL"
																													},
																													{
																														"name": "id",
																														"type": "text",
																														"label": "File ID"
																													},
																													{
																														"name": "name",
																														"type": "text",
																														"label": "Name"
																													}
																												],
																												"type": "collection",
																												"label": "IMG 1",
																												"required": false
																											},
																											{
																												"name": "p1",
																												"type": "text",
																												"label": "P1",
																												"required": false,
																												"multiline": true
																											},
																											{
																												"name": "img-2",
																												"spec": [
																													{
																														"name": "url",
																														"type": "url",
																														"label": "URL"
																													},
																													{
																														"name": "id",
																														"type": "text",
																														"label": "File ID"
																													},
																													{
																														"name": "name",
																														"type": "text",
																														"label": "Name"
																													}
																												],
																												"type": "collection",
																												"label": "IMG 2",
																												"required": false
																											},
																											{
																												"name": "p2",
																												"type": "text",
																												"label": "P2",
																												"required": false,
																												"multiline": true
																											},
																											{
																												"name": "img3",
																												"spec": [
																													{
																														"name": "url",
																														"type": "url",
																														"label": "URL"
																													},
																													{
																														"name": "id",
																														"type": "text",
																														"label": "File ID"
																													},
																													{
																														"name": "name",
																														"type": "text",
																														"label": "Name"
																													}
																												],
																												"type": "collection",
																												"label": "IMG3",
																												"required": false
																											},
																											{
																												"name": "p3",
																												"type": "text",
																												"label": "P3",
																												"required": false,
																												"multiline": true
																											},
																											{
																												"name": "img-4",
																												"spec": [
																													{
																														"name": "url",
																														"type": "url",
																														"label": "URL"
																													},
																													{
																														"name": "id",
																														"type": "text",
																														"label": "File ID"
																													},
																													{
																														"name": "name",
																														"type": "text",
																														"label": "Name"
																													}
																												],
																												"type": "collection",
																												"label": "IMG 4",
																												"required": false
																											},
																											{
																												"name": "p4",
																												"type": "text",
																												"label": "P4",
																												"required": false,
																												"multiline": true
																											},
																											{
																												"help": "This field is an ID of Item reference.",
																												"name": "auth",
																												"type": "text",
																												"label": "Auth",
																												"required": false
																											},
																											{
																												"name": "name",
																												"type": "text",
																												"label": "Headline",
																												"required": true,
																												"validate": {
																													"max": 256
																												}
																											},
																											{
																												"help": "Must be alphanumerical and not contain any spaces or special characters",
																												"name": "slug",
																												"type": "text",
																												"label": "Slug",
																												"required": false,
																												"validate": {
																													"max": 256
																												}
																											},
																											{
																												"name": "_archived",
																												"type": "boolean",
																												"label": "Archived",
																												"default": false,
																												"required": true
																											},
																											{
																												"help": "Please note that if you want to set your item as \"Draft\", then you also need to select **No** in \"Live\" below.\nAlso note that setting the item as \"Draft\" will unpublish your item from live site (this is a native behavior of Webflow API).",
																												"name": "_draft",
																												"type": "boolean",
																												"label": "Draft",
																												"default": false,
																												"required": true
																											},
																											{
																												"name": "created-on",
																												"time": false,
																												"type": "date",
																												"label": "Created On",
																												"required": false
																											},
																											{
																												"name": "updated-on",
																												"time": false,
																												"type": "date",
																												"label": "Updated On",
																												"required": false
																											},
																											{
																												"name": "published-on",
																												"time": false,
																												"type": "date",
																												"label": "Published On",
																												"required": false
																											}
																										]
																					}
															}
],
	"metadata": {
		"instant": false,
			"version": 1,
				"scenario": {
					"roundtrips": 1,
						"maxErrors": 3,
							"autoCommit": false,
								"autoCommitTriggerLast": false,
									"sequential": true,
										"confidential": false,
											"dataloss": false,
												"dlq": true,
													"freshVariables": false
				},
					"designer": {
						"orphans": [
							[
								{
									"id": 86,
									"module": "builtin:BasicRouter",
									"version": 1,
									"mapper": null,
									"metadata": {
										"designer": {
											"x": 3882,
											"y": 471,
											"messages": [
												{
													"category": "link",
													"severity": "warning",
													"message": "The module is not connected to the data flow."
												}
											]
										}
									},
									"routes": [
										{
											"flow": [
												{
													"id": 88,
													"module": "instagram-business:CreatePostPhoto",
													"version": 1,
													"metadata": {
														"designer": {
															"x": 3900,
															"y": 0,
															"messages": [
																{
																	"category": "setup",
																	"severity": "error",
																	"message": "Value must not be empty."
																}
															]
														}
													}
												}
											]
										},
										{
											"flow": [
												{
													"id": 90,
													"module": "linkedin:CreateCompanyImagePost",
													"version": 2,
													"metadata": {
														"designer": {
															"x": 4285,
															"y": 111,
															"messages": [
																{
																	"category": "setup",
																	"severity": "error",
																	"message": "Value must not be empty."
																},
																{
																	"category": "setup",
																	"severity": "error",
																	"message": "Value must not be empty."
																},
																{
																	"category": "setup",
																	"severity": "error",
																	"message": "Value must not be empty."
																}
															]
														}
													}
												}
											]
										},
										{
											"flow": [
												{
													"id": 91,
													"module": "twitter:createTweet",
													"version": 5,
													"metadata": {
														"designer": {
															"x": 4503,
															"y": 509,
															"messages": [
																{
																	"category": "setup",
																	"severity": "error",
																	"message": "Value must not be empty."
																}
															]
														}
													}
												}
											]
										},
										{
											"flow": [
												{
													"id": 87,
													"module": "facebook-pages:CreatePost",
													"version": 6,
													"parameters": {
														"__IMTCONN__": 531089
													},
													"mapper": {
														"link": "https://www.premiumdesignpartners.com/blog/{{51.slug}}",
														"message": "Check out our most recent blog post if your bored and need a read this week! {{85.`Headline S`}}. Heres a quick rundown {{51.`post-summary`}}\n\n",
														"page_id": "108617834068032"
													},
													"metadata": {
														"designer": {
															"x": 3900,
															"y": 900,
															"messages": [
																{
																	"category": "reference",
																	"severity": "warning",
																	"message": "Referenced module 'Webflow - Create an Item' [51] is not accessible."
																},
																{
																	"category": "reference",
																	"severity": "warning",
																	"message": "Referenced module 'Airtable - Get a Record' [85] is not accessible."
																}
															]
														},
														"restore": {
															"expect": {
																"page_id": {
																	"mode": "chose",
																	"label": "Premium Design Partners (Hamilton)"
																}
															},
															"parameters": {
																"__IMTCONN__": {
																	"data": {
																		"scoped": "true",
																		"connection": "facebook"
																	},
																	"label": "fb 2.0 (Corey Shirey)"
																}
															}
														},
														"parameters": [
															{
																"name": "__IMTCONN__",
																"type": "account:facebook",
																"label": "Connection",
																"required": true
															}
														],
														"expect": [
															{
																"name": "page_id",
																"type": "select",
																"label": "Page",
																"required": true
															},
															{
																"name": "message",
																"type": "text",
																"label": "Message"
															},
															{
																"name": "link",
																"type": "url",
																"label": "Link"
															},
															{
																"name": "name",
																"type": "text",
																"label": "Link name"
															},
															{
																"name": "description",
																"type": "text",
																"label": "Link description"
															},
															{
																"name": "date",
																"type": "date",
																"label": "Date"
															}
														]
													}
												}
											]
										}
									]
								}
							]
						],
							"notes": [
								{
									"id": 18,
									"text": "",
									"filter": false
								}
							]
					},
						"zone": "us1.make.com"
	}
}