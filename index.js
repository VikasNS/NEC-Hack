const {
    dialogflow,
    BasicCard,
    BrowseCarousel,
    BrowseCarouselItem,
    Button,
    Permission,
    Carousel,
    Image,
    LinkOutSuggestion,
    List,
    MediaObject,
    Suggestions,
    SimpleResponse,
    Table
} = require('actions-on-google');
var admin = require('firebase-admin');
var queryText = "";
var fire;
const app = dialogflow({debug: true});
const functions = require('firebase-functions');
var admin = require('firebase-admin');
var fire;
fire = admin.initializeApp(
       {
        //Removed
        });
var db=admin.database();

function getDeepLinkToNavigate(X1,X2,B1,B2,X3,X4,M1,M2) {
	return `https://travelsync.ml/?link=https://travelsync.ml/tracker?x1lat%3D${X1[0]}%26x1long%3D${X1[1]}%26x2lat%3D${X2[0]}%26x2long%3D${X2[1]}%26b1lat%3D${B1[0]}%26b1long%3D${B1[1]}%26b2lat%3D${B2[0]}%26b2long%3D${B2[1]}%26x3lat%3D${X3[0]}%26x3long%3d${X3[1]}%26x4lat%3D${X4[0]}%26x4long%3D${X4[1]}%26m1%3D${M1}%26m2%3D${M2}&apn=nec.hack.ui&afl=https://travelsync.ml/tracker`
}

var obj = {
	'D1' : {
		X1: [28.484401, 77.075189],
		X2: [28.485546, 77.07631],
		B1: [28.486122, 77.076839],
		B2: [28.5069, 77.083136],
		X3: [28.506003, 77.083326],
		X4: [28.505474, 77.082921],
		DestName:"Udhyog Vihar Phase 5",
		"BusCost" : 50,
		BusTime : 32,
		"WalkTime" : 7,
		"CycleTime" : 5,
		"BikeTime" : 2,
		"WalkTime2" : 8,
		"CycleTime2" : 5,
		"BikeTime2" : 3,
		"CycleCost" : 20,
		"BikeCost" : 30,
		"CycleCost2" : 5,
		"BikeCost2" : 20,
		"B1Arrival" : "10.40 AM",
		"B1Crowd" : "20%",
		"B2Crowd" : "90%",
		"B2Arrival" : "10.50 AM",
		"B1Number" : "350 K",
		"B2Number" : "377 F"
	},'D2' : {
		X1: [28.484401, 77.075189],
		X2: [28.485546, 77.07631],
		B1: [28.486122, 77.076839],
		B2: [28.522524, 77.098555],
		X3: [28.523094, 77.096031],
		X4: [28.526365, 77.094121],
		DestName:"Noida near 95 fabrics",
		"BusCost" : 60,
		"WalkTime" : 12,
		"CycleTime" : 9,
		"BikeTime" : 6,
		"WalkTime2" : 7,
		"CycleTime2" : 4,
		"BikeTime2" : 2,
		"CycleCost" : 10,
		"BikeCost" : 30,
		"CycleCost2" : 25,
		"BikeCost2" : 35,
		"B1Arrival" : "10.30 AM",
		"B1Crowd" : "31%",
		"B2Crowd" : "59%",
		"B2Arrival" : "10.40 AM",
		"B1Number" : "401 B",
		"B2Number" : "495 D"
	},
	D3: {
    X1: [28.484401, 77.075189],
    X2: [28.485546, 77.07631],
    B1: [28.485957, 77.077433],
    B2: [28.465694, 77.062055],
    X3: [28.465086, 77.06286],
	X4: [28.464874, 77.064019],
	DestName:"Sector 29 Gurugram",
    BusCost: 20,
	BusTime : 13,
    WalkTime: 6,
    CycleTime: 3,
    BikeTime: 2,
    WalkTime2: 5,
    CycleTime2: 3,
    BikeTime2: 2,
    CycleCost: 5,
    BikeCost: 10,
    CycleCost2: 15,
    BikeCost2: 30,
    B1Arrival: "10.20 AM",
    B1Crowd: "30%",
    B2Crowd: "5%",
    B2Arrival: "10.30 AM",
    B1Number: "789 C",
    B2Number: "345 D"
  },
	D4: {
    X1: [28.484401, 77.075189],
    X2: [28.485546, 77.07631],
    B1: [28.485957, 77.077433],
    B2: [28.478196, 77.071388],
    X3: [28.478463, 77.071966],
	X4: [28.478972, 77.071533],
	DestName:"Heritage City Sector 25",
    BusCost: 75,
	BusTime : 19,
    WalkTime: 10,
    CycleTime: 7,
    BikeTime: 6,
    WalkTime2: 7,
    CycleTime2: 6,
    BikeTime2: 6,
    CycleCost: 10,
    BikeCost: 30,
    CycleCost2: 15,
    BikeCost2: 25,
    B1Arrival: "10.10 AM",
    B1Crowd: "30%",
    B2Crowd: "5%",
    B2Arrival: "10.20 AM",
    B1Number: "300 A",
    B2Number: "385 B"
  },
  D5: {
    X1: [28.484401, 77.075189],
    X2: [28.485546, 77.07631],
    B1: [28.485957, 77.077433],
    B2: [28.517856, 77.080182],
    X3: [28.518122, 77.079738],
	X4: [28.519439, 77.079223],
	DestName:"Kapas Hera Extension",
    BusCost: 70,
	BusTime : 30,
    WalkTime: 14,
    CycleTime: 7,
    BikeTime: 5,
    WalkTime2: 9,
    CycleTime2: 15,
    BikeTime2: 3,
    CycleCost: 22,
    BikeCost: 33,
    CycleCost2: 25,
    BikeCost2: 30,
    B1Arrival: "10.10 AM",
    B1Crowd: "30%",
    B2Crowd: "5%",
    B2Arrival: "10.20 AM",
    B1Number: "500 C",
    B2Number: "412 B"
  }

};


