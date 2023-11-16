// login fast buttom
document.querySelector(".l-g-u").addEventListener("click", tapMe);

function tapMe() {
    var element = document.querySelector(".from_container");
    element.style.display = "block";
    
let closeCrose=document.querySelector(".close-buttom");
closeCrose.addEventListener('click',function(){
element.style.display="none";
})
}





let login10 = document.querySelector(".hii-boat");

login10.addEventListener("click", function () {
    // Freeze the scroll bar
    document.body.classList.add("freeze-scroll");
    // open the form
    let show = document.querySelector(".popup");
    show.style.display = "block";

    let cut = document.querySelector(".close-buttom2");
        // close the form
    cut.addEventListener("click", function () {
        show.style.display = "none";
        // Unfreeze the scroll bar
        document.body.classList.remove("freeze-scroll");
    });


    // second popup display
    let clickOtp=document.querySelector(".send")
    clickOtp.addEventListener('click',function(){
        let popup2=document.querySelector(".second-popup");
        popup2.style.display="block";
        show.style.display = "none";

        // cut otp input form
        let cut2=document.querySelector(".close-buttom3");
        cut2.addEventListener('click',function(){
        popup2.style.display="none"
        document.body.classList.remove("freeze-scroll");
    })
    })

    // thard form open
    let step1=document.querySelector(".continue10");
    step1.addEventListener('click',function(){
        let openThard=document.querySelector(".thard-popup");
        openThard.style.display="block"
        document.querySelector(".second-popup").style.display="none"
        

        // thard form close

        let closeEnd=document.querySelector(".close-button4");
        closeEnd.addEventListener('click',function(){
            openThard.style.display="none"
            document.body.classList.remove("freeze-scroll");
        })
        let s=document.querySelector(".submitHere");
        s.addEventListener('click',function(){
            openThard.style.display="none"
            document.body.classList.remove("freeze-scroll");
        })
    })

});




// let login10 = document.querySelector(".hii-boat");
// login10.addEventListener('click',function(){
//     var firstPopup = document.querySelector('.popup');
//     firstPopup.style.display="block"

// })

// document.addEventListener("DOMContentLoaded", function () {
//     // First Popup
//     var firstPopup = document.querySelector('.popup');
//     var closeBtn1 = firstPopup.querySelector('.close-buttom2');
//     var sendBtn = firstPopup.querySelector('.send');

//     // Second Popup
//     var secondPopup = document.querySelector('.second-popup');
//     var closeBtn2 = secondPopup.querySelector('.close-buttom3');
//     var continueBtn = secondPopup.querySelector('.continue10');
//     var resendBtn = secondPopup.querySelector('.resend');

//     // Third Popup
//     var thirdPopup = document.querySelector('.thard-popup');
//     var closeBtn3 = thirdPopup.querySelector('.close-button4');
//     var submitBtn = thirdPopup.querySelector('.submitHere');

//     // User authentication variables
//     var isLoggedIn = false;
//     var userFullName = "";

//     // Functions to show/hide popups
//     function showFirstPopup() {
//         firstPopup.style.display = 'block';
//     }

//     function hideFirstPopup() {
//         firstPopup.style.display = 'none';
//     }

//     function showSecondPopup() {
//         secondPopup.style.display = 'block';
//     }

//     function hideSecondPopup() {
//         secondPopup.style.display = 'none';
//     }

//     function showThirdPopup() {
//         thirdPopup.style.display = 'block';
//     }

//     function hideThirdPopup() {
//         thirdPopup.style.display = 'none';
//     }

//     // Event listeners
//     closeBtn1.addEventListener('click', hideFirstPopup);

//     sendBtn.addEventListener('click', function () {
//         // For simplicity, assume the user is authenticated successfully
//         isLoggedIn = true;
//         userFullName = "John Doe";

//         hideFirstPopup();
//         showSecondPopup();

//         // Display user information in the second popup
//         document.querySelector('.numberindia').textContent = userFullName;
//     });

//     closeBtn2.addEventListener('click', hideSecondPopup);
//     continueBtn.addEventListener('click', function () {
//         hideSecondPopup();
//         showThirdPopup();
//     });

//     resendBtn.addEventListener('click', showSecondPopup);

//     closeBtn3.addEventListener('click', hideThirdPopup);
//     submitBtn.addEventListener('click', function () {
//         // For simplicity, assume the user submission is successful
//         alert('Login successful! Welcome, ' + userFullName);
//         hideThirdPopup();
//     });
// });

