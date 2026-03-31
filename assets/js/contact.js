// ==================== START CONTACT ====================
function sendMessToWhatsapp() {
    let params = {
        name: document.getElementById("name").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        yourService: document.getElementById("yourService").value,
        yourCity: document.getElementById("yourCity").value,
        placeOfTravel: document.getElementById("placeOfTravel").value,
        message: document.getElementById("message").value,
    };
    // ------------
    if (params.name != "" && params.yourService != "") {
        var url = "https://wa.me/" + "+966549158654" + "?text="
            
            + "مرحبا ، أريد التواصل معكم" + "%0a"
            + "الاسم: " + params.name + "%0a"
            + "رقم الهاتف: " + params.phoneNumber + "%0a"
            + "الخدمة: " + params.yourService + "%0a"
            + "أتواجد في: " + params.yourCity + "%0a"
            + "أريد الذهاب إلى: " + params.placeOfTravel + "%0a"
            + "ملاحظة: " + params.message;
            
        window.open(url, '_blank').focus();
    } else {
        alert("يجب ادخال الاسم واختيار الخدمة على الأقل");
    }
    
};
// ==================== END CONTACT ====================
// ***************************************************