app.intent('मेरे अंक',(conv,{Redeem}) => {
    gotRedeem = Redeem.length > 0;
	if(!gotRedeem) {
		conv.ask("यहां आपक अंक का विवरण है. आप इसे कैसे भुनाना चाहते हैं?.  स्वास्थ्य कूपन , बिल भुगतान कूप या पेड़ लगाओ");
		conv.ask(new BrowseCarousel({
			items: [
			  new BrowseCarouselItem({
				title: 'कैलोरी',
				url: 'https://google.com',
				description: '500 अंक',
				image: new Image({
				  url: 'https://www.pngkey.com/png/full/297-2972804_toko-zippo-nyenius-zippo-flame-png.png',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			  new BrowseCarouselItem({
				title: 'सिक्के',
				url: 'https://google.com',
				description: '400 अंक',
				image: new Image({
				  url: 'https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			  new BrowseCarouselItem({
				title: 'पत्ती',
				url: 'https://google.com',
				description: '40 अंक',
				image: new Image({
				  url: 'https://previews.123rf.com/images/nad1992/nad19921505/nad1992150500013/39922729-flat-leaves-icons-vector-illustration-leaf-icon.jpg',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			],
		  }));
		conv.ask(new Suggestions([" स्वास्थ्य कूपन","बिल भुगतान","पेड़ लगाओ"]));
	}else {
		conv.ask("यहाँ आपका PayTM Coupan है");
		conv.ask("AX120911BX23423");
	}
    
});

app.intent('ट्रेवल',(conv,{Destination,Mode,Confirm}) => {
	
	var gotDestination = Destination.length > 0;
	var gotMode = Mode.length > 0;
	var gotConfirm = Confirm.length > 0;
	
	if(!gotDestination && !gotMode && !gotConfirm) {
		conv.ask("हाय विकास, आप कहाँ जाना चाहते हैं?");
	} else if(gotDestination && !gotMode && !gotConfirm) {
		conv.ask("आप किस मोड में यात्रा करना चाहते हैं?");
		conv.ask(new BrowseCarousel({
			items: [
			  new BrowseCarouselItem({
				title: 'स्वस्थ मोड',
				url: 'https://google.com',
				description: '40 मिनट ,  20 रु',
				image: new Image({
				  url: 'https://png.pngtree.com/svg/20170309/548f9c3c9c.png',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			  new BrowseCarouselItem({
				title: 'इको फ्रेंडली',
				url: 'https://google.com',
				description: '35 मिनट ,  28रु',
				image: new Image({
				  url: 'https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/3/2/3226.3-eco-friendly-bulb-icon-iconbunny.jpg',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			  new BrowseCarouselItem({
				title: 'स्पीड मोड',
				url: 'https://google.com',
				description: '20 मिनट ,  35रु',
				image: new Image({
				  url: 'https://icon-library.net/images/quick-icon/quick-icon-12.jpg',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			],
		  }));
		conv.ask(new Suggestions(['स्वस्थ मोड', 'इको फ्रेंडली','स्पीड मोड']));  
	} else if(gotDestination && gotMode && !gotConfirm) {
		conv.ask("कृपया अपनी बुकिंग की पुष्टि करें?");
		//conv.ask(new Suggestions(["हाँ","नहीं"])):
	} else if(gotDestination && gotMode && gotConfirm) {
		conv.ask("यहां आपका यात्रा सारांश है. दिशा-निर्देश प्राप्त करने के लिए कार्ड पर क्लिक करें");
		conv.ask(new BrowseCarousel({
			items: [
			  new BrowseCarouselItem({
				title: 'टहल लो',
				url: 'https://www.google.com/maps?saddr=My+Location&daddr=20.9615,67.607',
				description: 'रामेश्वरी बस स्टॉप तक पैदल चलें, 10 मिनट',
				image: new Image({
				  url: 'https://img.icons8.com/bubbles/2x/walking.png',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			  new BrowseCarouselItem({
				title: 'बस',
				url: 'https://www.google.com/maps?saddr=My+Location&daddr=20.9615,67.607',
				description: 'बस नंबर: 401K, 10 मिनट में वहाँ जाएगा ',
				image: new Image({
				  url: 'https://www.pinclipart.com/picdir/middle/119-1199780_bus-graphic-blue-bus-icon-png-clipart.png',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			  new BrowseCarouselItem({
				title: 'टहल लो',
				url: 'https://www.google.com/maps?saddr=My+Location&daddr=20.9615,67.607',
				description: '10 मिनट अपने गंतव्य के लिए चलें',
				image: new Image({
				  url: 'https://img.icons8.com/bubbles/2x/walking.png',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			],
		  }));
	}
    
});




app.intent('Default Welcome Intent',(conv) => {
	conv.ask("Hi Vikas, How can I help you?");
	conv.ask(new Suggestions(["Get a Bus","Redeem Points"]));
});

app.intent('Default Fallback Intent',(conv) => {
    conv.ask("माफ़ कीजिये, हमें समझ नहीं आया कि आपने अभी क्या कहा. हम अपने एनएलपी मॉडल को प्रशिक्षित करने के लिए इसका उपयोग करेंगे");
    
});


app.intent('Travel By Bus',(conv,{Destination,BusNo,FirstMileType,LastMileType,Confirm,Complete,Feedback}) => {
	var gotDestination = Destination.length > 0;
	var gotBusNo = BusNo.length > 0;
	var gotFirstMileType = FirstMileType.length > 0;
	var gotLastMileType = LastMileType.length > 0;
	var gotConfirm = Confirm.length > 0;
	var gotComplete = Complete.length > 0;
	var gotFeedback = Feedback.length > 0;
	
	if(!gotDestination && !gotBusNo && !gotFirstMileType && !gotLastMileType && !gotConfirm && !gotComplete && !gotFeedback) {
		conv.ask("Where do you want to go?");
	} else if(gotDestination && !gotBusNo && !gotFirstMileType && !gotLastMileType && !gotConfirm && !gotComplete && !gotFeedback) {
		conv.ask("Here are the busses to your Destination from your current location. Please select the desired bus");
		conv.ask(new BrowseCarousel({
			items: [
			  new BrowseCarouselItem({
				title: obj[Destination].B1Number,
				url: 'https://google.com',
				description: "Arrival Time "+obj[Destination].B1Arrival+". Cost : "+obj[Destination].BusCost+" RS. Crowd : "+obj[Destination].B1Crowd,
				image: new Image({
				  url: 'https://www.shareicon.net/data/128x128/2017/03/29/881781_school_512x512.png',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			  new BrowseCarouselItem({
				title: obj[Destination].B2Number,
				url: 'https://google.com',
				description:  "Arrival Time "+obj[Destination].B2Arrival+". Cost : "+obj[Destination].BusCost+" RS. Crowd : "+obj[Destination].B2Crowd,
				image: new Image({
				  url: 'https://www.shareicon.net/data/128x128/2017/03/29/881781_school_512x512.png',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			],
		  }));
		  conv.ask(new Suggestions([obj[Destination].B1Number,obj[Destination].B2Number]));
	} else if(gotDestination && gotBusNo && !gotFirstMileType && !gotLastMileType && !gotConfirm && !gotComplete && !gotFeedback) {
		conv.ask("Please select the first mile transport.");
		conv.ask(new BrowseCarousel({
			items: [
			  new BrowseCarouselItem({
				title: "Walk",
				url: 'https://google.com',
				description: "Time "+obj[Destination].WalkTime+". Cost : "+ 0 +" RS",
				image: new Image({
				  url: 'https://apprecs.org/gp/images/app-icons/300/03/com.noom.walk.jpg',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			  new BrowseCarouselItem({
				title: "Bicycle",
				url: 'https://google.com',
				description:  "Time "+obj[Destination].CycleTime+". Cost : "+obj[Destination].CycleCost+" RS",
				image: new Image({
				  url: 'https://www.wpclipart.com/transportation/bicycle/cycles.png',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			  new BrowseCarouselItem({
				title: "Bike",
				url: 'https://google.com',
				description:  "Time "+obj[Destination].BikeTime+". Cost : "+obj[Destination].BikeCost+" RS",
				image: new Image({
				  url: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/motor_scooter.png',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			],
		  }));
		conv.ask(new Suggestions(["Walk","Bicycle","Bike"]));
	} else if(gotDestination && gotBusNo && gotFirstMileType && !gotLastMileType && !gotConfirm && !gotComplete && !gotFeedback) {
		conv.ask("Please select the last mile transport.");
		conv.ask(new BrowseCarousel({
			items: [
			  new BrowseCarouselItem({
				title: "Walk",
				url: 'https://google.com',
				description: "Time "+obj[Destination].WalkTime2+". Cost : "+ 0 +" RS",
				image: new Image({
				  url: 'https://apprecs.org/gp/images/app-icons/300/03/com.noom.walk.jpg',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			  new BrowseCarouselItem({
				title: "Bicycle",
				url: 'https://google.com',
				description:  "Time "+obj[Destination].CycleTime2+". Cost : "+obj[Destination].CycleCost2+" RS",
				image: new Image({
				  url: 'https://www.wpclipart.com/transportation/bicycle/cycles.png',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			  new BrowseCarouselItem({
				title: "Bike",
				url: 'https://google.com',
				description:  "Time "+obj[Destination].BikeTime2+". Cost : "+obj[Destination].BikeCost2+" RS",
				image: new Image({
				  url: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/motor_scooter.png',
				  alt: 'Image alternate text',
				}),
				footer: '',
			  }),
			],
		  }));
		conv.ask(new Suggestions(["Walk","Bicycle","Bike"]));		
	} else if(gotDestination && gotBusNo && gotFirstMileType && gotLastMileType && !gotConfirm && !gotComplete && !gotFeedback) {
		var BusTime = obj[Destination].BusTime;
		var BusCost = obj[Destination].BusCost;
		var FirstMileTime;
		var LastMileTime;
		var FirstMileCost;
		var LastMileCost;
		
		if(FirstMileType == "Walk") {
			FirstMileTime = obj[Destination].WalkTime;
			FirstMileCost = 0;
		}else if(FirstMileType == "Bicycle") {
			FirstMileTime = obj[Destination].CycleTime;
			FirstMileCost = obj[Destination].CycleCost;
		}else if(FirstMileType == "Bike") {
			FirstMileTime = obj[Destination].BikeTime;
			FirstMileCost = obj[Destination].BikeCost;
		}
		
		if(LastMileType == "Walk") {
			LastMileTime = obj[Destination].WalkTime2;
			LastMileCost = 0;
		}else if(LastMileType == "Bicycle") {
			LastMileTime = obj[Destination].CycleTime2;
			LastMileCost = obj[Destination].CycleCost2;
		}else if(LastMileType == "Bike") {
			LastMileTime = obj[Destination].BikeTime2;
			LastMileCost = obj[Destination].BikeCost2;			
		}
		var totalCost = FirstMileCost + BusCost + LastMileCost;
		var totalTime = FirstMileTime + BusTime + LastMileTime;
		
		
		conv.ask("Please confirm your ride.");
		conv.ask(new BasicCard({
                  text: "",  
                  subtitle: totalTime +" Minutes",
                  title: totalCost + "Rs",
                  buttons: new Button({
                    title: 'Make Payment',
                    url: `https://hotelninja.tk/?link=https://hotelninja.tk/bCK1?price%3D${totalCost}%26message%3DHotelBookingPayment%26upiID%3Dvrkarthik@ybl&apn=com.example.dum&afl=https://hotelninja.tk/bCK1`,
                  }),
                  image: new Image({
                    url: 'https://miro.medium.com/max/368/1*uo-bbMxLvnii6Bi7UijM-A.png',
                    alt: 'Image alternate text',
                  }),
                  display: 'CROPPED',
                }));
		conv.ask(new Suggestions(["Yes","No"]));
	} else if(gotDestination && gotBusNo && gotFirstMileType && gotLastMileType && gotConfirm && !gotComplete && !gotFeedback) {
		var M1;
		var M2;
		if(FirstMileType == "Walk") {
			M1 = 0;
		}else if(FirstMileType == "Bicycle") {
			M1 = 1;
		}else if(FirstMileType == "Bike") {
			M1 = 2;
		}
		
		if(LastMileType == "Walk") {
			M2 = 0;
		}else if(LastMileType == "Bicycle") {
			M2 = 1;
		}else if(LastMileType == "Bike") {
			M2 = 2;	
		}
		
		
		if(Confirm == "Yes") {
			conv.ask("Complete your ride, get Rewards and see your Impact.");
			conv.ask(new BasicCard({
                  text: "Click on Navigate Button to open Navigation",  
                  subtitle: "Get Realtime Location and ETA of buss",
                  title: "Travel Now",
                  buttons: new Button({
                    title: 'Navigate',
                    url: getDeepLinkToNavigate(obj[Destination].X1,obj[Destination].X2,obj[Destination].B1,obj[Destination].B2,obj[Destination].X3,obj[Destination].X4,M1,M2),
                  }),
                  image: new Image({
                    url: 'http://cdn.onlinewebfonts.com/svg/img_467088.png',
                    alt: 'Image alternate text',
                  }),
                  display: 'CROPPED',
                }));
		conv.ask(new Suggestions(["Complete"]));
		} else {
			conv.close("No problem, your booking was not placed");
		}
	} else if(gotDestination && gotBusNo && gotFirstMileType && gotLastMileType && gotConfirm && gotComplete && !gotFeedback) {
		return db.ref('Points').once("value").then((snapshot)=>{
			var caloriePoints = parseInt(snapshot.child("CaloriePoints").val());
			var coinsPoints = parseInt(snapshot.child("Coins").val());
			var leafPoints = parseInt(snapshot.child("LeafPoints").val());
			var carbonDiOxide = 300;
			var traffic = 0;
			if(FirstMileType == "Walk") {
				caloriePoints +=3;
				coinsPoints += 3;
				leafPoints += 3;
				traffic+=0.0732;
				
			}else if(FirstMileType == "Bicycle") {
				caloriePoints +=6;
				coinsPoints += 2;
				leafPoints += 3;
				traffic+=0.0583;
			}else if(FirstMileType == "Bike") {
				caloriePoints +=1;
				coinsPoints += 1;
				leafPoints += 1;
				carbonDiOxide-=150;
				traffic+=0.0383;
			}
			
			if(LastMileType == "Walk") {
				caloriePoints +=3;
				coinsPoints += 3;
				leafPoints += 3;
				traffic+=0.0732;
			}else if(LastMileType == "Bicycle") {
				caloriePoints +=6;
				coinsPoints += 2;
				leafPoints += 3;
				traffic+=0.0583;
			}else if(LastMileType == "Bike") {
				caloriePoints +=1;	
				coinsPoints += 1;
				leafPoints += 1;
				carbonDiOxide-=150;
				traffic+=0.0383;
			}
			
			return db.ref('Points').set({
				CaloriePoints : caloriePoints,
				Coins : coinsPoints,
				LeafPoints : leafPoints
			}).then(()=>{
					conv.ask("You helped reduce Corbon DiOxide emission by " + carbonDiOxide + " grams and traffic by "+ traffic +"%. Thanks for your contribution. Here is your updated points.");
					conv.ask(new BrowseCarousel({
						items: [
						  new BrowseCarouselItem({
							title: 'Calorie Points',
							url: 'https://google.com',
							description: caloriePoints+' Points',
							image: new Image({
							  url: 'https://png.pngtree.com/svg/20150526/6d4867b49c.png',
							  alt: 'Image alternate text',
							}),
							footer: '',
						  }),
						  new BrowseCarouselItem({
							title: 'Coins',
							url: 'https://google.com',
							description: coinsPoints+' Points',
							image: new Image({
							  url: 'https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png',
							  alt: 'Image alternate text',
							}),
							footer: '',
						  }),
						  new BrowseCarouselItem({
							title: 'Leaf',
							url: 'https://google.com',
							description: leafPoints+' Points',
							image: new Image({
							  url: 'https://previews.123rf.com/images/nad1992/nad19921505/nad1992150500013/39922729-flat-leaves-icons-vector-illustration-leaf-icon.jpg',
							  alt: 'Image alternate text',
							}),
							footer: '',
						  }),
						],
					  }));
					return conv.ask("Please give feedback on your ride.");
						});
			
		});

	} else if(gotDestination && gotBusNo && gotFirstMileType && gotLastMileType && gotConfirm && gotComplete && gotFeedback) {
		conv.ask("Thankyou very much, your feedback has been recorded and will be used to improve our service.");
		return db.ref('Feedback').set(Feedback);
	}
	
});

app.intent('Points',(conv,{Redeem}) => {
	var gotRedeem = Redeem.length > 0;
	if(!gotRedeem) {
		conv.ask("Here are your points details.Which coupan do you want to redeem your points for?");
		return db.ref('Points').once("value").then((snapshot)=>{
			var caloriePoints = parseInt(snapshot.child("CaloriePoints").val());
			var coinsPoints = parseInt(snapshot.child("Coins").val());
			var leafPoints = parseInt(snapshot.child("LeafPoints").val());
			
			conv.ask(new BrowseCarousel({
						items: [
						  new BrowseCarouselItem({
							title: 'Calorie Points',
							url: 'https://google.com',
							description: caloriePoints+' Points',
							image: new Image({
							  url: 'https://png.pngtree.com/svg/20150526/6d4867b49c.png',
							  alt: 'Image alternate text',
							}),
							footer: '',
						  }),
						  new BrowseCarouselItem({
							title: 'Coins',
							url: 'https://google.com',
							description: coinsPoints+' Points',
							image: new Image({
							  url: 'https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png',
							  alt: 'Image alternate text',
							}),
							footer: '',
						  }),
						  new BrowseCarouselItem({
							title: 'Leaf',
							url: 'https://google.com',
							description: leafPoints+' Points',
							image: new Image({
							  url: 'https://previews.123rf.com/images/nad1992/nad19921505/nad1992150500013/39922729-flat-leaves-icons-vector-illustration-leaf-icon.jpg',
							  alt: 'Image alternate text',
							}),
							footer: '',
						  }),
						],
					  }));
			
			return conv.ask(new Suggestions(["Health Coupon","Bill Payment","Plant Tree"]));
			
			
		});
		
	} else {
			if(Redeem == "Health Coupon") {
				conv.ask("Here is your health coupon");
				conv.ask(new BasicCard({
                  text: "",  
                  subtitle: "Valid for 30 days at any Panecia Hospital",
                  title: "XY12TA012345123",
                  buttons: new Button({
                    title: 'Reedeem',
                    url: `http://www.phc.in/`,
                  }),
                  image: new Image({
                    url: 'https://www.hindustanwellness.com/images/Webiste-Icon/1a.png',
                    alt: 'Image alternate text',
                  }),
                  display: 'CROPPED',
                }));
			} else if(Redeem == "Bill Payment" ) {
				conv.ask("Here is your electricity bill payment coupan");
				conv.ask(new BasicCard({
                  text: "",  
                  subtitle: "Valid for 30 days at PayTM",
                  title: "EB2019RBVNA194",
                  buttons: new Button({
                    title: 'Reedeem',
                    url: `https://paytm.com/electricity-bill-payment/karnataka/bangalore-electricity-supply-company-ltd-bescom`,
                  }),
                  image: new Image({
                    url: 'https://smedia2.intoday.in/aajtak/images/stories/022015/bescom-1_650_021415033603.jpg',
                    alt: 'Image alternate text',
                  }),
                  display: 'CROPPED',
                }));
			} else if(Redeem == "Plant Tree") {
				conv.ask("Thankyou, A tree willl be planted in a week under a NGO");
				conv.ask(new BasicCard({
                  text: "",  
                  subtitle: "",
                  title: "Tree Planting by NGO",
                  buttons: new Button({
                    title: 'Check status',
                    url: `https://sankalptaru.org/`,
                  }),
                  image: new Image({
                    url: 'https://www.pngkey.com/png/detail/73-731114_potted-plants-icon.png',
                    alt: 'Image alternate text',
                  }),
                  display: 'CROPPED',
                }));
			}
	}
    
});


exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
