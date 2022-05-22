/*
*The function argument is a 10 digit string of a Zimbabwean landline (Telone) telephone number.
*The area of the telephone number is returned or NULL if the location cannot be found
*/
function locateCaller(phoneNumber){
	const data =
	[
	["024",[
					["2", "213", "215", "214", "2150", "21"],
					["Harare", "Ruwa", "Norton", "Arcturus", "Beatrice", "Chitungwiza"]
			]
			],

	["027",[
					["203", "2317", "205", "2046", "204"],
					["Birchenough Bridge", "Checheche", "Chimanimani", "Chipangayi", "Chipinge"]
			]
			],

	["020",[
					["20", "21", "24", "200"],
					["Mutare", "Dangamvura", "Penhalonga", "Odzi"]
			]
			],

	["026",[
					["209", "208", "2098"],
					["Hauna", "Juliasdale", "Nyanga"]
			]
			],

	["025",[
					["206", "2055", "207", "205"],
					["Murambinda", "Nyazura", "Headlands", "Rusape"]
			]
			],

	["066",[
					["210", "210", "219", "218", "219", "219", "212", "216", "217", "2137"],
					["Bindura", "Centenary", "Concession", "Glendale", "Mazowe", "Christon Bank", "Mount Darwin", "Mvurwi", "Guruve", "Shamva"]
			]
			],
	["067",[
					["2192", "2198", "2196", "2136", "21", "215", "214", "214"],
					["Darwendale", "Raffingora", "Mutorashanga", "Trelawney", "Chinhoyi", "Murombedzi", "Mhangura", "Banket"]
			]
			],
	["061",[
					["214", "215", "2141", "2140"],
					["Kariba", "Karoi", "Makuti", "Chirundu"]
			]
			],
	["068",[
					["21", "215", "2189", "216", "21"],
					["kadoma", "Chegutu", "Chakari", "Sanyati", "Selous"]
			]
			],
	["065",[
					["2080", "23", "208", "21", "213"],
					["Macheke", "Marondera", "Wedza", "Murewa", "Mutoko"]
			]
			],
	["039",[
					["2", "234", "2380", "2366", "2360", "230", "245", "2323", "235", "2308"],
					["Masvingo", "Jerera", "Nyaningwe", "Mataga", "Mberengwa", "Gutu", "Mashava", "Nyika", "Zvishavane", "Chatsworth"]
			]
			],
	["031",[
					["231", "233", "2337", "2370"],
					["Chiredzi", "Triangle", "Rutenga", "Ngundu"]
			]
			],
	["029",[
					["2", "2861", "2821", "2803", "2802", "2800", "2804", "2807", "2809"],
					["Bulawayo", "Tsholotsho", "Nyamandlovu", "Turkmine", "Shangani", "Esigodini", "Figtree", "Kezi", "Matopos"]
			]
			],
	["081",[
					["28", "2847", "2835", "28", "2875", "2856"],
					["Baobab", "Binga", "Dete", "Hwange", "Jotsholo", "Lupane"]
			]
			],
	["083",[
					["28"],
					["Victoria Falls"]
			]
			],
	["085",[
					["23"],
					["Beit Bridge"]
			]
			],
	["089",[
					["280"],
					["Plumtree"]
			]
			],
	["084",[
					["2801", "2835", "28", "2808"],
					["Filabusi", "Collen Bawn", "Gwanda", "West Nicholson"]
			]
			],
	["054",[
					["2", "252", "2532", "2548", "212"],
					["Gweru", "Shurungwi", "Mvuma", "Lalapanzi", "Chivhu"]
			]
			],
	["055",[
					["25", "25", "25", "259", "2558", "2557"],
					["Kwekwe", "Redcliff", "Battle Fields", "Gokwe", "Nkati", "Munyati"]
			]]
			];
			
	if (phoneNumber.length == 10) {
		for (const item of data) {
			
			//Use map to preserve association after array item[1][0] is sorted
			const map = new Map();
			for(i = 0; i < item[1][0].length; i++){
				map.set(item[0] + item[1][0][i], item[1][1][i])
			}
			
			const prefixes = item[1][0].sort((a,b)=> b.length - a.length).map(x => item[0] + x)
			for (i = 0; i < prefixes.length; i++) {
				const prefix = prefixes[i]
				if (phoneNumber.startsWith(prefix)) {
					return map.get(prefix)
				}
			}
		}
	}
	return null;
}

