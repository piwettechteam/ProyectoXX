
//FireBase  --- CHANGE THEM WITH YOUR OWN FIREBASE DB
exports.firebaseConfig = {
  apiKey: "AIzaSyBS_JSLOSCmoEDDduxTj_Od4ia6kudWuWU",
    authDomain: "afiliados-d04fa.firebaseapp.com",
    databaseURL: "https://afiliados-d04fa.firebaseio.com",
    projectId: "afiliados-d04fa",
    storageBucket: "afiliados-d04fa.appspot.com",
    messagingSenderId: "709226577602"
};


exports.paypal={
  acceptPayments:true, // Set this to false if you don't want to accept paypal payments
  sandBoxMode:true,
  clientID:"Abd_tXWQ2vJUeALUnAhGUlvbO_djJQXE5koZ-xm7ZGd209fnWHlv9A1vXRipgP-rNsb8HjQqbEHFEJMP",
  secretKey:"EHshrNGzZJTYcIgSh5EQQTI8KgotiGXTzgNykk0g05DwYIo89VL2F1zr-HhIOAoHBt2bDHHZXZTGBTfn",
  return_url:"https://afiliados.com/thanksyou", //Replace it with your own webpage thank-you site
  cancel_url:"https://afiliados.com/cancel", //Replace it with your own webpage cancel url
  includeShippingInfo:true,
  currency:"$",
  state:"CA",//Checkc PayPalPayment.js in components to see how it is used, If it is not static, allow user to enter it in submit screen
  country_code:"US", //Country code must be 2-character ISO 3166-1 value (upper case)
  postal_code: "95131", //Required postal code - If it is not static, allow user to enter it in submit screen
  city: "San Jose", //Required city - If it is not static, allow user to enter it in submit screen
}

exports.loginSetup={
  welcomeText:"Welcome to Afiliados App",
  facebookLogin:true, //Do we have Facebook login
  facebookID:"178511486175063",
  googleLogin:true, //Do we have Google login
  googleIOSid:"148773293873-o35mgo7q5ceea45v4fhd9uqivgtjlh4j.apps.googleusercontent.com",
  googleAndroidId:"419235345147-5ld8h97mhnk6qq257djds3bu1l9acfuu.apps.googleusercontent.com"
}


exports.sendEmailWhenOrderPlacer=true;

//Choose which style for profile sceen you want to use 
//1. For style 1 enter -> ProfileOption1
//2. For style 2 enter -> ProfileOption2 
exports.profileScreensInSubMenu=true; //Are our profiles screen under some menu
exports.profileScreen='ProfileOption1',

//ADS IDs
// -------- Do you want ads to be shown - Controller from firebase ------ //
exports.showBannerAds = false;
exports.showinterstitialAds = false;

// -------- Enter your adMob ids here - Controller from firebase  ------- //
exports.bannerID = "";
exports.interstitialID = "";
exports.isTesting=true; //On ios device ads show only if you cpecifically set that this is test mode


//The Sendgrid KEY   --- CHANGE THEM WITH YOUR OWN SENDGRID
exports.SENDGRID_API_KEY="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";

//Orders are sent to --- CHANGE IT WITH YOUR OWN EMAIL
exports.sendToEmail="hellopiwet@gmail.com" //YOU CAN USE SMOOCH.IO email here

//Do you want BarCode Scanner to be shown
exports.showBCScanner = false

//Used for the Firebase RunTime setup
exports.config = null

//Set this to true if you want to preview the demo apps
exports.isPreview=false;
