const btn = document.querySelector("#continue");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");
let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
<<<<<<< HEAD
    }, (100 * 20));
=======
    }, (2000));
>>>>>>> 9ba87cb0a9fca9a168a5bae0239513b32156a335
});
// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })
// modal.addEventListener("click", (e) => {
//     switch(e.target.className) {
//         case "close":
//         case "modal":
//         modal.style.display = "none"
//         break;
//     }
// })
async function showModal() {
    await promiseOfModal;
    modal.style.display = "block";
}
showModal();

<<<<<<< HEAD
promiseOfModal.then(function (val) {
    console.log("User has been on the page for 60 seconds");
    val.style.display = "block";
})

modal.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "close":
        case "modal":
            modal.style.display = "none"
            break;
    }
})


promiseOfModal.then(function (val) {});

const btnMsg = "Continue to subscribe"

btn.addEventListener("mouseout", (e) => {
    function resolveMsg() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 200);
        });
    }
    async function asyncCall() {
        const result = await resolveMsg();
        console.log("Change button text");
        btn.textContent = btnMsg;
    }
    asyncCall();
})

modal.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "close":
        case "modal":
            modal.style.display = "none"
            break;
    }

})
=======
document.addEventListener("DOMContentLoaded", promiseOfModal);

const buttonclick = () => {
    const promiseOfButton = new Promise(function (resolve) {
        window.setTimeout(function () {
            resolve(btn)
        }, (0));
    });
    promiseOfButton.then(function (btn) {
        alert("Continue to Subscribe!")
        btn.style.background = "#17A2B8";
    })
};
btn.addEventListener("animationend", buttonclick)
// CLOSING THE MODAL
const closeIt = () => {
    modal.style.display = "none";
}
closeBtn.addEventListener("click", closeIt);
>>>>>>> 9ba87cb0a9fca9a168a5bae0239513b32156a335
