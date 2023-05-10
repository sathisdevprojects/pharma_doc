const shopName = document.querySelector("#shopName");
const shopDno = document.querySelector("#shopDoorNo");
const shopvill = document.querySelector("#shopVill");
const shopPost = document.querySelector("#shopPost");
const shopTk = document.querySelector("#shopTaluk");
const shopDis = document.querySelector("#shopDistrict");
const shopFloor = document.querySelector("#floor");
const shopDirection = document.querySelector("#direction");
const year = document.querySelector("#year");
const propName = document.querySelector("#proprieterName");
const propDno = document.querySelector("#propDoorNo");
const propVill = document.querySelector("#propVill");
const propPo = document.querySelector("#propPost");
const propTk = document.querySelector("#propTaluk");
const propDist = document.querySelector("#propDistrict");
const propGaurdian = document.querySelector("#propGaurdian");
const hoName = document.querySelector("#hoName");
const hoDno = document.querySelector("#hoDoor");
const hoVill = document.querySelector("#hoVill");
const hoPo = document.querySelector("#hoPost");
const hoTk = document.querySelector("#hoTaluk");
const hoDis = document.querySelector("#hoDistrict");
const shopAdvance = document.querySelector("#advan");
const shopRent = document.querySelector("#rent");
const date = document.querySelector("#fullDate");
const month = document.querySelector("#month");
const pharmName = document.querySelector("#pName");
const pharmGaurd = document.querySelector("#pGaurd");
const pharmDno = document.querySelector("#pDoorNo");
const pharmVill = document.querySelector("#pVill");
const pharmPo = document.querySelector("#pPost");
const pharmTk = document.querySelector("#pTaluk");
const pharmDis = document.querySelector("#pDistrict");
const RegNo = document.querySelector("#regNo");
const pdate = document.querySelector("#dateOnly");
const hoGaurd = document.querySelector("#hoGaurd");
const engmedicalName = document.querySelector("#medName");
const engfloorDirection = document.querySelector("#dFloor");
const engVill = document.querySelector("#medVill");
const engPost = document.querySelector("#medPost");
const engTaluk = document.querySelector("#medTaluk");
const engDistrict = document.querySelector("#medDistrict");
const medPin = document.querySelector("#medPin");
const propMobile = document.querySelector("#propMobile");
const epName = document.querySelector("#ownName");
const epVill = document.querySelector("#ownVill");
const epPost = document.querySelector("#ownPost");
const epTaluk = document.querySelector("#ownTaluk");
const epDistrict = document.querySelector("#ownDistrict");
const epPin = document.querySelector("#ownPin");
const ePharmaName = document.querySelector("#pharmaName");
const expiary = document.querySelector("#expi");
const acMake = document.querySelector("#acMake");
const acSno = document.querySelector("#acSno");
const fridgeMake = document.querySelector("#fridgeMake");
const fridgeSno = document.querySelector("#fridgeSno");
const pgard = document.querySelector("#pGaurdian");
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  document.querySelector("#rentAggTitle").innerText = "வாடகை ஒப்பந்த பத்திரம்";
  document.querySelector("#rent1").innerText =
    year.value +
    "-ம் ஆண்டு " +
    month.value +
    " மாதம் " +
    pdate.value +
    " - ஆம் தேதியில் " +
    hoDis.value +
    " (மாவட்டம்), " +
    hoTk.value +
    " (வட்டம்)," +
    hoPo.value +
    " (அஞ்சல்) " +
    hoVill.value +
    " , கதவு எண் " +
    hoDno.value +
    "   என்ற முகவரியில்  வசிக்கும் " +
    hoGaurd.value +
    "  " +
    hoName.value +
    " -1,";

  document.querySelector("#rent2").innerText =
    propDist.value +
    "  மாவட்டம், " +
    propTk.value +
    " (வட்டம்), " +
    propPo.value +
    " (அஞ்சல்), " +
    propVill.value +
    " , கதவு எண் " +
    propDno.value +
    " என்ற முகவரியில்  வசிக்கும் " +
    propGaurdian.value +
    " மகன் " +
    propName.value +
    " -2";
  document.querySelector("#rent3").innerText =
    " ஆகிய  நாம் இருவரும் எழுதி கொண்ட  வாடகை ஒப்பந்த  பத்திரம் என்னவென்றால் :-";
  document.querySelector("#rent4").innerText =
    " நம்மில் 1 லக்கமிட்டவருக்கு பாத்தியப்பட்ட  கடையை நம்மில்  2  லக்கமிட்டவர் " +
    shopName.value +
    "என்ற பெயரில் மருந்து கடை வைத்து  நடத்துவதற்கு அக்கடைக்கு மாத   வாடகை ரூ." +
    shopRent.value +
    "/- அட்வான்ஸ் தொகை  ரூ." +
    shopAdvance.value +
    " கொடுத்து 1 லக்கமிட்டவரும்  சம்மதித்து இன்றைய தேதியிலிருந்து கடையை 1 லக்கமிட்டவர் 2 லக்கமிட்டவரின் சுவாதினத்தில்  விட்டு விட்டார்.";
  document.querySelector("#rent5").innerText =
    " இன்று முதல்  5 (ஐந்து) வருட காலத்திற்கு  2-ல் லக்கமிட்டவர் கடையில் வாடகைக்கு  இருந்து வரவேண்டியது. மேற்படி வீதம் மாத மாதம் முதல் வாரத்தில் வாடகை தொகையை 1 லக்கமிட்டவரிடம்  தவறாமல் செலுத்த வேண்டியது.";
  document.querySelector("#rent5").innerText =
    "மேற்படி வாய்தா  முடிந்தவுடன்  2 லக்கமிட்டவர் மேற்படி கடையை 1 லக்கமிட்டவரிடம் தற்போது இருந்த நிலையிலேயே  ஒப்படைத்து விட வேண்டியது. வாடகை  சொத்திற்காக மின் கட்டணத்தை நம்மில் 2 லக்கமிட்டவரும்  பஞ்சாயத்து வரியை நம்மில் 1 லக்கமிட்டவரும் செலுத்தி வர வேண்டியது இன்று நம் இருவரில் மன சம்மதியில் எழுதி கொண்ட வாடகை ஒப்பந்த பத்திரம் சரி.";
  document.querySelector("#title2").innerText = " சொத்து விவரம் ";

  document.querySelector("#rent6").innerText =
    shopDis.value +
    " (மாவட்டம்),  " +
    shopTk.value +
    " (வட்டம்), " +
    shopPost.value +
    " (அஞ்சல்) " +
    shopvill.value +
    " , கதவு எண் " +
    shopDno.value +
    " ," +
    shopDirection.value +
    " " +
    shopFloor.value +
    ", இதற்குன்டான  மாமுல் வழிதடம் முழுவதும் கொண்ட கடை மட்டும்.";

  document.querySelector("#legal").innerText =
    " சட்டபூர்வ குடியிருப்பு உறுதிமொழி";
  document.querySelector("#legal1").innerText =
    year.value +
    "-ம்  ஆண்டு " +
    month.value +
    " மாதம் " +
    pdate.value +
    " - ஆம் தேதியில்  " +
    propDist.value +
    "  (மாவட்டம்), " +
    propTk.value +
    " (வட்டம்), " +
    propPo.value +
    "  (அஞ்சல்)," +
    propVill.value +
    " , கதவு எண் " +
    propDno.value +
    " என்ற முகவரியில்  வசிக்கும் " +
    propGaurdian.value +
    " " +
    propName.value +
    "    ஆகிய நான் தர்மபுரி  மண்டலம் மருந்து உரிமம் வழங்கும் அதிகாரியாகிய மருந்து கட்டுப்பாடு உதவி இயக்குனர்,தர்மபுரி அவர்களுக்கு " +
    date.value +
    "  அன்று கொடுத்த சட்டபூர்வ குடியிருப்பவர் உறுதிமொழி.";

  document.querySelector("#legal2").innerText =
    "நான் " +
    shopDis.value +
    " (மாவட்டம்)," +
    shopTk.value +
    " (வட்டம்), " +
    shopPost.value +
    "  (அஞ்சல்), " +
    shopvill.value +
    " ,  கதவு எண் " +
    shopDno.value +
    ", என்ற கட்டிடத்தில் “" +
    shopName.value +
    " ” என்ற பெயரில் சில்லரை மருந்துகடை வைத்து  நடத்துவதற்கு அக்கட்டிடத்தின் உரிைமயாளர் " +
    hoName.value +
    "   அவர்களிடம் சட்டபூர்வமாக வாடகை   ஒப்பந்தம் செய்து  அக்கட்டிடத்தை எனது பொறுப்பில் வைத்து உள்ளேன். மேற்படி  கட்டிட  உரிைமயாளர் அவர்களுக்கும் எனக்கும் உறுதிமொழி பத்திரம்  சம்பந்தமாக எந்தத தகராறும் இல்லை. அப்படி எதேனும் இனி வங்காலங்களில் ஏற்படுமேயானால், அது  உரிமம் வழங்ம் அதிகாரியை  எந்தவிதத்திலும் கட்டுப்படுத்தாது. அப்படி  தகராறு  ஏற்பட்டால் அதை  நானே எனது சொந்த முயற்சியால் தீர்த்து கொள்ளவேன் எனவும், தவறும் பட்சத்தில் கடை  உரிமங்களை ரத்து/ஒப்பைடப்பு செய்வேன் என்றும்  அல்லது  தேவைவயான உரிமங்களை பெற்ற பின்பு கடையை வேறு கட்டிடத்திற்கு மாற்றிக் கொள்வேன்  எனவும்  உறுதி கூறுகிறேன். ";

  /////////

  document.querySelector("#ptitle").innerText =
    " மருந்தாளுனர் மனப்பூர்வ உறுதிமொழி";
  document.querySelector("#p1").innerText =
    year.value +
    " -ம்  ஆண்டு " +
    month.value +
    "  மாதம் " +
    pdate.value +
    " - ஆம் தேதியில் " +
    pharmDis.value +
    " (மாவட்டம்),  " +
    pharmTk.value +
    " (வட்டம்), " +
    pharmPo.value +
    " (அஞ்சல்), " +
    pharmVill.value +
    " , கதவு எண் " +
    pharmDno.value +
    " என்ற முகவரியில்  வசிக்கும் " +
    pharmGaurd.value +
    " " +
    pharmName.value +
    " ஆகிய நான் தர்மபுரி மண்டல உரிமம் வழங்கும் அதிகாரியாகிய  மருந்துகள் கட்டுபாட்டு உதவி இயக்குனர் , தர்மபுரி  அவர்களுக்கு அளித்த உறுதிமொழி.";
  document.querySelector("#p2").innerText =
    "  நான் TAMILNADU PHARMACY COUNCIL -ல் " +
    RegNo.value +
    " எண்ணில்  ஆயுட்கால பதிவு செய்யப்பட்ட தகுதியுடையவராவேன்.";
  document.querySelector("#p3").innerText =
    "நான் " +
    shopDis.value +
    " (மாவட்டம்)," +
    shopTk.value +
    " (வட்டம்), " +
    shopPost.value +
    " (அஞ்சல்)," +
    shopvill.value +
    ",  கதவு எண் " +
    shopDno.value +
    ", என்ற கட்டிடத்தில் “" +
    shopName.value +
    "”-இல் முழுநேர மருந்தாளுனராகவும்/தகுதி வாய்ந்தவராகவும் பணிபுரிந்து  வருகிறேன். இது தவிர வேறு எங்கும் பணி புரியவில்லை.நான் மேற்படி நிறுவனத்தை விட்டு விலகும் போது என்னுடைய விலகலை தங்களிடம் தெரிவிப்பேன் என்றும், வேறு எங்கிலும் மருந்தாளுநராக/தகுதி வாய்ந்தவராக புதிய பனி ஏற்கும் முன்பு இவ்வுறுதிமொழியை ரத்து செய்வேன் என்றும் உறுதி கூறுகிறேன். ";

  /////////
  document.querySelector("#cover1").innerText =
    "உரிமையாளர்:" + propName.value + ",";
  document.querySelector("#cover2").innerText = shopName.value + ",";
  document.querySelector("#cover3").innerText =
    "க.எண்-" +
    shopDno.value +
    ", " +
    shopDirection.value +
    " " +
    shopFloor.value +
    ",";
  document.querySelector("#cover4").innerText = shopvill.value + ",";
  document.querySelector("#cover5").innerText = shopPost.value + " (அஞ்சல்), ";
  document.querySelector("#cover6").innerText =
    "" + shopTk.value + " (வட்டம்),";
  document.querySelector("#cover7").innerText =
    "" + shopDis.value + "(மாவட்டம்), " + medPin.value + ",";
  document.querySelector("#cover8").innerText =
    "CELL NO +91 " + propMobile.value + ".";
  document.querySelector("#cover10").innerText = "இடம்:" + shopvill.value;
  document.querySelector("#cover9").innerText = "நாள்:" + date.value;
  document.querySelector("#cover11").innerText = "(" + propName.value + ")";

  ////////////////////

  document.querySelector("#shopdno").innerText = shopDno.value;
  document.querySelector("#storeName").innerText = engmedicalName.value;
  document.querySelector("#dflor").innerText = engfloorDirection.value;
  document.querySelector("#storeVi").innerText = engVill.value;
  document.querySelector("#storePo").innerText = engPost.value;
  document.querySelector("#storeTk").innerText = engTaluk.value;
  document.querySelector("#storeDis").innerText = engDistrict.value;
  document.querySelector("#storePin").innerText = medPin.value;
  document.querySelector("#cell").innerText = propMobile.value;
  document.querySelector("#moName").innerText = epName.value;
  document.querySelector("#moGaurd").innerText = pgard.value;
  document.querySelector("#moDno").innerText = propDno.value;
  document.querySelector("#moVill").innerText = epVill.value;
  document.querySelector("#moPost").innerText = epPost.value;
  document.querySelector("#moDt").innerText = epDistrict.value;
  document.querySelector("#moTk").innerText = epTaluk.value;
  document.querySelector("#moPin").innerText = epPin.value;
  document.querySelector("#ddate").innerText = "Date: " + date.value;
  document.querySelector("#station").innerText = "Station: " + engVill.value;
  document.querySelector("#dddate").innerText = "Date: " + date.value;
  document.querySelector("#DfridgeMake").innerText = fridgeMake.value;
  document.querySelector("#DfridgeSno").innerText = fridgeSno.value;
  document.querySelector("#DacMake").innerText = acMake.value;
  document.querySelector("#DacSno").innerText = acSno.value;
  document.querySelector("#expia").innerText = expiary.value;
  document.querySelector("#reN").innerText = RegNo.value;
  document.querySelector("#phaName").innerText = ePharmaName.value;
});
